import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "../../components/Toast/Toast";
import { useAuth } from "../../Hook/useAuth";
import { service } from "./service";

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
      return service.login(email, passw);
    },
    refetchOnWindowFocus: false,
    retry: false,
    enabled: false,
    onSuccess: (res) => {
      if (res.ok) {
        const fromPage = location.state?.from?.pathname || "/";
        login("user", () => navigate(fromPage, { replace: true }));
      } else {
        toast({ label: res.message, type: "error" });
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
