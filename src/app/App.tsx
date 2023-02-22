import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter, AuthProvider, ToastContainer } from "../components";
import "./App.module.css";

const App = () => {
  return (
    <>
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </QueryClientProvider>
    <ToastContainer />
    </>
  );
};

export default App;
