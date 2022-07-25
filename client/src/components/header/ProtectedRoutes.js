import React from "react";
import {Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
    let User = JSON.parse(localStorage.getItem("user_login"));
  
  if (!User) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
