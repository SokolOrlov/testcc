import React from "react";
import AppRouter from "../components/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../components/Hoc/AuthProvider";

import "./App.module.css";

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
