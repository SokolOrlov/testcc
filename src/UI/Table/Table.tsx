import React from "react";
import "./Table.module.css";

type Props = { 
  header: React.ReactNode
  colgroup?: React.ReactNode 
  rows: React.ReactNode 
}

const Table = ({ header, colgroup, rows }: Props) => {
  return (
    <table>
      <thead>{header}</thead>
      <colgroup>
        {colgroup}
      </colgroup>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;

type TableCellProps = { 
  children: React.ReactNode,
  colspan?: number,
  style?: React.CSSProperties
  title?: string
};


export const TableCell: React.FC<TableCellProps> = ({children, colspan = 1, style, title}) =>{
  return(<td style={style} colSpan={colspan} title={title}>{children}</td>)
}

type TableHeaderCellProps = { 
  children: React.ReactNode,
};

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({children}) =>{
  return(<th>{children}</th>)
}

type TableRowProps = { 
  children: React.ReactNode,
  style?: string
};


export const TableRow: React.FC<TableRowProps> = ({children,style}) =>{
  return(<tr className={style}>{children}</tr>)
}