// ForgotPassword.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../redux/actions/authActions';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { forgotPasswordMessage, forgotPasswordError } = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <div className="forgot-password">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Send Reset Token</button>
      </form>
      {forgotPasswordMessage && <p className="message">{forgotPasswordMessage}</p>}
      {forgotPasswordError && <p className="error">{forgotPasswordError}</p>}
    </div>
  );
};

export default ForgotPassword;
