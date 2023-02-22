import React from "react";
import cl from "./Login.module.css";
import { uselogin } from "./useLogin";

export const Login = () => {
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