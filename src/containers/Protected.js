import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected({ children }) {
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default Protected;
