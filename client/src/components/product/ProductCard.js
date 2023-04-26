import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-card__img" src={product.img} alt={product.title} />
      <div className="product-cart__section">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__price">{product.price} руб.</p>
      </div>
      <div className="product-cart__section">
        <p className="product-card__rate">{product.rate}</p>
        <button className="product-card__btn">Купить</button>
      </div>
    </div>
  );
};

export default ProductCard;
