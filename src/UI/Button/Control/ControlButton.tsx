import React from "react";
import { Svg } from "ui";
import styles from "./ControlButton.module.css"

type Props = {
  icon: string;
  onClick: () => void;
};

export const ControlButton = ({icon, onClick}:Props) => {
  return (
  <button onClick={(e)=>{onClick(); e.stopPropagation();}} className={styles.control}>
    <Svg id={icon}/>  
  </button>
  );
};
