import React, { useContext } from "react";
import { addToCart } from "../../utils/cartUtils";
import { ProductContext } from "../../utils/ProductProvider";
import { addToFavourites } from "../../utils/favouriteUtils";

const ProductCard = ({ product }) => {
  const { updateTotalQuantity, updateTotalQuantityFav } =
    useContext(ProductContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    const totalQuantity = Number(localStorage.getItem("totalQuantity")) || 0;
    updateTotalQuantity(totalQuantity);
  };

  const handleAddToFavourite = (product) => {
    addToFavourites(product);
    const totalQuantityFav =
      Number(localStorage.getItem("totalQuantityFav")) || 0;
    updateTotalQuantityFav(totalQuantityFav);
  };

  return (
    <div className="product-card">
      <div style={{ textAlign: "right" }}>
        <button
          onClick={(e) => {
            handleAddToFavourite(product);
          }}
        >
          <svg
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="favourite-img"
          >
            <path
              d="M11.4867 1.65429C14.0706 -0.627558 18.0635 -0.551821 20.5528 1.90098C23.0409 4.35486 23.1267 8.2629 20.8124 10.812L11.4845 20L2.15892 10.812C-0.155442 8.2629 -0.0685429 4.34837 2.41851 1.90098C4.90996 -0.548575 8.89519 -0.630804 11.4867 1.65429ZM18.9952 3.42979C17.3452 1.80469 14.6833 1.73869 12.9563 3.26425L11.4878 4.56044L10.0183 3.26533C8.2858 1.73761 5.62935 1.80469 3.97498 3.43195C2.33601 5.04407 2.25351 7.62455 3.76379 9.32971L11.4856 16.937L19.2075 9.3308C20.7189 7.62455 20.6364 5.04732 18.9952 3.42979Z"
              fill="#838383"
            />
          </svg>

          {/* <img className="favourite-img" src={FavouritesSvg} alt="В избранное" /> */}
        </button>
      </div>
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
