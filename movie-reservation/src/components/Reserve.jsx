import React from "react";
import { useCart } from "react-use-cart";

import "../styles/Reserve.css";

const Reserve = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <div className="empty-container">
        <div className="Notification">Please reserve your ticket here!</div>
      </div>
    );
  return (
    <section>
      <div className="reserve-container">
        <div className="total-ticket">
          Reserve: {totalUniqueItems} to Total tickets: {totalItems}
        </div>
        <div className="ticket-container">
          {items.map((item, index) => {
            return (
              <div className="table-row" key={index}>
                <div className="img-container">
                  <img className="img" src={item.img} />
                </div>
                <p className="title">Title: {item.title}</p>
                <p className="price">Price: {item.price}</p>
                <p className="quantity">Quantity: {item.quantity}</p>
                <div className="button-container">
                  <button
                    className="minus-btn"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    className="add-btn"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total-price-container">
          <div className="total-price">Total Price: {cartTotal}</div>
          <button className="clear-btn" onClick={() => emptyCart()}>
            Clear
          </button>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
