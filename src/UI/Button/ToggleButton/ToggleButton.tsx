import React from "react";
import cl from "./ToggleButton.module.css";
import caret from "../../../assets/images/caret_light-grey.svg";

type Props = {
    expanded: boolean
    toggleExpanded: () => void
    children: React.ReactNode
}

const ToggleButton = ({expanded, toggleExpanded, children}:Props)=>{

    return(
        <button className={cl.button} onClick={toggleExpanded}>
            {children}
            <img src={caret} alt="caret" className={`${cl.list_caret} ${expanded ? cl.open : ""}`}/>
        </button>
    )   
}

export default ToggleButton;