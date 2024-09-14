// import React, { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element }) => {
//   const token = localStorage.getItem('token');

//   // Clear the token when the component mounts
//   useEffect(() => {
//     localStorage.removeItem('token');
//   }, []);

//   // Redirect to login if there's no token
//   return token ? <Navigate to="/login" /> : element;
// };

// export default PrivateRoute;
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
// import { redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;


