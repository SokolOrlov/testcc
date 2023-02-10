import React from "react";
import styles from "./Table.module.css";

type Props = {
  header: React.ReactNode;
  colgroup?: React.ReactNode;
  rows: React.ReactNode;
};

const Table = ({ header, colgroup, rows }: Props) => {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>{header}</thead>
      <colgroup>{colgroup}</colgroup>
      <tbody className={styles.body}>{rows}</tbody>
    </table>
  );
};

export default Table;

type TableCellProps = {
  children: React.ReactNode;
  colspan?: number;
  style?: React.CSSProperties;
  title?: string;
};

export const TableCell: React.FC<TableCellProps> = ({ children, colspan = 1, style, title }) => {
  return (
    <td className={styles.bodycell} style={style} colSpan={colspan} title={title}>
      {children}
    </td>
  );
};

type TableHeaderCellProps = {
  children: React.ReactNode;
};

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ children }) => {
  return <th className={styles.headercell}>{children}</th>;
};

type TableRowProps = {
  children: React.ReactNode;
  style?: string;
};

export const TableRow: React.FC<TableRowProps> = ({ children, style }) => {
  return <tr className={`${styles.row} ${style}`}>{children}</tr>;
};
