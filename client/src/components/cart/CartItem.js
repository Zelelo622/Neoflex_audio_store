import React, { useState } from "react";
import BasketSvg from "../../assets/icons/basket.svg";

const CartItem = ({
  product,
  removeFromCart,
  decreaseProduct,
  increaseProduct,
}) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleDecrease = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    decreaseProduct(product.title, newQuantity);
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    increaseProduct(product.title, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(product.title);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-quant-inner">
        <img className="cart-item__img" src={product.img} alt={product.title} />
        <div className="cart-item-quant">
          <button
            className="cart-item__btn btn-min"
            onClick={handleDecrease}
          ></button>
          <span>{product.quantity}</span>
          <button
            className="cart-item__btn btn-plus"
            onClick={handleIncrease}
          ></button>
        </div>
      </div>
      <div className="cart-item__content">
        <div className="cart-item__title-container">
          <h3 className="cart-item__title">{product.title}</h3>
          <div className="cart-item__text-grey cart-item__text">
            {product.price} ₽
          </div>
        </div>
        <div className="cart-item__addition">
          <div className="cart-item__text">{product.price} ₽</div>
          <button className="cart-item__btn-remove" onClick={handleRemove}>
            <img src={BasketSvg} alt="Удалить товар из корзины" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
