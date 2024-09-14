

// const initialState = {
//   token: localStorage.getItem('token'),
//   isAuthenticated: !!localStorage.getItem('token'), // Set it based on the token presence
//   user: null,
//   error: null
// };

  
//   const authReducer = (state = initialState, action) => {
//     switch (action.type) {
    
//       case 'LOGIN_SUCCESS':
// case 'SIGNUP_SUCCESS':
//   return {
//     ...state,
//     token: action.payload.token,  // If token comes separately
//     user: action.payload.user,    // Add user data to the state
//     isAuthenticated: true,
//     error: null
//   };
//       case 'LOGIN_FAIL':
//       case 'SIGNUP_FAIL':
//         return {
//           ...state,
//           error: action.payload
//         };
//       case 'LOGOUT':
//         return {
//           ...state,
//           token: null,
//           isAuthenticated: false
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default authReducer;
  

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'), // Set based on token presence
  user: null,
  error: null,
  forgotPasswordMessage: '',
  forgotPasswordError: '',
  resetPasswordMessage: '',
  resetPasswordError: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
    case 'LOAD_USER':
      return {
        ...state,
        token: action.payload.token,  // Store token
        user: action.payload.user,    // Store user info
        isAuthenticated: true,
        error: null,
      };
      
    case 'LOGIN_FAIL':
    case 'SIGNUP_FAIL':
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        user: null,
      };
      case 'FORGOT_PASSWORD_SUCCESS':
        return {
          ...state,
          forgotPasswordMessage: action.payload,
          forgotPasswordError: '',
        };
      case 'FORGOT_PASSWORD_FAIL':
        return {
          ...state,
          forgotPasswordError: action.payload,
          forgotPasswordMessage: '',
        };
      case 'RESET_PASSWORD_SUCCESS':
        return {
          ...state,
          resetPasswordMessage: action.payload,
          resetPasswordError: '',
        };
      case 'RESET_PASSWORD_FAIL':
        return {
          ...state,
          resetPasswordError: action.payload,
          resetPasswordMessage: '',
        };

    case 'LOGOUT':
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
