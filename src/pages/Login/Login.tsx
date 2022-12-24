import React, { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { authService } from "../../Services/authService";

import cl from "./Login.module.css";

const Login = () => {
  const [login, setLogin] = useState<string>("superadmin@test.ru");
  const [passw, setPassw] = useState<string>(")P(O8i&U");
  const authContext = useContext(AuthContext);

  const loginRequest =   async (event: any) => {
    event.preventDefault();

    try {
      await authService.login(login, passw);
      authContext.setIsAuth(true);
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <>
      <div className={cl["login-form-wrap"]}>
        <h2>Login</h2>
        <form className={cl["login-form"]} onSubmit={loginRequest}>
          <p><input type="email" placeholder="Email Address" onChange={e=>setLogin(e.target.value)} value={login}/></p>
          <p><input type="password" placeholder="password" onChange={e=>setPassw(e.target.value)} value={passw}/></p>
          <p><input type="submit" id="login" value="Login" /></p>
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
