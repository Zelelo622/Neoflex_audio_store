import React from "react";
import { CART_ROUTE, FAVOURITES_ROUTE, HOME_ROUTE } from "../utils/consts";
import FavouritesSvg from "../assets/icons/favourites-icon.svg";
import CartSvg from "../assets/icons/cart-icon.svg";
import "../assets/styles/HeaderStyle.css";

const Header = () => {
  return (
    <header class="header">
      <div class="header__inner">
        <div class="header__logo">
          <h1 className="header__title">
            <a href={HOME_ROUTE}>QPICK</a>
          </h1>
        </div>
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__list-item">
              <a href={FAVOURITES_ROUTE} class="header-link">
                <img src={FavouritesSvg} alt="Избранное" />
              </a>
            </li>
            <li class="header__list-item">
              <a href={CART_ROUTE} class="header-link">
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
