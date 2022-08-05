import * as noUiSlider from "nouislider";
import { products } from "./data/products";
import { createProductCardHtml } from "./features/productCard/createProductCards";
import { countryFilterCheckboxes } from "./features/filters/countryFilter";
import { typeOfClothingCheckboxes } from "./features/filters/typeOfClothingFilter";
import { colorFilterCheckboxes } from "./features/filters/colorFilter";
import { sizeFilterCheckboxes } from "./features/filters/sizeFilter";
import { favoriteFilterCheckboxes } from "./features/filters/favoriteFilter";

import "nouislider/dist/nouislider.css";
import "./styles.scss";

const sliderPrice = document.getElementById("slider-price");
const sliderCount = document.getElementById("slider-count");

noUiSlider.create(sliderPrice, {
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

noUiSlider.create(sliderCount, {
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


function doSomething() {
	// values: Current slider values (array);
	// handle: Handle that caused the event (number);
	// unencoded: Slider values without formatting (array);
	// tap: Event was caused by the user tapping the slider (boolean);
	// positions: Left offset of the handles (array);
	// noUiSlider: slider public Api (noUiSlider);
}

sliderPrice.on('change.one', function () { });

document.addEventListener("DOMContentLoaded", function () {
	const productsGrid = document.getElementById("products-grid");

	console.log(countryFilterCheckboxes, "inputss");
	console.log(typeOfClothingCheckboxes, "typeOfClothingCheckboxes");
	console.log(colorFilterCheckboxes, "colorFilterCheckboxes");
	console.log(sizeFilterCheckboxes, "sizeFilterCheckboxes");
	console.log(favoriteFilterCheckboxes, "favoriteFilterCheckboxes");
	

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
			favorite: product.favorite
		});

		productsGrid.appendChild(productCardHtml);
	});
});