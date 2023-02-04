import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    //console.log(isAuth)

    const location = useLocation();
    return (
        isAuth
            ?
            <div>
                <p>{location.pathname}</p>
            <Routes>
                {privateRoutes.map(route => <Route element={route.component} path={route.path} key={route.path}/>)} 
                <Route path="*" element={<Navigate replace to="/allobjects" />} />
            </Routes>
            </div>
            :
            <Routes>
                {publicRoutes.map(route => <Route element={route.component} path={route.path} key={route.path}/>)}
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
    );
};

export default AppRouter;