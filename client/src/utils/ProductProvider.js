import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [totalQuantity, setTotalQuantity] = useState(
    Number(localStorage.getItem("totalQuantity")) || 0
  );
  const [totalQuantityFav, setTotalQuantityFav] = useState(
    Number(localStorage.getItem("totalQuantityFav")) || 0
  );

  const updateTotalQuantity = (quantity) => {
    setTotalQuantity(quantity);
    localStorage.setItem("totalQuantity", quantity);
  };

  const updateTotalQuantityFav = (quantity) => {
    setTotalQuantityFav(quantity);
    localStorage.setItem("totalQuantityFav", quantity);
  };

  return (
    <ProductContext.Provider
      value={{
        totalQuantity,
        updateTotalQuantity,
        totalQuantityFav,
        updateTotalQuantityFav,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
