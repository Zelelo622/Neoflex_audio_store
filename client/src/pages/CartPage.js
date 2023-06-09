import React, { useContext, useEffect, useState } from "react";
import CartFavList from "../components/cart/CartFavList";
import OrderSummary from "../components/cart/OrderSummary";
import {
  decreaseProduct,
  increaseProduct,
  removeFromCart,
} from "../utils/cartUtils";
import "../assets/styles/CartStyle.css";
import { ProductContext } from "../utils/ProductProvider";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const { totalQuantity, updateTotalQuantity } = useContext(ProductContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartTotal(cartItems);
  }, [cartItems]);

  useEffect(() => {
    updateCartTotal(cartItems);
  }, [cartItems, totalQuantity, totalPrice]);

  const handleRemoveFromCart = (productTitle) => {
    const newCartItems = removeFromCart(cartItems, productTitle);
    setCartItems(newCartItems);
    updateCartTotal(newCartItems);
  };

  const handleDecrease = (productTitle, newQuantity) => {
    const newCartItems = decreaseProduct(cartItems, productTitle, newQuantity);
    setCartItems(newCartItems);
    updateCartTotal(newCartItems);
  };

  const handleIncrease = (productTitle, newQuantity) => {
    const newCartItems = increaseProduct(cartItems, productTitle, newQuantity);
    setCartItems(newCartItems);
    updateCartTotal(newCartItems);
  };

  const updateCartTotal = (cartItems) => {
    let quantity = 0;
    let price = 0;
    cartItems.forEach((item) => {
      quantity += item.quantity;
      price += item.quantity * item.price;
    });
    setTotalPrice(price);
    updateTotalQuantity(quantity);
  };

  return (
    <>
      <div className="cart">
        <div className="cart__header">
          <h2 className="cart__title">Коризина</h2>
        </div>
        <div className="cart__inner">
          {cartItems.length === 0 ? (
            <p className="cart__text">Корзина пустая</p>
          ) : (
            <CartFavList
              products={cartItems}
              removeFromCart={handleRemoveFromCart}
              decreaseProduct={handleDecrease}
              increaseProduct={handleIncrease}
              pageType={"cart"}
            />
          )}
          <OrderSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
        </div>
      </div>
    </>
  );
};

export default CartPage;
