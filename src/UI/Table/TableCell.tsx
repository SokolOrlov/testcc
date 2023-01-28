import React from "react"
type Props = { 
    children: React.ReactNode,
    colspan?: number,
    sellStyle?: React.CSSProperties
    title?: string
  };


export const TableCell: React.FC<Props> = ({children, colspan = 1, sellStyle, title}) =>{
    return(<td style={sellStyle} colSpan={colspan} title={title}>{children}</td>)
}