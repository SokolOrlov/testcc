import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllObjects from "../pages/AllObjects/AllObjects";
import DomainObject from "../pages/DomainObject/DomainObject";
import Login from "../pages/Login/Login";
import { RequireAuth } from "./Hoc/RequireAuth";
import Layout from "./Layout/Layout";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Layout />
        </RequireAuth>
      ),
      loader:()=>{return { label: "ГЛАВНАЯ", icon: "home" }},
      children: [
        {
          index: true,
          element: <AllObjects />,
          // loader:()=>{return { label: "ГЛАВНАЯ", icon: "home" }},
        },
        {
          path: "object/:id",
          element: <DomainObject />,
          loader:()=>{return { label: "ОБЪЕКТ", icon: "company" }},
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
