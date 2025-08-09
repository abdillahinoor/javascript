// cart.js
let cart = [];

export function addToCart(product) {
  cart.push(product);
}

export function getCart() {
  return cart;
}
