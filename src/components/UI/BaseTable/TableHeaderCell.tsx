import React from "react"
type Props = { 
    children: JSX.Element|JSX.Element[],
  };


export const TableHeaderCell: React.FC<Props> = ({children}) =>{
    return(<th>{children}</th>)
}