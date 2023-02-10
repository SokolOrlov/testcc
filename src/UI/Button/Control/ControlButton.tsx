import React from "react";
import Svg from "../../Svg";
import styles from "./ControlButton.module.css"

type Props = {
  icon: string;
  onClick: () => void;
};

const ControlButton = ({icon, onClick}:Props) => {
  return (
  <button onClick={onClick} className={styles.control}>
    <Svg id={icon}/>  
  </button>
  );
};

export default ControlButton;
