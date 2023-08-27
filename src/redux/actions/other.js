import { server } from "../store";
import axios from "axios";

export const contactUs = (email, subject, description) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    dispatch({ type: "contactRequest" });

    const { data } = await axios.post(
      `${server}/contact`,
      { email, subject, description },
      config
    );

    dispatch({ type: "contactSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "contactFail",
      payload: error.response.data.message,
    });
  }
};

export const feedback = (email, subject, description) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    dispatch({ type: "feedbackRequest" });

    const { data } = await axios.post(
      `${server}/feedback`,
      { email, subject, description },
      config
    );

    dispatch({ type: "feedbackSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "feedbackFail",
      payload: error.response.data.message,
    });
  }
};
