import React, { useContext } from "react";
import { ProductContext } from "../../utils/ProductProvider";
import { addToCart } from "../../utils/cartUtils";

const FavouriteItem = ({ product, removeFromFav }) => {
  const { updateTotalQuantity } = useContext(ProductContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    const totalQuantity = Number(localStorage.getItem("totalQuantity")) || 0;
    updateTotalQuantity(totalQuantity);
  };

  const handleRemove = () => {
    removeFromFav(product.title);
  };

  return (
    <div className="favourite-item">
      <div className="favourite-item-quant-inner">
        <img
          className="favourite-item__img"
          src={product.img}
          alt={product.title}
        />
      </div>
      <div className="favourite-item__content">
        <div className="favourite-item__title-container">
          <h3 className="favourite-item__title">{product.title}</h3>
          <div className="favourite-item__text-grey favourite-item__text">
            {product.price} ₽
          </div>
        </div>
        <div className="favourite-item__addition">
          <button className="favourite-item__btn-buy" onClick={() => handleAddToCart(product)}>
            Купить
          </button>
          <button className="favourite-item__btn-remove" onClick={handleRemove}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteItem;
