
import "./Marketstyle.css";
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { loadUser } from '../../redux/actions/user';
import { getAllShops } from "../../redux/actions/shop";

export default function Market() {
  const dispatch = useDispatch();

  const { loading, shops, error, message } = useSelector(state => state.shop);

  useEffect(() => {
    dispatch(getAllShops());

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
    <div>
      {/* BACKGROUND IMAGE */}
      <div className="background-image">
        <h1 className="store-text" style={{ color: "#052A2A" }}>
          Stores
        </h1>
      </div>

      {/* VEGETABLE SHOPS NEARBY */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <form>
              <div className="mb-3">
                <label
                  htmlFor="stateInput"
                  className="form-label"
                  style={{ fontSize: "1.5rem", color: "#052A2A" }}
                >
                  <b>State:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="stateInput"
                  style={{
                    borderStyle: "solid",
                    borderWidth: "3px",
                    borderColor: "#c4fa6f",
                  }}
                  placeholder="Enter state"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="cityInput"
                  className="form-label"
                  style={{ fontSize: "1.5rem", color: "#052A2A" }}
                >
                  <b>City:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cityInput"
                  style={{
                    borderStyle: "solid",
                    borderWidth: "3px",
                    borderColor: "#c4fa6f",
                  }}
                  placeholder="Enter city"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-lg"
                  style={{ backgroundColor: "#052A2A", color: "#d9edc4" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>



      <div className="container">
        <h1 className="my-4" style={{ color: "#052A2A" }}>
          Some of Our Partners
        </h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4">
          {shops.length > 0 ? (
            shops.map((shop, key) => (
              <div className="col store" key={key}>
                <div className="card custom-card" style={{ height: '400px' }}>
                  <img src={shop.images.url} className="card-img-top" alt="Vendor 1" style={{ height: '180px' }} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#052A2A" }}>
                      {shop.name}
                    </h5>
                    <p className="card-text" style={{ color: "#052A2A" }}>
                      {shop.description}
                    </p>
                    <p className="card-text" style={{ color: "#052A2A" }}>
                      {shop.service}
                    </p>
                    <Link to={`/products/${shop._id}`}>
                      <button className="btn btn-lg custom-btn"> View Products</button>
                    </Link>


                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2>Shops Not Found</h2>
          )}
        </div>
      </div>
    </div>
  );
}
