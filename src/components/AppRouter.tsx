import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParentPage, RequireAuth } from ".";
import {AllObjects, Device, ObjectDevices, Login} from "../pages"; 
import { Layout } from "./Layout/Layout";

export const AppRouter = () => {
  // console.log("AppRouter");
  
  const router = createBrowserRouter([
    {
      id:"home",
      element: (<RequireAuth><Layout /></RequireAuth>),
      loader:()=>{return { Name: "ГЛАВНАЯ", icon: "home" }},
      children: [
        { 
          id:"allobjects",
          index: true,
          element: <AllObjects /> ,
        },
        {
          id:"object",
          path: "object/:id",
          element: <ParentPage id={"object"}><ObjectDevices /></ParentPage>,
          loader:   (data: any)=>{            
            return   fetchObjectInfo(data.params.id)},
          children:[
            {
              id:"device",
              index:true,
              path: "device/:id",
              element: <Device />,
              loader:()=>{return { Name: "УСТРОЙСТВО", icon: "device" }},
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

async function fetchObjectInfo(id: string) {
  return fetch(`https://test.cloud-control.ru/api/api/objects/getObject?Id=${id}`,{headers:{
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  }});
  // const data = await responce.json();
  // return {...data, icon: "company"}
}