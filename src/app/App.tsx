import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.module.css";
import { AppRouter, AuthProvider } from "components";
import { ActionModalContainer, ToastContainer } from "modals";

const App = () => {
  return (
    <>
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </QueryClientProvider>
    <ToastContainer /> 
    <ActionModalContainer/>   
    </>
  );
};

export default App;
