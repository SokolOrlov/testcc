import React from "react";
import { Svg } from "ui";
import styles from "./Button.module.css"

type Props = {
    label: string
    icon?: string
    type?: "success" | "danger" | "info"
    disabled?: boolean
    onClick: () => any
}

export const Button  = ({label, icon, type, onClick, disabled}: Props)=>{
    return(
        <button {...{ disabled: disabled }} className={`${styles.button} ${type? styles[type] : ""}`} onClick={onClick}>
            {icon && <Svg id={icon}/>}
            <p className={styles.label}>{label}</p>
        </button>
    )
}