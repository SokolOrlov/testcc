import React from "react";
import { Outlet, useMatches } from "react-router-dom";

type Props = {
  children: JSX.Element;
  id: string;
};

const ParentPage = ({ children, id }: Props) => {
  const matches = useMatches();
  
  if (matches.slice(-1)[0].id !== id) return <Outlet />;

  return children;
};

export default ParentPage;
