import { products } from "./data/products";
import { createProductCardHtml } from "./features/productCard/createProductCards";
import "./features/filters/countryFilter";
import "./features/filters/typeOfClothingFilter";
import "./features/filters/colorFilter";
import "./features/filters/sizeFilter";
import "./features/filters/favoriteFilter";
import "./features/filters/priceFilter";

import "./styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  const productsGrid = document.getElementById("products-grid");

  products.forEach((product) => {
    const productCardHtml = createProductCardHtml({
      id: product.id,
      name: product.name,
      imageSrc: product.img,
      price: product.price,
      countryCode: product.teamCountry,
      typeOfClothing: product.typeOfClothing,
      color: product.color,
      size: product.size,
      favorite: product.favorite,
    });

    productsGrid.appendChild(productCardHtml);
  });
});
