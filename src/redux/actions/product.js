import { server } from "../store.js";
import axios from "axios";

export const getAllProducts =
  (category = "", keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "allProductsRequest" });

      const { data } = await axios.get(
        `${server}/products?keyword=${keyword}&category=${category}`
      );

      dispatch({ type: "allProductsSuccess", payload: data.products });
    } catch (error) {
      dispatch({
        type: "allProductsFail",
        payload: error.message.data.message,
      });
    }
  };

export const getShopProducts = (shopId) => async (dispatch) => {
  try {
    dispatch({ type: "allShopProductsRequest" });

    const { data } = await axios.get(`${server}/products/${shopId}`);

    dispatch({ type: "allShopProductsSuccess", payload: data.products });
  } catch (error) {
    dispatch({
      type: "allShopProductsFail",
      payload: error.message.data.message,
    });
  }
};
