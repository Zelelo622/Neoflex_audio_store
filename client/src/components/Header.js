import React from "react";
import { CART_ROUTE, FAVOURITES_ROUTE, HOME_ROUTE } from "../utils/consts";
import FavouritesSvg from "../assets/icons/favourites-icon.svg";
import CartSvg from "../assets/icons/cart-icon.svg";
import "../assets/styles/HeaderStyle.css";

const Header = () => {
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
                <img src={FavouritesSvg} alt="Избранное" />
              </a>
            </li>
            <li className="header__list-item">
              <a href={CART_ROUTE} className="header-link">
                <img src={CartSvg} alt="Корзина" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
