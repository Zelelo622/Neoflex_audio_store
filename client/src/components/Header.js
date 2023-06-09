import React, { useContext } from "react";
import { CART_ROUTE, FAVOURITES_ROUTE, HOME_ROUTE } from "../utils/consts";
import FavouritesSvg from "../assets/icons/favourites-icon.svg";
import CartSvg from "../assets/icons/cart-icon.svg";
import "../assets/styles/HeaderStyle.css";
import { ProductContext } from "../utils/ProductProvider";

const Header = () => {
  const { totalQuantity, totalQuantityFav } = useContext(ProductContext);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <h1 className="header__title">
            <a href={HOME_ROUTE}>QPICK</a>
          </h1>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item">
              <a href={FAVOURITES_ROUTE} className="header-link">
                <div className="cart-icon">
                  <img src={FavouritesSvg} alt="Избранное" />
                  {totalQuantityFav > 0 && (
                    <span className="header__cart-counter">
                      {totalQuantityFav}
                    </span>
                  )}
                </div>
              </a>
            </li>
            <li className="header__list-item">
              <a href={CART_ROUTE} className="header-link">
                <div className="cart-icon">
                  <img src={CartSvg} alt="Корзина" />
                  {totalQuantity > 0 && (
                    <span className="header__cart-counter">
                      {totalQuantity}
                    </span>
                  )}
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
