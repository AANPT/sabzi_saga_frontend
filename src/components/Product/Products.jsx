import React from "react";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ProductsList } from "../../Data.js";
const Products = () => {
  return (
    <>
      <div className="main_container">
        <div className="container">
          <h1 className="text-center my-5">Product Cards</h1>
          <div className="product">
            {ProductsList.map((product, key) => {
              return (
                <Card
                  className="custom-card"
                  key={key}
                  style={{
                    bordeStyle: "solid",
                    borderColor: "#c4fa6f",
                    borderWidth: "3px",
                  }}
                >
                  <div className="img-container">
                    <Card.Img className="card-img-top" src={product.img_url} />
                  </div>
                  <Card.Body className="card-body">
                    <Card.Title className="nameprice">
                      {product.name}
                      <span
                        className="price-tag"
                        style={{ marginLeft: "20px" }}
                      >
                        {product.price}
                      </span>
                    </Card.Title>
                    <Card.Text>{product.desc}</Card.Text>
                    <Card.Link href="#">Market</Card.Link>
                    <Button
                      className="btn mx-auto d-block custom-btn"
                      style={{
                        color: "#d9edc4",
                        backgroundColor: "#052a2a",
                        border: "none",
                      }}
                    >
                      Add To Cart
                    </Button>
                    <Button
                      className="btn mx-auto d-block custom-btn"
                      style={{
                        color: "#d9edc4",
                        backgroundColor: "#052a2a",
                        border: "none",
                      }}
                    >
                      Buy Now
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;