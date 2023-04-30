import React from "react";
import CartItem from "./CartItem";
import FavouriteItem from "../favourite/FavouriteItem";

const CartFavList = ({
  products,
  removeFromCart,
  decreaseProduct,
  increaseProduct,
  removeFromFav,
  pageType,
}) => {
  return (
    <div className="cart__list">
      {products.map((product) =>
        pageType === "cart" ? (
          <CartItem
            key={product.title}
            product={product}
            removeFromCart={removeFromCart}
            decreaseProduct={decreaseProduct}
            increaseProduct={increaseProduct}
          />
        ) : (
          <FavouriteItem
            key={product.title}
            product={product}
            removeFromFav={removeFromFav}
          />
        )
      )}
    </div>
  );
};

export default CartFavList;
