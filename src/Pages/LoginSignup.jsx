
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { login, signup } from '../redux/actions/authActions';
// import './CSS/LoginSignup.css';

// const LoginSignup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });
//   const [captchaToken, setCaptchaToken] = useState('');
//   const [error, setError] = useState('');
//   const [state, setState] = useState('Login');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { isAuthenticated, error: reduxError } = useSelector(state => state.auth);

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/');
//     }
//   }, [isAuthenticated, navigate]);

//   useEffect(() => {
//     if (reduxError) {
//       setError(reduxError);
//     }
//   }, [reduxError]);

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleCaptcha = (value) => {
//   //   console.log('Captcha value changed:', value);
//   //   setCaptchaToken(value);
//   // };
//   console.log('Captcha Token:', captchaToken);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!formData.email || (state !== 'Forgot Password' && !formData.password)) {
//       setError('Please fill all fields');
//       return;
//     }

//     // if (!captchaToken) {
//     //   setError('Please complete the CAPTCHA');
//     //   return;
//     // }

//     const userData = {
//       ...formData,
//       captchaToken
//     };

//     try {
//       switch (state) {
//         case 'Login':
//           await dispatch(login(userData));
//           break;
//         case 'Sign Up':
//           await dispatch(signup(userData));
//           break;
//         default:
//           setError('Invalid state');
//           return;
//       }
//     } catch (err) {
//       console.error('Error in handleSubmit:', err);
//       setError('An unexpected error occurred. Please check the console for more details.');
//     }
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="loginsignup-fields">
//             {state === 'Sign Up' && (
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={changeHandler}
//               />
//             )}
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               value={formData.email}
//               onChange={changeHandler}
//             />
//             {state !== 'Forgot Password' && (
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={changeHandler}
//               />
//             )}
//           </div>

//           {/* <ReCAPTCHA
//             sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Use environment variable for site key
//             onChange={handleCaptcha}
//           /> */}

//           <div className="loginsignup-agree">
//             <input type="checkbox" name="agree" id="agree" />
//             <p>By continuing, I agree to the terms of use & privacy policy.</p>
//           </div>
//           <button type="submit">Continue</button>

//           {state === 'Login' ? (
//             <>
//               <p className="loginsignup-login">
//                 Don't have an account? <span onClick={() => setState('Sign Up')}>Sign up here</span>
//               </p>
//               <p className="loginsignup-login">
//                 Forgot your password? <span onClick={() => setState('Forgot Password')}>Click here</span>
//               </p>
//             </>
//           ) : state === 'Sign Up' ? (
//             <p className="loginsignup-login">
//               Already have an account? <span onClick={() => setState('Login')}>Login here</span>
//             </p>
//           ) : (
//             <p className="loginsignup-login">
//               Remembered your password? <span onClick={() => setState('Login')}>Login here</span>
//             </p>
//           )}

//           {error && <p className="loginsignup-error">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { login, signup, forgotPassword, resetPassword } from '../redux/actions/authActions';
// import './CSS/LoginSignup.css';
// import ForgotPassword from '../Components/resetpw/ForgotPassword';
// import ResetPassword from '../Components/resetpw/ResetPassword';
// const LoginSignup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });
//   const [captchaToken, setCaptchaToken] = useState('');
//   const [error, setError] = useState('');
//   const [state, setState] = useState('Login');
//   const [resetToken, setResetToken] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { isAuthenticated, error: reduxError, forgotPasswordMessage, forgotPasswordError, resetPasswordMessage, resetPasswordError } = useSelector(state => state.auth);

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/');
//     }
//   }, [isAuthenticated, navigate]);

//   useEffect(() => {
//     if (reduxError) {
//       setError(reduxError);
//     }
//   }, [reduxError]);

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCaptcha = (value) => {
//     setCaptchaToken(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!formData.email || (state !== 'Forgot Password' && !formData.password)) {
//       setError('Please fill all fields');
//       return;
//     }

//     if (state === 'Forgot Password') {
//       // if (!captchaToken) {
//       //   setError('Please complete the CAPTCHA');
//       //   return;
//       // }
//       dispatch(forgotPassword(formData.email));
//     } else if (state === 'Reset Password') {
//       if (!resetToken || !formData.password) {
//         setError('Please provide all fields');
//         return;
//       }
//       dispatch(resetPassword(resetToken, formData.password));
//     } else {
//       const userData = {
//         ...formData,
//         captchaToken
//       };

//       try {
//         if (state === 'Login') {
//           if (!captchaToken) {
//             setError('Please complete the CAPTCHA');
//             return;
//           }
//           await dispatch(login(userData));
//         } else if (state === 'Sign Up') {
//           await dispatch(signup(userData));
//         }
//       } catch (err) {
//         console.error('Error in handleSubmit:', err);
//         setError('An unexpected error occurred. Please check the console for more details.');
//       }
//     }
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="loginsignup-fields">
//             {state === 'Sign Up' && (
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={changeHandler}
//               />
//             )}
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               value={formData.email}
//               onChange={changeHandler}
//             />
//             {(state !== 'Forgot Password' && state !== 'Reset Password') && (
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={changeHandler}
//               />
//             )}
//           </div>

//           {/* CAPTCHA only for Login */}
//           {state === 'Login' && (
//             <ReCAPTCHA
//               sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Use environment variable for site key
//               onChange={handleCaptcha}
//             />
//           )}

//           <div className="loginsignup-agree">
//             <input type="checkbox" name="agree" id="agree" />
//             <p>By continuing, I agree to the terms of use & privacy policy.</p>
//           </div>
//           <button type="submit">Continue</button>

//           {state === 'Login' ? (
//             <>
//               <p className="loginsignup-login">
//                 Don't have an account? <span onClick={() => setState('Sign Up')}>Sign up here</span>
//               </p>
//               <p className="loginsignup-login">
//                 Forgot your password? <span onClick={() => setState('Forgot Password')}>Click here</span>
//               </p>
//             </>
//           ) : state === 'Sign Up' ? (
//             <p className="loginsignup-login">
//               Already have an account? <span onClick={() => setState('Login')}>Login here</span>
//             </p>
//           ) : state === 'Forgot Password' ? (
//             <p className="loginsignup-login">
//               Remembered your password? <span onClick={() => setState('Login')}>Login here</span>
//             </p>
//           ) : state === 'Reset Password' ? (
//             <p className="loginsignup-login">
//               Go back to <span onClick={() => setState('Login')}>Login</span> or <span onClick={() => setState('Forgot Password')}>Forgot Password</span>
//             </p>
//           ) : null}

//           {error && <p className="loginsignup-error">{error}</p>}
//           {forgotPasswordMessage && <p className="loginsignup-message">{forgotPasswordMessage}</p>}
//           {forgotPasswordError && <p className="loginsignup-error">{forgotPasswordError}</p>}
//           {resetPasswordMessage && <p className="loginsignup-message">{resetPasswordMessage}</p>}
//           {resetPasswordError && <p className="loginsignup-error">{resetPasswordError}</p>}
//         </form>

//         {state === 'Forgot Password' && (
//           <ForgotPassword />
//         )}

//         {state === 'Reset Password' && (
//           <ResetPassword />
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { login, signup, forgotPassword, resetPassword } from '../redux/actions/authActions';
// import './CSS/LoginSignup.css';

// const LoginSignup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });
//   const [captchaToken, setCaptchaToken] = useState('');
//   const [error, setError] = useState('');
//   const [state, setState] = useState('Login');
//   const [resetToken, setResetToken] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { isAuthenticated, error: reduxError, forgotPasswordMessage, forgotPasswordError, resetPasswordMessage, resetPasswordError } = useSelector(state => state.auth);

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/');
//     }
//   }, [isAuthenticated, navigate]);

//   useEffect(() => {
//     if (reduxError) {
//       setError(reduxError);
//     }
//   }, [reduxError]);

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCaptcha = (value) => {
//     setCaptchaToken(value);
//   };

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!formData.email) {
//       setError('Please enter your email');
//       return;
//     }

//     // if (!captchaToken) {
//     //   setError('Please complete the CAPTCHA');
//     //   return;
//     // }

//     dispatch(forgotPassword(formData.email));
//     setState('Reset Password');
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!resetToken || !newPassword) {
//       setError('Please provide all fields');
//       return;
//     }

//     dispatch(resetPassword(resetToken, newPassword));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!formData.email || (state !== 'Forgot Password' && !formData.password)) {
//       setError('Please fill all fields');
//       return;
//     }

//     if (state === 'Forgot Password') {
//       handleForgotPassword(e);
//     } else if (state === 'Reset Password') {
//       handleResetPassword(e);
//     } else {
//       const userData = {
//         ...formData,
//         captchaToken
//       };

//       try {
//         if (state === 'Login') {
//           if (!captchaToken) {
//             setError('Please complete the CAPTCHA');
//             return;
//           }
//           await dispatch(login(userData));
//         } else if (state === 'Sign Up') {
//           await dispatch(signup(userData));
//         }
//       } catch (err) {
//         console.error('Error in handleSubmit:', err);
//         setError('An unexpected error occurred. Please check the console for more details.');
//       }
//     }
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="loginsignup-fields">
//             {state === 'Sign Up' && (
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 name="username"
//                 value={formData.username}
//                 onChange={changeHandler}
//               />
//             )}
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               value={formData.email}
//               onChange={changeHandler}
//             />
//             {(state === 'Login' || state === 'Sign Up') && (
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={changeHandler}
//               />
//             )}
//             {state === 'Reset Password' && (
//               <>
//                 <input
//                   type="password"
//                   placeholder="New Password"
//                   name="newPassword"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                 />
//               </>
//             )}
//           </div>

//           {/* CAPTCHA only for Login */}
//           {state === 'Login' && (
//             <ReCAPTCHA
//               sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Use environment variable for site key
//               onChange={handleCaptcha}
//             />
//           )}

//           <div className="loginsignup-agree">
//             <input type="checkbox" name="agree" id="agree" />
//             <p>By continuing, I agree to the terms of use & privacy policy.</p>
//           </div>
//           <button type="submit">Continue</button>

//           {state === 'Login' ? (
//             <>
//               <p className="loginsignup-login">
//                 Don't have an account? <span onClick={() => setState('Sign Up')}>Sign up here</span>
//               </p>
//               <p className="loginsignup-login">
//                 Forgot your password? <span onClick={() => setState('Forgot Password')}>Click here</span>
//               </p>
//             </>
//           ) : state === 'Sign Up' ? (
//             <p className="loginsignup-login">
//               Already have an account? <span onClick={() => setState('Login')}>Login here</span>
//             </p>
//           ) : state === 'Forgot Password' ? (
//             <p className="loginsignup-login">
//               Remembered your password? <span onClick={() => setState('Login')}>Login here</span>
//             </p>
//           ) : state === 'Reset Password' ? (
//             <p className="loginsignup-login">
//               Go back to <span onClick={() => setState('Login')}>Login</span>
//             </p>
//           ) : null}

//           {error && <p className="loginsignup-error">{error}</p>}
//           {forgotPasswordMessage && <p className="loginsignup-message">{forgotPasswordMessage}</p>}
//           {forgotPasswordError && <p className="loginsignup-error">{forgotPasswordError}</p>}
//           {resetPasswordMessage && <p className="loginsignup-message">{resetPasswordMessage}</p>}
//           {resetPasswordError && <p className="loginsignup-error">{resetPasswordError}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { login, signup, forgotPassword, resetPassword } from '../redux/actions/authActions';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [captchaToken, setCaptchaToken] = useState('');
  const [error, setError] = useState('');
  const [state, setState] = useState('Login');
  const [resetToken, setResetToken] = useState('');  // <-- Reset token input state
  const [newPassword, setNewPassword] = useState('');  // <-- New password input state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, error: reduxError, forgotPasswordMessage, forgotPasswordError, resetPasswordMessage, resetPasswordError } = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (reduxError) {
      setError(reduxError);
    }
  }, [reduxError]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleCaptcha = (value) => {
  //   setCaptchaToken(value);
  // };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email) {
      setError('Please enter your email');
      return;
    }

  

    dispatch(forgotPassword(formData.email));
    setState('Reset Password');
  };


  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');

    // Check if reset token and new password are provided
    if (!resetToken.trim() || !newPassword.trim()) {
        setError('Please fill out all fields');  // This error shows if any field is empty
        return;
    }

    // Dispatch the action with the token and new password
    dispatch(resetPassword(resetToken, newPassword));
};
const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  if (state === 'Reset Password') {
      handleResetPassword(e);  // Call the reset password handler
  }
  else if (state === 'Forgot Password') {
    handleForgotPassword(e);
      } 
     else if (state === 'Login' || state === 'Sign Up') {
      // Handle login/signup logic here
      const userData = { ...formData, captchaToken };

      try {
          if (state === 'Login') {
              // if (!captchaToken) {
              //     setError('Please complete the CAPTCHA');
              //     return;
              // }
              await dispatch(login(userData));
          } else if (state === 'Sign Up') {
              await dispatch(signup(userData));
          }
      } catch (err) {
          console.error('Error in handleSubmit:', err);
          setError('An unexpected error occurred. Please check the console for more details.');
      }
  }
};




  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {state === 'Sign Up' && (
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={changeHandler}
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
            {(state === 'Login' || state === 'Sign Up') && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
              />
            )}

            {state === 'Reset Password' && (
              <>
                <input
                  type="text"
                  placeholder="Enter Reset Token"  // <-- New input for reset token
                  name="resetToken"
                  value={resetToken}
                  onChange={(e) => setResetToken(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter New Password"  // <-- Input for new password
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </>
            )}
          </div>

          {/* CAPTCHA only for Login */}
          {/* {state === 'Login' && (
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Use environment variable for site key
              onChange={handleCaptcha}
            />
          )} */}

          <div className="loginsignup-agree">
            <input type="checkbox" name="agree" id="agree" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          <button type="submit">Continue</button>

          {state === 'Login' ? (
            <>
              <p className="loginsignup-login">
                Don't have an account? <span onClick={() => setState('Sign Up')}>Sign up here</span>
              </p>
              <p className="loginsignup-login">
                Forgot your password? <span onClick={() => setState('Forgot Password')}>Click here</span>
              </p>
            </>
          ) : state === 'Sign Up' ? (
            <p className="loginsignup-login">
              Already have an account? <span onClick={() => setState('Login')}>Login here</span>
            </p>
          ) : state === 'Forgot Password' ? (
            <p className="loginsignup-login">
              Remembered your password? <span onClick={() => setState('Login')}>Login here</span>
            </p>
          ) : state === 'Reset Password' ? (
            <p className="loginsignup-login">
              Go back to <span onClick={() => setState('Login')}>Login</span>
            </p>
          ) : null}

          {error && <p className="loginsignup-error">{error}</p>}
          {forgotPasswordMessage && <p className="loginsignup-message">{forgotPasswordMessage}</p>}
          {forgotPasswordError && <p className="loginsignup-error">{forgotPasswordError}</p>}
          {resetPasswordMessage && <p className="loginsignup-message">{resetPasswordMessage}</p>}
          {resetPasswordError && <p className="loginsignup-error">{resetPasswordError}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
