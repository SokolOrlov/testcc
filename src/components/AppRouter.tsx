import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthContext } from "../context";
import AllObjects from "../pages/AllObjects/AllObjects";
import { privateRoutes, publicRoutes } from "../routes";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import TopBar from "./TopBar/TopBar";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  //console.log(isAuth)

  const location = useLocation(); 
  
  return isAuth ? (
    <>
      <TopBar>
        <Breadcrumbs path={location.pathname} state={location.state} />
      </TopBar>
      <Routes>
        {privateRoutes.map((route) => (<Route element={route.component} path={route.path} key={route.path} />))}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (<Route element={route.component} path={route.path} key={route.path} />))}
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
