import React from "react";
import Login from "../pages/Login";
import Objects from "../pages/Objects/Objects";


export const privateRoutes = [
  { path: "/allobjects", component: <Objects/>, exact: true },
];

export const publicRoutes = [{ path: "/login", component: <Login/>, exact: true }];
