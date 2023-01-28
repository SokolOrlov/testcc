import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../components/AppRouter";
import { AuthContext } from "../context";
import "./App.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const [isAuth, setIsAuth] = useState(false); 

  useEffect(() => { 
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    } 
  }, []);

  const qclient = new QueryClient();

  return (
    <QueryClientProvider client={qclient}> 
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
