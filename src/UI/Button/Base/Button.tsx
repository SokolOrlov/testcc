import React from "react";
import Svg from "../../Svg";
import styles from "./Button.module.css"

type Props = {
    label: string
    icon?: string
    type?: "success" | "danger" | "info"
    onClick: () => any
}

const Button  = ({label, icon, type, onClick}: Props)=>{
    return(
        <button className={`${styles.button} ${type? styles[type] : ""}`} onClick={onClick}>
            {icon && <Svg id={icon}/>}
            <p className={styles.label}>{label}</p>
        </button>
    )
}

export default Button;