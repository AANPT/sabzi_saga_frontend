import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../assets/images/banner-0.jpg";
import banner2 from "../../assets/images/banner-1.jpg";
import banner3 from "../../assets/images/banner-2.jpg";
import banner4 from "../../assets/images/banner-3.jpg";
import banner5 from "../../assets/images/banner-4.jpg";
const SliderTop = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item style={{ height: "400px" }} interval={3000}>
          <img
            className="d-block h-100 w-100 object-fit-cover"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>SabziSaga</h3>
            <p>From Farm to Fork: Savor Nature's Bounty with Sabzi Saga!.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }} interval={5000}>
          <img
            className="d-block h-100 w-100 object-fit-cover"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>SabziSaga</h3>
            <p>From Farm to Fork: Savor Nature's Bounty with Sabzi Saga!.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }} interval={5000}>
          <img
            className="d-block h-100 w-100 object-fit-cover"
            src={banner3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>SabziSaga</h3>
            <p>From Farm to Fork: Savor Nature's Bounty with Sabzi Saga!.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }} interval={5000}>
          <img
            className="d-block h-100 w-100 object-fit-cover"
            src={banner4}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>SabziSaga</h3>
            <p>From Farm to Fork: Savor Nature's Bounty with Sabzi Saga!.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }}>
          <img
            className="d-block h-100 w-100 object-fit-cover"
            src={banner5}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>SabziSaga</h3>
            <p>From Farm to Fork: Savor Nature's Bounty with Sabzi Saga!.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default SliderTop;
