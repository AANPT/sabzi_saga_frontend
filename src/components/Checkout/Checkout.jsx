import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from '../../redux/actions/user';
import { toast } from "react-hot-toast";
import { Link } from 'react-router-dom';
import { placeOrder } from "../../redux/actions/profile";

function Checkout() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  let total;
  if (user && user.cart) {
    const cartItems = user.cart;
    total = cartItems.reduce((acc, item) => acc + item.product_price * item.product_buy_quant, 0);
  }
  const couponDiscount = 5;
  const convenienceFee = 40;

  const [email, setEmail] = useState(user?.email || '');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const [buyerName, setName] = useState(user?.name || '');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [phoneNo, setPhoneNo] = useState(user?.phoneNo || '');
  const [city, setCity] = useState('');
  const [pincode, setPinCode] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);



  const submitHandler = e => {


    e.preventDefault();
    if (user) {
      const products = user.cart;
      const myForm = new FormData();
      const paymentForm = new FormData();
      paymentForm.append('total', grandTotal);
      const fullName = firstName + " " + secondName;
      if (fullName !== buyerName)
        setName(fullName);

      myForm.append('buyerName', buyerName);
      myForm.append('email', email);
      myForm.append('address', address);
      myForm.append('state', state);
      myForm.append('city', city);
      myForm.append('phoneNo', phoneNo);
      myForm.append('total', grandTotal);
      myForm.append('pincode', pincode);
      myForm.append('products', JSON.stringify(products));

      dispatch(placeOrder(myForm));
    }

  }


  return (
    <div>
      <div className="py-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}>
        <div className="container">
          <h1>Checkout</h1>
        </div>
      </div>

      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header">
                  <h4>Basic Information</h4>
                </div>

                {!user ? (
                  <div>Loading...</div>
                ) : (
                  <form onSubmit={submitHandler}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              placeholder="First Name"
                              value={user.name.split(' ')[0]}
                              name="firstname"
                              className="form-control"
                              onChange={e => setFirstName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group mb-3">

                            <input
                              type="text"
                              name="lastname"
                              placeholder="Last Name"

                              value={user.name.split(' ')[1]}
                              onChange={e => setSecondName(e.target.value)}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              name="phone"
                              placeholder="phone No."
                              value={user.phoneNo}
                              onChange={e => setPhoneNo(e.target.value)}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group mb-3">

                            <input
                              type="text"
                              name="email"
                              placeholder="Email"
                              value={user.email}
                              onChange={e => setEmail(e.target.value)}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group mb-3">

                            <textarea
                              rows={"3"}
                              placeholder="Full Address"
                              className="form-control"
                              onChange={e => setAddress(e.target.value)}
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group mb-3">

                            <input
                              type="text"
                              name="city"
                              placeholder="City"
                              className="form-control"
                              onChange={e => setCity(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group mb-3">

                            <input
                              type="text"
                              name="state"
                              placeholder="State"
                              className="form-control"
                              onChange={e => setState(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group mb-3">

                            <input
                              type="text"
                              name="pincode"
                              placeholder="PinCode"
                              className="form-control"
                              onChange={e => setPinCode(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group text-end">
                            <Link to='/cart'>
                              <button type="button" className="btn btn-primary" style={{ backgroundColor: "#052A2A", color: "#d9edc4" }}>
                                cancel
                              </button>
                            </Link>

                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#052A2A", color: "#d9edc4" }}>
                              Place Order
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>


            </div>
            <div className="col-md-5">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th width="50%" style={{ fontSize: "1rem", color: "#052A2A" }}>Product</th>
                    <th style={{ fontSize: "1rem", color: "#052A2A" }}>Price</th>
                    <th style={{ fontSize: "1rem", color: "#052A2A" }}>Qty</th>
                    <th style={{ fontSize: "1rem", color: "#052A2A" }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {user?.cart ? (
                    user.cart.length > 0 ? (
                      user.cart.map(item => (
                        <tr>
                          {/* These are dummy data */}
                          <td>{item.product_name}</td>
                          <td>{item.product_price}</td>
                          <td>{item.product_buy_quant}</td>
                          <td>₹{item.product_price * item.product_buy_quant}</td>
                        </tr>

                      ))
                    ) : (
                      <h1 className="d-flex justify-content-center align-items-center">No Item to Place order.</h1>
                    )
                  ) : (
                    <p>Loading user data...</p>
                  )}

                  <tr>
                    <td colSpan={"2"} className="text-end fw-bold" style={{ fontSize: "1 rem", color: "#052A2A" }}>Total</td>
                    <td colSpan={"2"} className="text-end fw-bold" style={{ fontSize: "1 rem", color: "#052A2A" }}>₹{total}</td>

                  </tr>
                  <tr>
                    <td colSpan={"2"} className="text-end fw-bold" style={{ fontSize: "1 rem", color: "#052A2A" }}>Offers and Discount</td>
                    <td colSpan={"2"} className="text-end fw-bold" style={{ fontSize: "1 rem", color: "#052A2A" }}>₹{(couponDiscount * total) / 100 + convenienceFee}</td>

                  </tr>
                  <tr>
                    <td colSpan={"2"} className="text-end fw-bold" style={{ fontSize: "1 rem", color: "#052A2A" }}>Grand Total</td>
                    <td colSpan={"2"} className="text-end fw-bold" style={{ fontSize: "1 rem", color: "#052A2A" }}>₹{total - (couponDiscount * total) / 100 + convenienceFee}</td>

                  </tr>
                </tbody>
              </table>
            </div>


          </div>

        </div>
      </div>

    </div>
  );
}

export default Checkout;
