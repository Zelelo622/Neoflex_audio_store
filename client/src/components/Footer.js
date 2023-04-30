import React, { useState } from "react";
import { CART_ROUTE, FAVOURITES_ROUTE, HOME_ROUTE } from "../utils/consts";
import TelegramPng from "../assets/icons/telegram.png";
import WhatsappPng from "../assets/icons/whatsapp.png";
import VkPng from "../assets/icons/vk.png";
import GlobeSvg from "../assets/icons/globe.svg";
import "../assets/styles/FooterStyle.css";

const Footer = () => {
  const [language, setLanguage] = useState("rus");

  const handleClick = (lang) => {
    setLanguage(lang);
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <a href={HOME_ROUTE}>QPICK</a>
        </div>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href={FAVOURITES_ROUTE} className="footer-link">
              Избранное
            </a>
          </li>
          <li className="footer__list-item">
            <a href={CART_ROUTE} className="footer-link">
              Корзина
            </a>
          </li>
          <li className="footer__list-item">
            <a href="#!" className="footer-link">
              Контакты
            </a>
          </li>
        </ul>
        <div className="footer__conditions">
          <a href="#!" className="footer-link">
            Условия сервиса
          </a>
          <div className="footer__language">
            <img className="footer__language-img" src={GlobeSvg} alt="Языки" />
            <button
              className={`footer__language-btn ${
                language === "rus" ? "active" : ""
              }`}
              onClick={() => handleClick("rus")}
            >
              Рус
            </button>
            <button
              className={`footer__language-btn ${
                language === "eng" ? "active" : ""
              }`}
              onClick={() => handleClick("eng")}
            >
              Eng
            </button>
          </div>
        </div>
        <div className="footer__social">
          <a className="footer__social-link" href="#!">
            <img src={VkPng} alt="VK" />
          </a>
          <a className="footer__social-link" href="#!">
            <img src={TelegramPng} alt="Telegram" />
          </a>
          <a className="footer__social-link" href="#!">
            <img src={WhatsappPng} alt="Whatsapp" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
