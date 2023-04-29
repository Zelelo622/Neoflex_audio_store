import React, { useEffect, useState } from "react";
import ProductList from "../components/product/ProductList";
import { headphones, wirelessHeadphones } from "../utils/products";
import "../assets/styles/HomeStyle.css";
import { addToCart } from "../utils/cartUtils";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__inner">
        <h2 className="home__title">Наушники</h2>
        <ProductList products={headphones} />
        <h2 className="home__title">Беспроводные наушники</h2>
        <ProductList products={wirelessHeadphones} />
      </div>
    </div>
  );
};

export default HomePage;
