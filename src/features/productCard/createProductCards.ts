type CardOptions = {
	id: string;
	name: string;
	imageSrc: string;
	price: number;
	countryCode: string;
	typeOfClothing: string;
	color: string;
	size: string;
	favorite: string;
};

function createProductCardHtml({ id, name, imageSrc, price, countryCode, typeOfClothing, color, size, favorite }: CardOptions) {
	const cardItem = document.createElement("div");
	cardItem.id = id;
	cardItem.dataset.countryCode = countryCode;	
	cardItem.dataset.typeOfClothing = typeOfClothing;
	cardItem.dataset.color = color;
	cardItem.dataset.size = size;
	cardItem.dataset.favorite = favorite;
	cardItem.className = "item";

	const cardImage = document.createElement("img");
	cardImage.className = "item__image";
	cardImage.src = imageSrc;

	const cardTitle = document.createElement("h3");
	cardTitle.innerText = name;
	cardTitle.className = "item__description";

	const cardLink = document.createElement("a");
	cardLink.className = "item__open-popup";
	cardLink.innerText = "падрабязней";

	const itemPriceWrapper = document.createElement("div");
	itemPriceWrapper.className = "item__price-wrapper";

	const itemPrice = document.createElement("h4");
	itemPrice.innerText = `${price} руб.`;
	itemPrice.className = "item__price";

	const itemFavorites = document.createElement("img");
	itemFavorites.className = "item__image-favorites";
	itemFavorites.src = "assets/icon/star.svg";

	const itemBtn = document.createElement("button");
	itemBtn.className = "item__btn";

	const itemCart = document.createElement("img");
	itemCart.src = "assets/icon/to-cart.svg";

	cardItem.appendChild(cardImage);
	cardItem.appendChild(cardTitle);
	cardItem.appendChild(cardLink);
	cardItem.appendChild(itemPriceWrapper);

	itemPriceWrapper.appendChild(itemPrice);
	itemPriceWrapper.appendChild(itemFavorites);
	itemPriceWrapper.appendChild(itemBtn);	

	itemBtn.appendChild(itemCart);

	return cardItem;
}

export { createProductCardHtml };