import React from "react";
import "./style.css";
import img1 from "../../assets/images/bg_1.jpg";
import img2 from "../../assets/images/bg_2.jpg";
import img3 from "../../assets/images/bg_3.jpg";

export default function Market() {
  return (
    <div>
      {/* BACKGROUND IMAGE */}
      <div className="background-image">
        <h1 class="store-text" style={{ color: "#052A2A" }}>
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

      {/* EXPLORE STORES */}
      <div className="container">
        <h1 className="my-4" style={{ color: "#052A2A" }}>
          Some of Our Partners
        </h1>
        {/* Vendor List Using Bootstrap Grid */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Vendor 1 */}

          <div className="col">
            <div className="card h-100">
              <img src={img1} className="card-img-top" alt="Vendor 1" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#052A2A" }}>
                  E-Grocery Super Market
                </h5>
                <p className="card-text" style={{ color: "#052A2A" }}>
                  Organic Groceries
                </p>
                <p className="card-text" style={{ color: "#052A2A" }}>
                  Delivery <br />
                  Pickup available.
                </p>
                <a
                  href="#"
                  className="btn btn-lg"
                  style={{ backgroundColor: "#052A2A", color: "#d9edc4" }}
                >
                  View Products
                </a>
              </div>
            </div>
            ~~
          </div>

          {/* Vendor 2 */}
          <div className="col">
            <div className="card h-100 ">
              <img src={img2} className="card-img-top" alt="Vendor 2" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#052A2A" }}>
                  DMart
                </h5>
                <p className="card-text" style={{ color: "#052A2A" }}>
                  Vegetables Fruits Groceries
                </p>
                <p className="card-text" style={{ color: "#052A2A" }}>
                  Delievery <br />
                  Pickup available
                </p>
                <a
                  href="#"
                  className="btn btn-lg"
                  style={{ backgroundColor: "#052A2A", color: "#d9edc4" }}
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
          {/* Vendor 3 */}
          <div className="col">
            <div className="card h-100">
              <img src={img3} className="card-img-top" alt="Vendor 3" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#052A2A" }}>
                  Blinkit Store
                </h5>
                <p className="card-text" style={{ color: "#052A2A" }}>
                  Vegetables Fruits
                </p>
                <p className="card-text" style={{ color: "#052A2A" }}>
                  Delievery <br />
                  Pickup availabl
                </p>
                <a
                  href="#"
                  className="btn btn-lg"
                  style={{ backgroundColor: "#052A2A", color: "#d9edc4" }}
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
          {/* Add more vendors as needed using additional "col" divs */}
        </div>
      </div>
    </div>
  );
}
