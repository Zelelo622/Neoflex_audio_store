import React, { useContext } from "react";
import { addToCart } from "../../utils/cartUtils";
import { CartContext } from "../../utils/CartProvider";

const ProductCard = ({ product }) => {
  const { updateTotalQuantity } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    const totalQuantity = Number(localStorage.getItem("totalQuantity")) || 0;
    updateTotalQuantity(totalQuantity);
  };
  return (
    <div className="product-card">
      <img
        className="product-card__img"
        src={product.img}
        alt={product.title}
      />
      <div className="product-cart__section">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__price">{product.price} ₽</p>
      </div>
      <div className="product-cart__section">
        <p className="product-card__rate">{product.rate}</p>
        <button
          className="product-card__btn"
          onClick={(e) => {
            handleAddToCart(product);
          }}
        >
          Купить
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
