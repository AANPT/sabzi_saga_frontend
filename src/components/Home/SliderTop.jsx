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
        <Carousel.Item style={{ height: "400px" }} interval={5000}>
          <img
            className="d-block h-100 w-100 object-fit-cover"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }} interval={5000}>
          <img
            className="d-block h-100 w-100 object-fit-cover"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }} interval={5000}>
          <img
            className="d-block h-100 w-100 object-fit-cover"
            src={banner3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }} interval={5000}>
          <img
            className="d-block h-100 w-100 object-fit-cover"
            src={banner4}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }}>
          <img
            className="d-block h-100 w-100 object-fit-cover"
            src={banner5}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default SliderTop;
