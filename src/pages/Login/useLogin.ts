import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "../../components/toast/Toast";
import { useAuth } from "../../Hook/useAuth";
import { authService } from "./service";

export const uselogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const toast = useToast();

  const [email, setLogin] = useState<string>("superadmin@test.ru");
  const [passw, setPassw] = useState<string>(")P(O8i&U");

  const { isFetching, refetch } = useQuery({
    queryKey: ["login", email, passw],
    queryFn: () => {
      return authService.login(email, passw);
    },
    refetchOnWindowFocus: false,
    retry: false,
    enabled: false,
    onSuccess: (data) => {
      toast({ label: "неправильные логин/пароль", type: "error" });
      if (data.status === 401) {
        

        console.log("неправильные логин/пароль");
      } else {
        const fromPage = location.state?.from?.pathname || "/";
        login("user", () => navigate(fromPage, { replace: true }));
      }
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
