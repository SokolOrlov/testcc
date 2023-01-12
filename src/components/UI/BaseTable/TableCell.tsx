import React from "react"
type Props = { 
    children: JSX.Element|JSX.Element[],
    colspan?: number
  };


export const TableCell: React.FC<Props> = ({children, colspan = 1}) =>{
    return(<td colSpan={colspan}>{children}</td>)
}