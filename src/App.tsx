import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import "./App.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  const qclient = new QueryClient();

  return (
    <QueryClientProvider client={qclient}> 
      <AuthContext.Provider value={{ isAuth, isLoading, setIsAuth }}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
