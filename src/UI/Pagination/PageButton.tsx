import React from "react";
import cl from "./Pagination.module.css";

type Props = {
    value?: number
    isSelected?: boolean
    onSelect?: (arg: number)=>void
}
const PageButton =({value = -1, isSelected = false, onSelect}: Props)=>{
    const btn: JSX.Element = value > 0 ?
        <span
        onClick={() => onSelect(value)}
        key={value}
        className={isSelected ? `${cl.page} ${cl.page__current}` : `${cl.page}`}>
        {value}
        </span>:
    <span key={Math.random()} className={`${cl.page}`}>...</span>
    
    return(
        <div>
        {btn}
        </div>)
}

export default PageButton;