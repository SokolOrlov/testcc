import React from "react";
import cl from "./List.module.css"; 

type Props = {
    expanded: boolean
    scrollable: boolean
    children: React.ReactNode
}

const List = ({expanded, scrollable, children}:Props)=>{

    if (!expanded) return null;
    console.log((children as []));
    
 return(
        <ul className={`${cl.list} ${scrollable? cl.list_scrollable : "" }`}>
            {children}
        </ul>   
 )   
}

export default List;