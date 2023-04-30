import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [totalQuantity, setTotalQuantity] = useState(
    Number(localStorage.getItem("totalQuantity")) || 0
  );

  const updateTotalQuantity = (quantity) => {
    setTotalQuantity(quantity);
    localStorage.setItem("totalQuantity", quantity);
  };

  return (
    <CartContext.Provider value={{ totalQuantity, updateTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
