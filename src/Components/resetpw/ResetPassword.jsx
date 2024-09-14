// ResetPassword.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../redux/actions/authActions';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const { resetPasswordMessage, resetPasswordError } = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(token, newPassword));
  };

  return (
    <div className="reset-password">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
      <input
  type="text"
  placeholder="Enter Reset Token"  
  name="resetToken"
  value={resetToken}
  onChange={(e) => setResetToken(e.target.value)}
/>

        <label>New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      {resetPasswordMessage && <p className="message">{resetPasswordMessage}</p>}
      {resetPasswordError && <p className="error">{resetPasswordError}</p>}
    </div>
  );
};

export default ResetPassword;
