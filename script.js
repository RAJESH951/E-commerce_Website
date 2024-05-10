// script.js
// Fetch products from an API and display them on the website
const productsSection = document.getElementById('products');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button>Add to Cart</button>
      `;
      productsSection.appendChild(productCard);
    });
  })
  .catch(error => console.error('Error fetching products:', error));