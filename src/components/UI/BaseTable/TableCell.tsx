import React from "react"
type Props = { 
    children: JSX.Element|JSX.Element[],
  };


export const TableCell: React.FC<Props> = ({children}) =>{
    return(<td>{children}</td>)
}