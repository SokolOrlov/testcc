import React from "react";

interface AuthContextType {
  user: User;
  signin: (user: User, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export type User = {
  Id: number;
  Name: string;
  Surname: string;
  Email: string;
  Hometown: string;
  Phone: string;
  Role: string;
  RoleCode: string;
  RoleId: number;
  DomainIds: any[];
  ObjectIds: any[];
  ServiceCompanyId?: number;
  HasMultipleAccess: boolean;

  // "ServiceCompany": "",
  // "Domains": [],
};

export const AuthContext = React.createContext<AuthContextType>(null!);
