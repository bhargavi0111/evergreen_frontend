import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const LOGOUT = "LOGOUT";
export const LOAD_USER = "LOAD_USER";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAIL = "FORGOT_PASSWORD_FAIL";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";
export const CLEAR_FORGOT_PASSWORD_MESSAGES = "CLEAR_FORGOT_PASSWORD_MESSAGES";
export const CLEAR_RESET_PASSWORD_MESSAGES = "CLEAR_RESET_PASSWORD_MESSAGES";

const API_URL = "http://localhost:4000/auth";

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const { token } = response.data;

    localStorage.setItem("token", token);

    const decodedUser = jwtDecode(token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token, user: decodedUser },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response?.data?.errors || "Login failed",
    });
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    const { token } = response.data;

    localStorage.setItem("token", token);

    const decodedUser = jwtDecode(token);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: { token, user: decodedUser },
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error.response?.data?.errors || "Signup failed",
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");

  dispatch({
    type: LOGOUT,
  });
};

export const loadUser = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedUser = jwtDecode(token);

      dispatch({
        type: LOAD_USER,
        payload: { token, user: decodedUser },
      });
    } catch (error) {
      dispatch(logout());
    }
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response?.data?.errors || "Password reset request failed",
    });
  }
};

export const resetPassword = (token, newPassword) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, {
      token,
      newPassword,
    });

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response?.data?.errors || "Password reset failed",
    });
  }
};

export const clearForgotPasswordMessages = () => ({
  type: CLEAR_FORGOT_PASSWORD_MESSAGES,
});

export const clearResetPasswordMessages = () => ({
  type: CLEAR_RESET_PASSWORD_MESSAGES,
});
