import React from "react";
import "./Table.module.css"; 

const Table = ({ header, rows }: { header: React.ReactNode; rows: React.ReactNode }) => {
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
