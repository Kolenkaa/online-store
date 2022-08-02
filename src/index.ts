import * as noUiSlider from "nouislider";
import { products } from "./data/products";
import { createProductCardHtml } from "./features/productCard/createProductCards";
import { countryFilterCheckboxes } from "./features/filters/countryFilter";
import { typeOfClothingCheckboxes } from "./features/filters/typeOfClothingFilter";
import { colorFilterCheckboxes } from "./features/filters/colorFilter";

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

document.addEventListener("DOMContentLoaded", function () {
	const productsGrid = document.getElementById("products-grid");

	console.log(countryFilterCheckboxes, "inputss");
	console.log(typeOfClothingCheckboxes, "typeOfClothingCheckboxes");
	console.log(colorFilterCheckboxes, "colorFilterCheckboxes");
	

	products.forEach((product) => {
		const productCardHtml = createProductCardHtml({
			id: product.id,
			name: product.name,
			imageSrc: product.img,
			price: product.price,
			countryCode: product.teamCountry,
			typeOfClothing: product.typeOfClothing,
			color: product.color
		});

		productsGrid.appendChild(productCardHtml);
	});
});