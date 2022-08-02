import { getAllProductCards } from "../productCard/getAllProductCards";

const countryFilterCheckboxes = document.querySelectorAll(
	"#filter-country input[type='checkbox']"
) as NodeListOf<HTMLInputElement>;

function getActiveFilters() {
	const activeFilters: Record<string, boolean> = {};

	countryFilterCheckboxes.forEach((input) => {
		if (input.checked) {
			activeFilters[input.id] = input.checked;
		}
	});

	return activeFilters;
}

countryFilterCheckboxes.forEach((countryFilterInput) => {
	(countryFilterInput as HTMLInputElement).onchange = (event: InputEvent) => {
		const countryFilterChecked = (event.target as HTMLInputElement).checked;

		const productCards = getAllProductCards();

		const activeFilters = getActiveFilters();

		productCards.forEach((product) => {
			const countryCode = product.dataset.countryCode;

			// Ecли ипнут = checked и в активных фильтрах нету продукта с соответствующим countryCode
			if (countryFilterChecked && !activeFilters[countryCode]) {
				product.style.display = "none";
			}
			// Ecли ипнут = checked и в активных фильтрах есть продукт с соответствующим countryCode и он не видим на, т.е. display none
			if (countryFilterChecked && activeFilters[countryCode] && product.style.display === "none") {
				product.style.display = "flex";
			}
			// Ecли ипнут != checked и в активных фильтрах нету продукта с соответствующим countryCode и он является видимым, нужно его скрыть
			if (!countryFilterChecked && !activeFilters[countryCode] && product.style.display === "flex") {
				product.style.display = "none";
			}

			// Если активных филтров нету, показать все продукты
			if (Object.keys(activeFilters).length === 0 && product.style.display === "none") {
				product.style.display = "flex";
			}
		});
	};
});

export { countryFilterCheckboxes };