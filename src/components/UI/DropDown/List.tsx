import React from "react";
import cl from "./DropDown.module.css"; 

type Props = {
    expanded: boolean
    children: React.ReactNode
}

const List = ({expanded, children}:Props)=>{

 return(
    <div style={{ visibility: expanded ? "visible" : "hidden" }}>
        <ul className={`${cl.list} ${cl.width_280}`}>
            {children}
        </ul>
    </div>
    
 )   
}

export default List;