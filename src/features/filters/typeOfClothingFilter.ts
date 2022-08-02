import { getAllProductCards } from "../productCard/getAllProductCards";

const typeOfClothingCheckboxes = document.querySelectorAll("#filter-type--clothing input[type='checkbox']") as NodeListOf<HTMLInputElement>

function getActiveFilters() {
	const activeFilters: Record<string, boolean> = {};

	typeOfClothingCheckboxes.forEach((input) => {
		if (input.checked) {
			activeFilters[input.id] = input.checked;
		}
	});

	return activeFilters;
}

typeOfClothingCheckboxes.forEach((typeOfClothingInput) => {
	(typeOfClothingInput as HTMLInputElement).onchange = (event: InputEvent) => {
		const typeOfClothingChecked = (event.target as HTMLInputElement).checked;

		const productCards = getAllProductCards();

		const activeFilters = getActiveFilters();

		productCards.forEach((product) => {
			const typeOfClothing = product.dataset.typeOfClothing;		

			// Ecли ипнут = checked и в активных фильтрах нету продукта с соответствующим countryCode
			if (typeOfClothingChecked && !activeFilters[typeOfClothing]) {
				product.style.display = "none";
			}
			// Ecли ипнут = checked и в активных фильтрах есть продукт с соответствующим countryCode и он не видим на, т.е. display none
			if (typeOfClothingChecked && activeFilters[typeOfClothing] && product.style.display === "none") {
				product.style.display = "flex";
			}
			// Ecли ипнут != checked и в активных фильтрах нету продукта с соответствующим countryCode и он является видимым, нужно его скрыть
			if (!typeOfClothingChecked && !activeFilters[typeOfClothing] && product.style.display === "flex") {
				product.style.display = "none";
			}

			// Если активных филтров нету, показать все продукты
			if (Object.keys(activeFilters).length === 0 && product.style.display === "none") {
				product.style.display = "flex";
			}
		});
	};
});

export { typeOfClothingCheckboxes }