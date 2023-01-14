import React from "react"
type Props = { 
    children: React.ReactNode,
  };


export const TableHeaderCell: React.FC<Props> = ({children}) =>{
    return(<th>{children}</th>)
}