import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Hook/useAuth";
type Props = {
  children: JSX.Element;
};

export const RequireAuth = ({ children }: Props) => {
  const location = useLocation();
  const auth = useAuth();

  const final =   auth.user && localStorage.getItem("accessToken") ? true : false;

  if (!final) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
