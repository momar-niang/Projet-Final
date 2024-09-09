// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Tenues Classiques', price: '29.99 €', image: 'images/img1-.jpg' 
         }, // Assure-toi que le chemin de l'image est correct
        { name: 'Accessoires', price: '49.99 €', image: 'images/img14.jpg' },
        // Ajoute d'autres produits ici
    ];

    const productContainer = document.querySelector('.product-list');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Ajouter au Panier</button>
        `;
        productContainer.appendChild(productElement);
    });
});
