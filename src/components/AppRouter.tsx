import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllObjects from "../pages/AllObjects/AllObjects";
import Device from "../pages/Device/Device";
import DomainObject from "../pages/DomainObject/DomainObject";
import Login from "../pages/Login/Login";
import ParentPage from "./Hoc/ParentPage";
import { RequireAuth } from "./Hoc/RequireAuth";
import Layout from "./Layout/Layout";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      id:"home",
      path: "/",
      element: (<RequireAuth><Layout /></RequireAuth>),
      loader:()=>{return { label: "ГЛАВНАЯ", icon: "home" }},
      children: [
        {
          index: true,
          element: <AllObjects /> ,
        },
        {
          id:"object",
          path: "object/:id",
          element: <ParentPage id={"object"}><DomainObject /></ParentPage>,
          loader:()=>{return { label: "ОБЪЕКТ", icon: "company" }},
          children:[
            {
              id:"device",
              index:true,
              path: "device/:id",
              element: <Device />,
              loader:()=>{return { label: "УСТРОЙСТВО", icon: "device" }},
            },
          ]
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
