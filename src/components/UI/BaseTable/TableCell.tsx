import React from "react"
type Props = { 
    children: JSX.Element|JSX.Element[],
    colspan?: number,
    sellStyle?: React.CSSProperties
  };


export const TableCell: React.FC<Props> = ({children, colspan = 1, sellStyle}) =>{
    return(<td style={sellStyle} colSpan={colspan}>{children}</td>)
}