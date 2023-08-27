import { server } from "../store.js";

import axios from "axios";

export const createShop = (formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    };

    dispatch({ type: "createShopRequest" });

    const { data } = await axios.post(`${server}/shop/new`, formdata, config);

    dispatch({ type: "createShopSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "createShopFail",
      payload: error.response.data.message,
    });
  }
};

export const createProduct = (formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    };

    dispatch({ type: "createProductRequest" });

    const { data } = await axios.post(
      `${server}/product/new`,
      formdata,
      config
    );

    dispatch({ type: "createProductSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "createProductFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteProductRequest" });

    const { data } = await axios.delete(`${server}/product/${id}`, config);

    dispatch({ type: "deleteProductSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteProductFail",
      payload: error.response.data.message,
    });
  }
};
