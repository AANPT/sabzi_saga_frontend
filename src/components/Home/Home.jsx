import React, { useEffect } from "react";
import SliderTop from "./SliderTop";
import ProductSlider from "./ProductSlider";
import { getAllProducts } from "../../redux/actions/product";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(
    state => state.product
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      {/* carousel */}
      <SliderTop />

      <ProductSlider products={products} />
    </>
  );
};

export default Home;
