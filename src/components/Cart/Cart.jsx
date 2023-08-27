import React, { useEffect } from "react";
// import CartItem from "./CartItem";
import "./CartDemo.css";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from '../../redux/actions/user';
import { removeFromCart, updateCartQuant } from "../../redux/actions/profile";
import { toast } from "react-hot-toast";
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { error, message, loading } = useSelector(state => state.cart);

  const increaseQuantity = async (itemId, count) => {
    const new_buy_count = count + 1;
    await dispatch(updateCartQuant(itemId, new_buy_count));
    dispatch(loadUser());
  };

  const decreaseQuantity = async (itemId, count) => {

    const new_buy_count = count - 1;
    if (new_buy_count <= 0) return;

    await dispatch(updateCartQuant(itemId, new_buy_count));
    dispatch(loadUser());

  };

  const removeItemHandler = async (itemId) => {
    await dispatch(removeFromCart(itemId));
    dispatch(loadUser());
    // setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  let total;
  if (user && user.cart) {
    const cartItems = user.cart;
    total = cartItems.reduce((acc, item) => acc + item.product_price * item.product_buy_quant, 0);
  }
  const couponDiscount = 5;
  const convenienceFee = 40;


  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <div className="cart">
      <div className="cart-items-container">
        {user?.cart ? (
          user.cart.length > 0 ? (
            user.cart.map(item => (
              <CartItem
                key={item._id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItemHandler={removeItemHandler}
              />
            ))
          ) : (
            <h1 className="d-flex justify-content-center align-items-center">No items in the cart.</h1>
          )
        ) : (
          <p>Loading user data...</p>
        )}


      </div>

      {total > 0 && (<div className="cart-summary-container">
        <div className="cart-summary">
          <h3>Cart Summary</h3>
          <div>Initial Total: ₹{total}</div>
          <button className="cart-summary-button">Apply Coupon</button>
          <div className="coupon-discount">Coupon Discount: <span className="green">-₹{(couponDiscount * total) / 100}</span></div>
          <div>Convenience Fee: ₹{convenienceFee}</div>
          <div>Total: ₹{total - (couponDiscount * total) / 100 + convenienceFee}</div>
        </div>
        <p className="cart-summary-text">Safe and Secure Payments. Easy returns. 100% Fresh products.</p>
        <div className="place-order">
          <Link to='/checkout'> <button className="place-order-button">Place Order</button></Link>
        </div>
      </div>

      )}
    </div>
  );
}

export default Cart;


function CartItem({ item, increaseQuantity, decreaseQuantity, removeItemHandler }) {
  return (
    <div className="cart-item">
      {/* <img src={item.imageUrl} alt={item.name} className="cart-item-image" /> */}
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={item.product_image_url} alt={item.product_name} className="cart-item-image" />
      </a>
      &nbsp;&nbsp;&nbsp;
      <div className="cart-item-details">
        <div>{item.product_name}</div>
        <div className="price-quantity">
          <div style={{ fontSize: "11px" }}>Price: {item.product_price}</div>
        </div>
        <div className="quantity-buttons">
          <button onClick={() => decreaseQuantity(item._id, item.product_buy_quant)}>-</button>
          <div className="quantity-display">{item.product_buy_quant}</div>{" "}
          {/* Display quantity here */}
          <button onClick={() => increaseQuantity(item._id, item.product_buy_quant)}>+</button>
        </div>
        <div> ₹{item.product_price * item.product_buy_quant}</div>
      </div>
      <button
        className="remove-button"
        onClick={() => removeItemHandler(item.product)}
      ></button>
    </div>
  );
}