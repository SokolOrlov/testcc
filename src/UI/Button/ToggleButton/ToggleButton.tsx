import React from "react";
import styles from "./ToggleButton.module.css";
import Svg from "../../Svg";

type Props = {
  expanded: boolean;
  toggleExpanded: () => void;
  children: React.ReactNode;
};

const ToggleButton = ({ expanded, toggleExpanded, children }: Props) => {
  return (
    <button className={`${styles.toggle} ${expanded ? styles.open : ""}`} onClick={toggleExpanded}>
      <p>{children}</p>
      <Svg id="caret" />
    </button>
  );
};

export default ToggleButton;
