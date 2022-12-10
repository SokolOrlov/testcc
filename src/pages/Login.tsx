import React, { useContext, useState } from "react";
import { AuthContext } from "../context";

const Login = () => {
const qwe = useContext(AuthContext)
console.log(qwe);

const login = (event: any)=>{
    event.preventDefault();
    console.log('ad');
    
    qwe.setIsAuth(true);
    localStorage.setItem('auth', 'true')
}

  return (
    <form onSubmit={login}>
      <input type="text" placeholder="login" />
      <input type="password" placeholder="password" />
      <button type="submit">login</button>
    </form>
  );
};

export default Login;
