import React from "react";
import Svg from "../../UI/Svg";
import styles from "./PageHeader.module.css"
type Props = {
    label: string
}

const PageHeader = ({label}: Props)=>{
    return(
        <header className={styles.header}>
            <Svg id="big_home"/>
            <h1 className={styles.label}>{label}</h1>
        </header>
    )
}

export default PageHeader;