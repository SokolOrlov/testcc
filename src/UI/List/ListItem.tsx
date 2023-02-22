import React from "react";
import cl from "./List.module.css"; 

type Props = {
    children: React.ReactNode
    handleClick:() => void
}

export const ListItem = ({handleClick, children}:Props)=>{

 return(
    <li className={cl.li} onClick={handleClick}>
        {children}
    </li>
 )   
} 