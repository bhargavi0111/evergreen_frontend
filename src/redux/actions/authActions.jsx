


import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Use named import
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGOUT = 'LOGOUT';
export const LOAD_USER = 'LOAD_USER';

const API_URL = 'http://localhost:4000/auth';

// Login Action
export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const { token } = response.data;

    // Store token in localStorage
    localStorage.setItem('token', token);

    // Decode the token to get user data (if token contains user info)
    const decodedUser = jwtDecode(token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token, user: decodedUser },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response?.data?.errors || 'Login failed',
    });
  }
};

// Signup Action
export const signup = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    const { token } = response.data;

    // Store token in localStorage
    localStorage.setItem('token', token);

    // Decode the token to get user data
    const decodedUser = jwtDecode(token);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: { token, user: decodedUser },
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error.response?.data?.errors || 'Signup failed',
    });
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  
  dispatch({
    type: LOGOUT,
  });
};

// Load User Action: Auto-login on app load if token exists
export const loadUser = () => (dispatch) => {
  const token = localStorage.getItem('token');

  if (token) {
    try {
      // Decode token to get user info
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


// authActions.js


export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';


// Forgot Password Action
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
      payload: error.response?.data?.errors || 'Password reset request failed',
    });
  }
};

// Reset Password Action
export const resetPassword = (token, newPassword) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, { token, newPassword });
    
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response?.data?.errors || 'Password reset failed',
    });
  }
};
