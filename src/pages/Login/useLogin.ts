import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { authService } from "./service";

export const uselogin = () => {
    const [login, setLogin] = useState<string>("superadmin@test.ru");
    const [passw, setPassw] = useState<string>(")P(O8i&U");
    const authContext = useContext(AuthContext);
  
    const { isFetching, refetch } = useQuery({
      queryKey: ["login", login, passw],
      queryFn : () =>{ return authService.login(login, passw)},
      refetchOnWindowFocus: false ,
      retry: false,
      enabled: false,
      onSuccess:data=>{
        // console.log('data',data);
        if (data.status === 401) {
          console.log("неправильные логин/пароль");        
        }
        else{
          localStorage.setItem("auth",null);
          authContext.setIsAuth(true);
        }
  
      },
      onError: error=>{
        console.log('error',error);      
      }
    });
    // console.log("serverState", `\ndata: ${data}`, `\nisLoading: ${isLoading}`, `\nisFetching: ${isFetching}`, `\nstatus: ${status}`);
  
    return {
      clientState:{
        login,
        passw,
        setLogin,
        setPassw,
        setIsAuth: authContext.setIsAuth
      },
      serverState:{
        refetch,
        loading: isFetching
      }
    }
  }