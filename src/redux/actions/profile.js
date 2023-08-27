import { server } from "../store";
import axios from "axios";

export const changePassword =
  (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: "changePasswordRequest" });

      const { data } = await axios.put(
        `${server}/changepassword`,
        {
          oldPassword,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            "Content-type": "application/json",
          },

          withCredentials: true,
        }
      );

      dispatch({ type: "changePasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "changePasswordFail",
        payload: error.response.data.message,
      });
    }
  };

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgetPasswordRequest" });

    const config = {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/forgotpassword`,
      {
        email,
      },
      config
    );

    dispatch({ type: "forgetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "forgetPasswordFail",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword =
  (token, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: "resetPasswordRequest" });
      const config = {
        headers: {
          "Content-type": "application/json",
        },

        withCredentials: true,
      };

      const { data } = await axios.put(
        `${server}/resetpassword/${token}`,
        {
          password,
          confirmPassword,
        },
        config
      );

      dispatch({ type: "resetPasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "resetPasswordFail",
        payload: error.response.data.message,
      });
    }
  };

export const addToCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: "addToCartRequest" });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(`${server}/addtocart`, { id }, config);

    dispatch({ type: "addToCartSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "addToCartFail",
      payload: error.response.data.message,
    });
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: "removeFromCartRequest" });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `${server}/removefromcart?id=${id}`,
      config
    );

    dispatch({ type: "removeFromCartSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "removeFromCartFail",
      payload: error.response.data.message,
    });
  }
};

export const updateCartQuant = (cartId, buy_count) => async (dispatch) => {
  try {
    dispatch({ type: "updateCartRequest" });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/updatecart`,
      { cartId, buy_count },
      config
    );

    dispatch({ type: "updateCartSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateCartFail",
      payload: error.response.data.message,
    });
  }
};

export const placeOrder = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "placeOrderRequest" });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(`${server}/checkout`, formdata, config);

    dispatch({ type: "placeOrderSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "placeOrderFail",
      payload: error.response.data.message,
    });
  }
};
