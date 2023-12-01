console.log('export');

const shippingCost = 10;
const cart = [];
const totalPrice = 10;
const totalQuantity = 10;

const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log({ product, quantity });
};

export { addToCart, totalPrice, totalQuantity };
