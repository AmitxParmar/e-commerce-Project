import React, { Children } from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useUserContext();
  return (
    <Route
      render={() => {
        return user ? children : <Redirect to="/" />;
      }}
      {...rest}
    >
      {children}
    </Route>
  );
};

export default PrivateRoute;
