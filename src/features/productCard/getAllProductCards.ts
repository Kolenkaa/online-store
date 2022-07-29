function getAllProductCards() {
  const productCardNodes = document.querySelectorAll("#products-grid .item");

  return productCardNodes as NodeListOf<HTMLDivElement>;
}

export { getAllProductCards };
