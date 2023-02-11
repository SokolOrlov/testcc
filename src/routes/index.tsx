import React from "react";
import AllObjects from "../pages/AllObjects/AllObjects";
import DomainObject from "../pages/DomainObject/DomainObject";
import Login from "../pages/Login/Login";


export const privateRoutes = [
    { path: "/", component: <AllObjects/> },
    { path: "object/:id", component: <DomainObject/> }];

export const publicRoutes = [{ path: "login", component: <Login/> }];
