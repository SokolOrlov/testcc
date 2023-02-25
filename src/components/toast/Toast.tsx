import React from "react";
import { Svg } from "../../UI";
import styles from "./Toast.module.css";

type Props = {
  label: string;
  type: "none" | "info" | "success" | "error" | "warning";
  onClose: () => void;
};

const getSvg = (type: "none" | "info" | "success" | "error" | "warning") => {
  switch (type) {
    case "error": {
      return "round_cross";
    }
    case "success": {
      return "big_round_check";
    }
    case "info": {
      return "big_info";
    }
    case "warning": {
      return "warning";
    }
    default:
      break;
  }
};

const getSvgProps = (type: string): { style: React.CSSProperties; icon: string } => {
  switch (type) {
    case "error":
      return { style: { backgroundColor: "var(--error)", color: "white" }, icon: "round_cross" };
    case "success":
      return { style: { backgroundColor: "var(--success)", color: "white" }, icon: "big_round_check" };
    case "info":
      return { style: { backgroundColor: "var(--default)", color: "white" }, icon: "big_info" };
    case "warning":
      return { style: { backgroundColor: "var(--warning)", color: "white" }, icon: "warning" };
    default:
        return { style: { backgroundColor: "transparent", color: "white" }, icon: "none" };
  }
};

const Toast = ({ label, type, onClose }: Props) => {
  console.log();

  const svgProps = getSvgProps(type);

  return (
    <div className={styles.toast}>
      <Svg style={svgProps.style} id={svgProps.icon} />
      <div className={styles.message}>{label}</div>
      <button className={styles.close} onClick={onClose}>
        <Svg id="cross" />
      </button>
    </div>
  );
};

export default Toast;
