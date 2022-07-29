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
    const countryFilterId = (event.target as HTMLInputElement).id;
    const countryFilterChecked = (event.target as HTMLInputElement).checked;

    const productCards = getAllProductCards();

    const activeFilters = getActiveFilters();

    productCards.forEach((product) => {
      const countryCode = product.dataset.countryCode;

      console.log(activeFilters, "activeFilters");

      if (countryFilterChecked && countryCode !== countryFilterId) {
        product.style.display = "none";
      }

      if (Object.keys(activeFilters).length === 0 && product.style.display === "none") {
        product.style.display = "flex";
      }
    });
  };
});

export { countryFilterCheckboxes };
