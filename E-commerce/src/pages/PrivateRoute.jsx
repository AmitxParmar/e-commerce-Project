import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children }) => {
  const { myUser } = useUserContext();
  if (!myUser) <Navigate to={"/login"} />;
  return children;
};

export default PrivateRoute;
