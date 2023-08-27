import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal.jsx";
import "./ProductSlider.css";


const ProductSlider = ({ products }) => {
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  const [modal, setModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (img, title, desc, price, id) => {
    let tempData = [img, title, desc, price, id];
    setTempdata((item) => [1, ...tempData]);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* General about section */}
      <section className="about" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="image" style={{ marginTop: "3rem" }}>
                <img
                  src="https://th.bing.com/th/id/OIP.5mdIHxe2pbdPj42SYaafywHaF3?w=233&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7="
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="content">
                <div className="title">
                  <h1
                    style={{
                      marginTop: "3rem",
                      marginBottom: "1rem",
                      textDecoration: "none !important",
                    }}
                  >
                    Welcome to our VeggieVerse
                  </h1>
                </div>
                <p style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
                  Nature's bounty, just a tap away.!
                </p>
                <div className="icons-container">
                  <div className="row">
                    <div
                      className="icons col-lg-5 d-flex justify-content-center align-items-center"
                      style={{
                        padding: "1rem",
                        border: "2px solid #052A2A",
                        margin: "0.5rem",
                        borderRadius: "5px",
                        transition: "background-color 0.3s",
                      }}
                    >
                      <button className="w-100 h-100 p-0 border-0 bg-transparent">Vegetables</button>
                    </div>
                    <div
                      className="icons col-lg-5 d-flex justify-content-center align-items-center"
                      style={{
                        padding: "1rem",
                        border: "2px solid #052A2A",
                        margin: "0.5rem",
                        borderRadius: "5px",
                        transition: "background-color 0.3s",
                      }}
                    >
                      <button className="w-100 h-100 p-0 border-0 bg-transparent">fruits</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h3
        className="text-center"
        style={{ marginTop: "6rem", color: "#052A2A" }}
      >
        You can Order
      </h3>
      <h1 className="text-center">Our Fresh Veggies</h1>

      <section className="py-4 py-lg-5 container w-100">
        <Slider {...sliderSettings}>
          {sortedProducts.slice(0, 10).map((item, index) => (
            <div
              className="slider-container col-3 col-md-6 col-lg-3 mx-0 mb-4"
              key={index}
            >
              <div className="card custom-card  p-0 shadow" style={{ height: "400px" }}>
                <img src={item.images.url} className="card-img-top" alt="..." style={{ height: "200px" }} />

                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <h6 className="card-text">Starting with {item.price}</h6>

                </div>
                <div className="card-footer">
                  <button
                    className="btn explore-btn  btn-primary"
                    onClick={() =>
                      getData(item.images.url, item.name, item.description, item.price, item._id)
                    }
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {modal && (
        <Modal
          handleClose={handleClose}
          img={tempdata[1]}
          title={tempdata[2]}
          desc={tempdata[3]}
          price={tempdata[4]}
          id={tempdata[5]}
        />
      )}
    </>
  );
};

export default ProductSlider;
