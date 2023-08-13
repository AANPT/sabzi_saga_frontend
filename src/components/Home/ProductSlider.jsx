import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductSliderData } from "../../Data.js";
import Modal from "./Modal.jsx";
import { useMediaQuery } from "react-responsive";
import "./ProductSlider.css";

const ProductSlider = () => {
  const [modal, setModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (img, title, desc, price) => {
    let tempData = [img, title, desc, price];
    setTempdata((item) => [1, ...tempData]);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  //   const isDesktopOrLaptop = useMediaQuery({
  //     query: "(min-width: 992px)",
  //   });

  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  // Calculate slidesToShow based on screen size
  let slidesToShow = 3;
  if (isMobile) {
    slidesToShow = 1;
  } else if (isTablet) {
    slidesToShow = 2;
  }

  // Slick Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
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
                      className="icons col-lg-4 "
                      style={{
                        padding: "1rem",
                        border: "2px solid #052A2A",
                        margin: "0.5rem",
                        borderRadius: "5px",
                        transition: "background-color 0.3s",
                      }}
                    >
                      <h3>Weekly Offers</h3>
                    </div>
                    <div
                      className="icons col-lg-5"
                      style={{
                        padding: "1rem",
                        border: "2px solid #052A2A",
                        margin: "0.5rem",
                        borderRadius: "5px",
                        transition: "background-color 0.3s",
                      }}
                    >
                      <h3>Budget-friendly</h3>
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
      <section className="py-4 py-lg-5 container">
        <Slider {...sliderSettings}>
          {ProductSliderData.map((item, index) => (
            <div
              className="slider-container col-11 col-md-6 col-lg-3 mx-0 mb-4"
              key={index}
            >
              <div className="card" p-0 overflow-hidden h-100 shadow>
                <img src={item.imgsrc} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <h6 className="card-text">Starting with {item.price}</h6>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      getData(item.imgsrc, item.title, item.desc, item.price)
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
        />
      )}
    </>
  );
};

export default ProductSlider;
