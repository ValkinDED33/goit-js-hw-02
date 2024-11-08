function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Ukraine", 1000, 100));
console.log(getShippingMessage("USA", 500, 50));
console.log(getShippingMessage("Germany", 200, 20));
