import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts";

const RequiredAuth = () => {
  const location = useLocation();
  const { token } = useAuthContext();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default RequiredAuth;