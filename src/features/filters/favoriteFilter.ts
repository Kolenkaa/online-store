import { getAllProductCards } from "../productCard/getAllProductCards";

const favoriteFilterCheckboxes = document.querySelectorAll("#filter-favorite input[type='checkbox']") as NodeListOf<HTMLInputElement>

function getActiveFilters() {
	const activeFilters: Record<string, boolean> = {};

	favoriteFilterCheckboxes.forEach((input) => {
		if (input.checked) {
			activeFilters[input.id] = input.checked;
		}
	});

	return activeFilters;
}

favoriteFilterCheckboxes.forEach((favoriteFilterInput) => {
	(favoriteFilterInput as HTMLInputElement).onchange = (event: InputEvent) => {
		const favoriteFilterChecked = (event.target as HTMLInputElement).checked;

		const productCards = getAllProductCards();

		const activeFilters = getActiveFilters();

		productCards.forEach((product) => {
			const favoriteFilter = product.dataset.favorite;		

			// Ecли ипнут = checked и в активных фильтрах нету продукта с соответствующим countryCode
			if (favoriteFilterChecked && !activeFilters[favoriteFilter]) {
				product.style.display = "none";
			}
			// Ecли ипнут = checked и в активных фильтрах есть продукт с соответствующим countryCode и он не видим на, т.е. display none
			if (favoriteFilterChecked && activeFilters[favoriteFilter] && product.style.display === "none") {
				product.style.display = "flex";
			}
			// Ecли ипнут != checked и в активных фильтрах нету продукта с соответствующим countryCode и он является видимым, нужно его скрыть
			if (!favoriteFilterChecked && !activeFilters[favoriteFilter] && product.style.display === "flex") {
				product.style.display = "none";
			}

			// Если активных филтров нету, показать все продукты
			if (Object.keys(activeFilters).length === 0 && product.style.display === "none") {
				product.style.display = "flex";
			}
		});
	};
});

export { favoriteFilterCheckboxes }