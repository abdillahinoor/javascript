// main.js
import { products } from './products.js';
import { addToCart, getCart } from './cart.js';

const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');

// Show products with buttons 
products.forEach(product => {
  const item = document.createElement('li');
  item.innerHTML = `${product.name} - $${product.price} 
    <button>Add</button>`;

  item.querySelector('button').addEventListener('click', () => {
    addToCart(product);
    updateCartUI();
  });

  productList.appendChild(item);
});

function updateCartUI() {
  cartList.innerHTML = '';
  getCart().forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}


