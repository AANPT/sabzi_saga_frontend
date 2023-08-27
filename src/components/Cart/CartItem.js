import React from "react";
import "./CartDemo.css";

function CartItem({ item, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <div className="cart-item">
      {/* <img src={item.imageUrl} alt={item.name} className="cart-item-image" /> */}
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
      </a>
      &nbsp;&nbsp;&nbsp;
      <div className="cart-item-details">
        <div>{item.name}</div>
        <div className="price-quantity">
          <div style={{ fontSize: "11px" }}>Price: {item.price}</div>
        </div>
        <div className="quantity-buttons">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <div className="quantity-display">{item.quantity}</div>{" "}
          {/* Display quantity here */}
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
        <div> ₹{item.price * item.quantity}</div>
      </div>
      <button
        className="remove-button"
        onClick={() => removeItem(item.id)}
      ></button>
    </div>
  );
}

export default CartItem;
