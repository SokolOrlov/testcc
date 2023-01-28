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
