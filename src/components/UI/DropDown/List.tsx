import React from "react";
import cl from "./DropDown.module.css"; 

type Props = {
    expanded: boolean
    children: React.ReactNode
}

const List = ({expanded, children}:Props)=>{

    if (!expanded) return null;
 return(
    <div >
        <ul className={`${cl.list} ${cl.width_280}`}>
            {children}
        </ul>
    </div>
    
 )   
}

export default List;