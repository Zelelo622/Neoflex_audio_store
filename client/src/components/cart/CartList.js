import React from "react";
import CartItem from "./CartItem";

const CartList = ({
  products,
  removeFromCart,
  decreaseProduct,
  increaseProduct,
}) => {
  return (
    <div className="cart__list">
      {products.map((product) => (
        <CartItem
          key={product.title}
          product={product}
          removeFromCart={removeFromCart}
          decreaseProduct={decreaseProduct}
          increaseProduct={increaseProduct}
        />
      ))}
    </div>
  );
};

export default CartList;
