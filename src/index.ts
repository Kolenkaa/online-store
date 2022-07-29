import "./styles.scss"
// import db from './data/db.json';

import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');

noUiSlider.create(slider1, {
	start: [0, 310],
	tooltips: true,
	connect: true,
	step: 1,
	range: {
		'min': 0,
		'max': 310
	},
	format: {
		to: function (value) {
			return parseInt(value.toString());
		},
		from: function (value) {
			return parseInt(value.toString());
		}
	}
});

noUiSlider.create(slider2, {
	start: [0, 10],
	tooltips: true,
	connect: true,
	step: 1,
	range: {
		'min': 0,
		'max': 10
	},
	format: {
		to: function (value) {
			return parseInt(value.toString());
		},
		from: function (value) {
			return parseInt(value.toString());
		}
	}
});

/*------create cart-----------*/

// function createCardHtml(id: string, name: string, imageSrc: string, price: string) {
// 	const cardItem = document.createElement("div");
// 	cardItem.id = id;
// 	cardItem.className = "item";

// 	const cardImage = document.createElement("img");
// 	cardImage.className = "item__image";
// 	cardImage.src = imageSrc;

// 	const cardTitle = document.createElement("h3");
// 	cardTitle.innerText = name;
// 	cardTitle.className = "item__description";

// 	const cardLink = document.createElement("a");
// 	cardLink.className = "item__open-popup";
// 	cardLink.innerText = "падрабязней";

// 	const itemPriceWrapper = document.createElement("div");
// 	itemPriceWrapper.className = "item__price-wrapper";

// 	const itemPrice = document.createElement("h4");
// 	itemPrice.innerText = price;
// 	itemPrice.className = "item__price";

// 	const itemBtn = document.createElement("button");
// 	itemBtn.className = "item__btn";

// 	const itemCart = document.createElement("img");
// 	itemCart.src = imageSrc;


// 	cardItem.appendChild(cardImage);
// 	cardItem.appendChild(cardTitle);
// 	cardItem.appendChild(cardLink);
// 	cardItem.appendChild(itemPriceWrapper);

// 	itemPriceWrapper.appendChild(itemPrice);
// 	itemPriceWrapper.appendChild(itemBtn);

// 	itemBtn.appendChild(itemCart);

// 	return cardItem;
// }

// fetch('./data/db.json').then((result) => result.json()).then(() => {
// 	const itemsContainer = document.querySelector(".item-list");

// 	initItem();

// 	function initItem() {

// 	}
// })
const myRequest = new Request('./data/db.json');
console.log(myRequest, 'myR');
fetch('db.json')
	.then((result) => {
		result.json();
	})
	.then((data) => {
		console.log(data);
	});

