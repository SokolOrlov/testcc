import React from "react";
import { Svg } from "ui";
import styles from "./PageHeader.module.css";

type Props = {
  icon: string
  label: string;
  controls?: React.ReactNode
};

export const PageHeader = ({ icon, label }: Props) => {
  return (
    <header className={styles.header}>
      <Svg id={icon} />
      <h1 className={styles.label}>{label}</h1>
    </header>
  );
};
