const headerDiv = document.createElement('div');
headerDiv.id = 'header';

const titleH1 = document.createElement('h1');
titleH1.id = 'title';
titleH1.textContent = 'My online shop';

const logoImg = document.createElement('img');
logoImg.id = 'logo';
logoImg.src = 'https://img.redro.pl/obrazy/online-shop-icon-online-selling-web-700-218608434.jpg';

headerDiv.appendChild(titleH1);
headerDiv.appendChild(logoImg);
document.body.appendChild(headerDiv);

const shop_items = document.createElement('div');
shop_items.id = 'shop_items';
document.body.appendChild(shop_items);

const itemsData = [
    {
        name: 'iPhone',
        imageSrc: 'https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg',
        oldPrice: 20,
        newPrice: 15
    },
    {
        name: 'Pixel phone',
        imageSrc: 'https://www.zdnet.com/a/img/resize/14fea081f0f7563f39e3052f8dd99148cfcbaa78/2023/10/05/eb21f6fb-53a1-4dd7-8694-088bafabec28/google-pixel-8-in-pink.jpg?auto=webp&fit=crop&height=1200&width=1200',
        oldPrice: 20,
        newPrice: 18
    },
    {
        name: 'HP laptop',
        imageSrc: 'https://allegro.stati.pl/AllegroIMG/PRODUCENCI/HP/712C1EA/HP-Pavilion-15-ekran.jpg',
        oldPrice: 20,
        newPrice: 10
    }
];

itemsData.forEach(itemData => {
    const shopItem = document.createElement('div');
    shopItem.className = 'shop-item';

    const itemName = document.createElement('h6');
    itemName.textContent = itemData.name;

    const itemImage = document.createElement('img');
    itemImage.src = itemData.imageSrc;
    itemImage.alt = itemData.name + " image";

    shopItem.appendChild(itemName);
    shopItem.appendChild(itemImage);

    if (itemData.oldPrice !== undefined) {
        const oldPrice = document.createElement('p');
        oldPrice.className = 'shop-item-price-old';
        oldPrice.innerHTML = `The old price is <span>$${itemData.oldPrice}</span>. We have a mega sale!!!!`;
        shopItem.appendChild(oldPrice);
    }

    if (itemData.newPrice !== undefined) {
        const newPrice = document.createElement('p');
        newPrice.className = 'shop-item-price-new';
        newPrice.innerHTML = `The new price is <span>$${itemData.newPrice}</span>`;
        shopItem.appendChild(newPrice);
    }

    shop_items.appendChild(shopItem);
});


