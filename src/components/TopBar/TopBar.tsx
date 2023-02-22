import React from "react";
import styles from "./TopBar.module.css";

type Props = {
  children: React.ReactNode;
};

export const TopBar = ({ children }: Props) => {
  return <div className={styles.topbar}>{children}</div>;
};
