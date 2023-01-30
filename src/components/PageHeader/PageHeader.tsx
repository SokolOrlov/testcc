import React from "react";
import styles from "./PageHeader.module.css"
type Props = {
    label: string
}

const PageHeader = ({label}: Props)=>{
    return(
        <header className={styles.header}>
            <h1 className={styles.label}>{label}</h1>
        </header>
    )
}

export default PageHeader;