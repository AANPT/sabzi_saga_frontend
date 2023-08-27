
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAllProducts } from '../../redux/actions/product';
import { loadUser } from '../../redux/actions/user';
import { getShopProducts } from "../../redux/actions/product";
import { addToCart } from "../../redux/actions/profile";

const Products = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const params = useParams();

  const { loading, products, error, message } = useSelector(
    state => state.product
  );


  const addToCartHandler = async (productId) => {
    await dispatch(addToCart(productId));
    dispatch(loadUser());
  }

  useEffect(() => {
    if (params.shopId) {
      dispatch(getShopProducts(params.shopId));
    }
    else {
      dispatch(getAllProducts(category, keyword));
    }

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, category, keyword, error, message, params]);

  return (
    <>
      <div className="main_container">
        <div className="container">
          <h1 className="text-center my-5">Product Cards</h1>
          <div className="product">
            {
              products.length > 0 ? (
                products.map((product, key) => {
                  return (
                    <Card
                      className="custom-card"
                      key={key}
                      style={{
                        maxHeight: "450px",
                        bordeStyle: "solid",
                        borderColor: "#c4fa6f",
                        borderWidth: "3px",
                      }}
                    >
                      <div className="img-container">
                        <Card.Img className="card-img-top" src={product.images.url} />
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
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Link href="/market">Market</Card.Link>
                        <Button
                          className="btn mx-auto d-block custom-btn"
                          style={{
                            color: "#d9edc4",
                            backgroundColor: "#052a2a",
                            border: "none",
                          }}

                          onClick={() => addToCartHandler(product._id)}
                        >
                          Add To Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })
              ) : (
                <h2>Products Not Found</h2>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;