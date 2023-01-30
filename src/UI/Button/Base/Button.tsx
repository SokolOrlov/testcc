import React from "react";
import styles from "./Button.module.css"

type Props = {
    children: React.ReactNode
    onClick: () => any
}

const Button  = ({onClick, children}: Props)=>{
    return(
        <button className={styles.button} onClick={onClick}>
            <p className={styles.label}>{children}</p>
        </button>
    )
}

export default Button;