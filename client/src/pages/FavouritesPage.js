import React, { useEffect, useState } from "react";
import { removeFromFavourite } from "../utils/favouriteUtils";
import CartFavList from "../components/cart/CartFavList";
import "../assets/styles/FavouriteStyle.css";

const FavouritesPage = () => {
  const [favouriteItems, setFavouriteItems] = useState(
    JSON.parse(localStorage.getItem("favouriteItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("favouriteItems", JSON.stringify(favouriteItems));
  }, [favouriteItems]);

  const handleRemoveFromFav = (productTitle) => {
    const newFavouriteItems = removeFromFavourite(favouriteItems, productTitle);
    setFavouriteItems(newFavouriteItems);
  };

  return (
    <>
      <div className="favourite">
        <div className="favourite__header">
          <h2 className="favourite__title">Избранное</h2>
        </div>
        <div className="favourite__inner">
          {favouriteItems.length === 0 ? (
            <p className="favourite__text">Пока вы ничего не добавили в избранное</p>
          ) : (
            <CartFavList
              products={favouriteItems}
              removeFromFav={handleRemoveFromFav}
              pageType={"favourite"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FavouritesPage;
