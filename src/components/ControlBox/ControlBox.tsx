import React from "react";
import styles from "./ControlBox.module.css"

type Props = {
    children: React.ReactNode
}

const ControlBox = ({children}:Props)=>{
    return(
        <div className={styles.controlbox}>{children}</div>
    )
}

export default ControlBox;