import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

export const RequireAuth = ({ children }: Props) => {
  const location = useLocation();

  const final = localStorage.getItem("user") && localStorage.getItem("accessToken") ? localStorage.getItem("user") : null;

  if (!final) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
