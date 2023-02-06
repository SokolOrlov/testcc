import React from "react";
import Svg from "../../UI/Svg";
import styles from "./Breadcrumbs.module.css";

type Props = {
label: string
icon: string
path: string
}

const Crumb = ({label, icon, path}: Props)=>{
    return(
        <div className={styles.crumb}>
            <Svg id={icon}/>            
            <span className={styles.label}>{label}</span>
            <Svg id="breadcrumbs"/>
        </div>
    )
}

export default Crumb;