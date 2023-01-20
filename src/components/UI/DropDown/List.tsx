import React from "react";
import cl from "./DropDown.module.css"; 

type Props = {
    expanded: boolean
    children: React.ReactNode
}

const List = ({expanded, children}:Props)=>{

    if (!expanded) return null;
 return(
        <ul className={`${cl.list}`}>
            {children}
        </ul>   
 )   
}

export default List;