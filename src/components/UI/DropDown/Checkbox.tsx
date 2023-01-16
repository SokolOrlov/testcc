import React from "react";
import cl from "./Checkbox.module.css"
import check from '../../../assets/images/white_check.svg'

type Props = {
    checked: boolean
}

const Checkbox = ({checked}:Props)=>{

    //backgroun-image: url(svg) загружается только если есть эта строка
    const styles = {backgroundImage: `url(${check})`}

    return(
        <>
        <input className={cl.checkbox} type={"checkbox"} checked={checked} readOnly={true}></input>
        <span className={`${cl.checkmark} ${checked? cl.checkmark_checked:""}`} ></span>
        </>        
    )
}

export default Checkbox;