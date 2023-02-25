import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateOutlet = () => {
  const isUserAuthorised = false;

  return isUserAuthorised ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateOutlet;
