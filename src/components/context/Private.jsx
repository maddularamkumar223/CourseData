/* eslint-disable react/prop-types */
import { useContext } from "react";
import { privateContext } from "./PrivateContext";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  let { auth } = useContext(privateContext);
  if (auth) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default Private;
