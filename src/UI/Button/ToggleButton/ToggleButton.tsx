import React from "react";
import styles from "./ToggleButton.module.css";
import Svg from "../../Svg";

type Props = {
  expanded: boolean;
  label: string
  toggleExpanded: () => void;
};

const ToggleButton = ({ expanded, toggleExpanded, label }: Props) => {
  return (
    <button className={`${styles.toggle} ${expanded ? styles.open : ""}`} onClick={toggleExpanded}>
      <p title={label} className={styles.label}>{label}</p>
      <Svg id="caret" />
    </button>
  );
};

export default ToggleButton;
