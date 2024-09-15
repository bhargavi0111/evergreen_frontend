const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),
  user: null,
  error: null,
  forgotPasswordMessage: "",
  forgotPasswordError: "",
  resetPasswordMessage: "",
  resetPasswordError: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
    case "LOAD_USER":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
        error: null,
      };

    case "LOGIN_FAIL":
    case "SIGNUP_FAIL":
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        user: null,
      };
    case "FORGOT_PASSWORD_SUCCESS":
      return {
        ...state,
        forgotPasswordMessage: action.payload,
        forgotPasswordError: "",
      };
    case "FORGOT_PASSWORD_FAIL":
      return {
        ...state,
        forgotPasswordError: action.payload,
        forgotPasswordMessage: "",
      };
    case "RESET_PASSWORD_SUCCESS":
      return {
        ...state,
        resetPasswordMessage: action.payload,
        resetPasswordError: "",
      };
    case "RESET_PASSWORD_FAIL":
      return {
        ...state,
        resetPasswordError: action.payload,
        resetPasswordMessage: "",
      };
    case "CLEAR_FORGOT_PASSWORD_MESSAGES":
      return {
        ...state,
        forgotPasswordMessage: "",
        forgotPasswordError: "",
      };
    case "CLEAR_RESET_PASSWORD_MESSAGES":
      return {
        ...state,
        resetPasswordMessage: "",
        resetPasswordError: "",
      };

    case "LOGOUT":
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
