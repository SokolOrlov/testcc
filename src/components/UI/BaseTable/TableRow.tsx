import React from "react"
type Props = { 
    children: JSX.Element|JSX.Element[],
  };


export const TableRow: React.FC<Props> = ({children}) =>{
    return(<tr>{children}</tr>)
}