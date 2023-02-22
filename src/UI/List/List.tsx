import React from "react";
import cl from "./List.module.css";

type Props = {
  expanded: boolean;
  scrollable: boolean;
  children: React.ReactNode;
};

export const List = ({ expanded, scrollable, children }: Props) => {
  if (!expanded) return null;

  return <ul className={`${cl.list} ${scrollable ? cl.list_scrollable : ""}`}>{children}</ul>;
}; 
