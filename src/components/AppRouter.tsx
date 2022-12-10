import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../routes";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

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