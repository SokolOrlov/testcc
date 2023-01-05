import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { authService } from "../../Services/authService";
import cl from "./Login.module.css";


const uselogin = () => {
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
      console.log('data',data);
      if (data.status === 401) {
        console.log("не правильные логин/пароль");        
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

const Login = () => {
  const {clientState, serverState} = uselogin();

  const loginRequest = (event: any) => {
    event.preventDefault();
    serverState.refetch();
  };

  return (
    <>
      <div className={cl["login-form-wrap"]}>
        <h2>Login</h2>
        <form className={cl["login-form"]} onSubmit={loginRequest}>
          <p><input type="email" placeholder="Email Address" onChange={e=>clientState.setLogin(e.target.value)} value={clientState.login}/></p>
          <p><input type="password" placeholder="password" onChange={e=>clientState.setPassw(e.target.value)} value={clientState.passw}/></p>
          <p><input type="submit" id="login" value="Login" disabled={serverState.loading} /></p>
        </form>
        <div className={cl["create-account-wrap"]}>
          <p>
            Not a member? <a href="#">Create Account</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;