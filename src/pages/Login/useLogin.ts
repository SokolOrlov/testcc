/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { useToast } from "modals";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hook/useAuth";
import { service } from "./service";

export const uselogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const toast = useToast();

  const [email, setLogin] = useState<string>("superadmin@test.ru");
  const [passw, setPassw] = useState<string>(")P(O8i&U");

  const { isFetching, refetch } = useQuery({
    queryKey: ["login", email, passw],
    queryFn: () => {
      return service.login(email, passw);
    },
    refetchOnWindowFocus: false,
    retry: false,
    enabled: false,
    onSuccess: (res) => {
      if (res.ok) {
        userDetails.refetch();
      } else {
        toast({ label: res.message, type: "error" });
      }
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const userDetails = useQuery({
    queryKey: ["getUserDetails"],
    queryFn: () => {
      return service.getUserDetails();
    },
    refetchOnWindowFocus: false,
    retry: false,
    enabled: false,
    onSuccess: (res) => {
      const fromPage = location.state?.from?.pathname || "/";      
      auth.signin(res, () => navigate(fromPage, { replace: true }));
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  return {
    clientState: {
      login: email,
      passw,
      setLogin,
      setPassw,
    },
    serverState: {
      refetch,
      loading: isFetching,
    },
  };
};
