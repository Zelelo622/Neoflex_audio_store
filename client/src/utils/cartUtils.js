export const handleAddToCart = (product) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingProductIndex = cartItems.findIndex(
    (item) => item.title === product.title
  );
  if (existingProductIndex !== -1) {
    cartItems[existingProductIndex].quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }
  const updatedCartItem =
    cartItems[existingProductIndex] || cartItems[cartItems.length - 1];
  updatedCartItem.totalPrice = updatedCartItem.price * updatedCartItem.quantity;
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalQuantity", totalQuantity);
  localStorage.setItem("totalPrice", totalPrice);
};

export const clearCart = () => {
  localStorage.removeItem("cartItems");
  return [];
};

export const deleteInfoCart = () => {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("totalPrice");
  localStorage.removeItem("totalQuantity");
};
