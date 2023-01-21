import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../store";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    //console.log(isAuth)

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route => <Route element={route.component} path={route.path} key={route.path}/>)} 
                <Route path="*" element={<Navigate replace to="/allobjects" />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => <Route element={route.component} path={route.path} key={route.path}/>)}
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
    );
};

export default AppRouter;