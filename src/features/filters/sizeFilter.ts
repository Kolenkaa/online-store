import { getAllProductCards } from "../productCard/getAllProductCards";

const sizeFilterCheckboxes = document.querySelectorAll("#filter-size input[type='checkbox']") as NodeListOf<HTMLInputElement>

function getActiveFilters() {
	const activeFilters: Record<string, boolean> = {};

	sizeFilterCheckboxes.forEach((input) => {
		if (input.checked) {
			activeFilters[input.id] = input.checked;
		}
	});

	return activeFilters;
}

sizeFilterCheckboxes.forEach((sizeFilterInput) => {
	(sizeFilterInput as HTMLInputElement).onchange = (event: InputEvent) => {
		const sizeFilterChecked = (event.target as HTMLInputElement).checked;

		const productCards = getAllProductCards();

		const activeFilters = getActiveFilters();

		productCards.forEach((product) => {
			const sizeFilter = product.dataset.size;		

			// Ecли ипнут = checked и в активных фильтрах нету продукта с соответствующим countryCode
			if (sizeFilterChecked && !activeFilters[sizeFilter]) {
				product.style.display = "none";
			}
			// Ecли ипнут = checked и в активных фильтрах есть продукт с соответствующим countryCode и он не видим на, т.е. display none
			if (sizeFilterChecked && activeFilters[sizeFilter] && product.style.display === "none") {
				product.style.display = "flex";
			}
			// Ecли ипнут != checked и в активных фильтрах нету продукта с соответствующим countryCode и он является видимым, нужно его скрыть
			if (!sizeFilterChecked && !activeFilters[sizeFilter] && product.style.display === "flex") {
				product.style.display = "none";
			}

			// Если активных филтров нету, показать все продукты
			if (Object.keys(activeFilters).length === 0 && product.style.display === "none") {
				product.style.display = "flex";
			}
		});
	};
});

export { sizeFilterCheckboxes }