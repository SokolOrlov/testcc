import React from "react";
import { AuthContext, User } from "../../context";
import useCallbackState from "../../Utils/useCallbackState";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useCallbackState(null!);

  let signin = (newUser: User, callback: VoidFunction) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser, callback);
  };

  let signout = (callback: VoidFunction) => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setUser(null, callback);
  };

  let value = { user: JSON.parse(localStorage.getItem("user")) as User, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
