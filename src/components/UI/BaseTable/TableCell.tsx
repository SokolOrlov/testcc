import React from "react"
type Props = { 
    children: React.ReactNode,
    colspan?: number,
    sellStyle?: React.CSSProperties
  };


export const TableCell: React.FC<Props> = ({children, colspan = 1, sellStyle}) =>{
    return(<td style={sellStyle} colSpan={colspan}>{children}</td>)
}