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
      //  errorElement:<Login />,
      children: [
        {
          index: true,
          element: <AllObjects />,
        },
        {
          path: "object/:id",
          element: <DomainObject />,
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
