import { useContext } from "react";
import { AuthProps } from "../components/Hoc/AuthProvider";
import { AuthContext } from "../context";

export function useAuth() {
  return useContext<AuthProps>(AuthContext);
}
