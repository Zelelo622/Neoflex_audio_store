import React from "react";

const OrderSummary = ({ totalQuantity, totalPrice }) => {
  return (
    <div className="order-summary">
      <div className="order-summary__inner">
        <div className="order-summary__item">
          <div className="order-summary__title">Итого:</div>
          <div className="order-summary__value">₽ {totalPrice.toFixed(2)}</div>
        </div>
        <div className="order-summary__btn-cont">
          <button variant="primary" className="order-summary__button">
            Перейти к оформлению
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
