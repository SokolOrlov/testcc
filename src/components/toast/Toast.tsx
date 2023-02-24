import React from "react";
import { Svg } from "../../UI";
import styles from "./Toast.module.css";

type Props = {
    label: string
    type: "none" | "info" | "success" | "error" | "warning" 
    onClose: ()=>void
}

const getSvg = (type: "none" | "info" | "success" | "error" | "warning" )=>{
    
    // return "search"
    return "big_round_check"
    
    switch (type) {
        case "info":{return "big_round_check"}    
        default:
            break;
    }
}

const Toast = ({label, type, onClose}: Props)=>{
    return(
        <div className={styles.toast}>
            <Svg id={getSvg(type)}/>
            <div className={styles.message}>{label}</div>
            <button className={styles.close} onClick={onClose}>
            <Svg id="cross"/>
          </button>
        </div>
    )
}

export default Toast;