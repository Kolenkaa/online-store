import { getAllProductCards } from "../productCard/getAllProductCards";

const colorFilterCheckboxes = document.querySelectorAll("#filter-color input[type='checkbox']") as NodeListOf<HTMLInputElement>

function getActiveFilters() {
	const activeFilters: Record<string, boolean> = {};

	colorFilterCheckboxes.forEach((input) => {
		if (input.checked) {
			activeFilters[input.id] = input.checked;
		}
	});

	return activeFilters;
}

colorFilterCheckboxes.forEach((colorFilterInput) => {
	(colorFilterInput as HTMLInputElement).onchange = (event: InputEvent) => {
		const colorFilterChecked = (event.target as HTMLInputElement).checked;

		const productCards = getAllProductCards();

		const activeFilters = getActiveFilters();

		productCards.forEach((product) => {
			const colorFilter = product.dataset.color;		

			// Ecли ипнут = checked и в активных фильтрах нету продукта с соответствующим countryCode
			if (colorFilterChecked && !activeFilters[colorFilter]) {
				product.style.display = "none";
			}
			// Ecли ипнут = checked и в активных фильтрах есть продукт с соответствующим countryCode и он не видим на, т.е. display none
			if (colorFilterChecked && activeFilters[colorFilter] && product.style.display === "none") {
				product.style.display = "flex";
			}
			// Ecли ипнут != checked и в активных фильтрах нету продукта с соответствующим countryCode и он является видимым, нужно его скрыть
			if (!colorFilterChecked && !activeFilters[colorFilter] && product.style.display === "flex") {
				product.style.display = "none";
			}

			// Если активных филтров нету, показать все продукты
			if (Object.keys(activeFilters).length === 0 && product.style.display === "none") {
				product.style.display = "flex";
			}
		});
	};
});

export { colorFilterCheckboxes }