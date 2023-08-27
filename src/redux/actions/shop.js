import { server } from "../store.js";
import axios from "axios";

export const getAllShops = () => async (dispatch) => {
  try {
    dispatch({ type: "allShopsRequest" });

    const { data } = await axios.get(`${server}/shops`);

    dispatch({ type: "allShopsSuccess", payload: data.shops });
  } catch (error) {
    dispatch({
      type: "allShopsFail",
      payload: error.message.data.message,
    });
  }
};

export const loadShop = (email) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "loadShopRequest" });

    const { data } = await axios.get(`${server}/myshop/${email}`, config);
    dispatch({ type: "loadShopSuccess", payload: data.shop });
  } catch (error) {
    dispatch({ type: "loadShopFail", payload: error.response.data.message });
  }
};
