import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
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
