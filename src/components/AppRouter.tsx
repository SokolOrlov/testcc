import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParentPage, RequireAuth } from ".";
import {AllObjects, Device, DomainObject, Login} from "../pages"; 
import { Layout } from "./Layout/Layout";

export const AppRouter = () => {
  // console.log("AppRouter");
  
  const router = createBrowserRouter([
    {
      id:"home",
      element: (<RequireAuth><Layout /></RequireAuth>),
      loader:()=>{return { label: "ГЛАВНАЯ", icon: "home" }},
      children: [
        { 
          id:"allobjects",
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

