import React from "react";
import { Svg } from "ui";
import styles from "./ToggleButton.module.css";

type Props = {
  expanded: boolean;
  label: string
  toggleExpanded: () => void;
};

export const ToggleButton = ({ expanded, toggleExpanded, label }: Props) => {
  return (
    <button className={`${styles.toggle} ${expanded ? styles.open : ""}`} onClick={toggleExpanded}>
      <p title={label} className={styles.label}>{label}</p>
      <Svg id="caret" />
    </button>
  );
};
