import * as noUiSlider from "nouislider";
import { products } from "./data/products";
import { createProductCardHtml } from "./features/productCard/createProductCardHtml";

console.log("Dom isn't not loaded yet");

document.addEventListener("DOMContentLoaded", function () {
  const productsGrid = document.getElementById("products-grid");

  console.log(productsGrid, "productsGrid");

  products.forEach((product) => {
    const productCardHtml = createProductCardHtml({
      id: product.id,
      name: product.name,
      imageSrc: product.img,
      price: product.price,
    });

    productsGrid.appendChild(productCardHtml);
  });
});

import "nouislider/dist/nouislider.css";
import "./styles.scss";

const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");

noUiSlider.create(slider1, {
  start: [0, 310],
  tooltips: true,
  connect: true,
  step: 1,
  range: {
    min: 0,
    max: 310,
  },
  format: {
    to: function (value) {
      return parseInt(value.toString());
    },
    from: function (value) {
      return parseInt(value.toString());
    },
  },
});

noUiSlider.create(slider2, {
  start: [0, 10],
  tooltips: true,
  connect: true,
  step: 1,
  range: {
    min: 0,
    max: 10,
  },
  format: {
    to: function (value) {
      return parseInt(value.toString());
    },
    from: function (value) {
      return parseInt(value.toString());
    },
  },
});
