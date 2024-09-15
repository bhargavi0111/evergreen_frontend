import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {
  login,
  signup,
  forgotPassword,
  resetPassword,
} from "../redux/actions/authActions";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState("Login");
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    isAuthenticated,
    error: reduxError,
    forgotPasswordMessage,
    forgotPasswordError,
    resetPasswordMessage,
    resetPasswordError,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (reduxError) {
      setError(reduxError);
    }
  }, [reduxError]);

  useEffect(() => {
    if (state === "Login") {
      setError("");
      dispatch({ type: "CLEAR_FORGOT_PASSWORD_MESSAGES" });
      dispatch({ type: "CLEAR_RESET_PASSWORD_MESSAGES" });
    }
  }, [state, dispatch]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (value) => {
    setCaptchaToken(value);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email) {
      setError("Please enter your email");
      return;
    }

    dispatch(forgotPassword(formData.email));
    setState("Reset Password");
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (!resetToken.trim() || !newPassword.trim()) {
      setError("Please fill out all fields");
      return;
    }

    dispatch(resetPassword(resetToken, newPassword));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (state === "Reset Password") {
      handleResetPassword(e);
    } else if (state === "Forgot Password") {
      handleForgotPassword(e);
    } else if (state === "Login" || state === "Sign Up") {
      const userData = { ...formData, captchaToken };

      try {
        if (state === "Login") {
          if (!captchaToken) {
              setError('Please complete the CAPTCHA');
              return;
          }
          await dispatch(login(userData));
        } else if (state === "Sign Up") {
          await dispatch(signup(userData));
        }
      } catch (err) {
        console.error("Error in handleSubmit:", err);
        setError(
          "An unexpected error occurred. Please check the console for more details."
        );
      }
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {state === "Sign Up" && (
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
            {(state === "Login" || state === "Sign Up") && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
              />
            )}

            {state === "Reset Password" && (
              <>
                <input
                  type="text"
                  placeholder="Enter Reset Token"
                  name="resetToken"
                  value={resetToken}
                  onChange={(e) => setResetToken(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter New Password"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </>
            )}
          </div>
          <div className="loginsignup-agree">
            {state === "Login" && (
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={handleCaptcha}
              />
            )}
          </div>
          <button type="submit">Continue</button>

          {state === "Login" ? (
            <>
              <p className="loginsignup-login">
                Don't have an account?{" "}
                <span onClick={() => setState("Sign Up")}>Sign up here</span>
              </p>
              <p className="loginsignup-login">
                Forgot your password?{" "}
                <span onClick={() => setState("Forgot Password")}>
                  Click here
                </span>
              </p>
            </>
          ) : state === "Sign Up" ? (
            <p className="loginsignup-login">
              Already have an account?{" "}
              <span onClick={() => setState("Login")}>Login here</span>
            </p>
          ) : state === "Forgot Password" ? (
            <p className="loginsignup-login">
              Remembered your password?{" "}
              <span onClick={() => setState("Login")}>Login here</span>
            </p>
          ) : state === "Reset Password" ? (
            <p className="loginsignup-login">
              Go back to <span onClick={() => setState("Login")}>Login</span>
            </p>
          ) : null}

          {error && <p className="loginsignup-error">{error}</p>}
          {forgotPasswordMessage && (
            <p className="loginsignup-message">{forgotPasswordMessage}</p>
          )}
          {forgotPasswordError && (
            <p className="loginsignup-error">{forgotPasswordError}</p>
          )}
          {resetPasswordMessage && (
            <p className="loginsignup-message">{resetPasswordMessage}</p>
          )}
          {resetPasswordError && (
            <p className="loginsignup-error">{resetPasswordError}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
