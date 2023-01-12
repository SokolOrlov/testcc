import React from "react";
import "./Table.module.css"; 

const Table = ({ header, rows }: { header: JSX.Element; rows: JSX.Element|JSX.Element[] }) => {
  return (
    <table>
      <thead>
        {header}
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default Table;
