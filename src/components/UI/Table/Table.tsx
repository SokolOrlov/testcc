import React from "react";
import { Link } from "react-router-dom";
import "./Table.module.css";

interface TableCell {
  data?: string | number;
  href?: string;
  controls?: any;
}

export interface TableRow {
  cells: TableCell[];
}

const Table = ({ headers, rows }: { headers: string[]; rows: TableRow[] }) => {
  // console.log('Table');
  
  return (
    <table>
      <thead>
        <tr key={123123123}>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => {
          return (
            <tr tabIndex={rowIndex} key={rowIndex}>
              {row.cells.map((cell,cellIndex) => (
                <td key={`${rowIndex}_${cellIndex}`}>
                  {cell.href ?<Link to={cell.href}>{cell.data}</Link> : cell.data}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
