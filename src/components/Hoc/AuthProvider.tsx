import React, { useState } from "react";
import { AuthContext } from "../../context";

type Props = {
  children: React.ReactNode;
};

export type AuthProps = {
  user:string
  login: (user: any, cb: () => void) => void
  logout: (cb: () => void) => void
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(false);

  const login = (user: any, cb: () => void) => {
    localStorage.setItem("user", user);
    setUser(user);
    cb();
  };

  const logout = (cb: () => void) => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setUser(null);
    cb();
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
