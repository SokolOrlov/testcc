import React from "react";
import styles from "./ControlBox.module.css";

type Props = {
  children: React.ReactNode;
};

export const ControlBox = ({ children }: Props) => {
  return <div className={styles.controlbox}>{children}</div>;
};
