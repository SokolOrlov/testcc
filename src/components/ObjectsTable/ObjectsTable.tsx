import React from "react";
import { Link } from "react-router-dom";
import { ControlBox } from "..";
import { ObjectData } from "../../pages/AllObjects/types";
import { ControlButton, Table, TableCell, TableHeaderCell, TableRow } from "../../UI";

import styles from "./ObjectsTable.module.css";

type Props = {
  rowsData: ObjectData[];
  onEdit: (arg: number) => void;
  onDelete: (arg: number) => void;
};

const headers = ["Domain", "ObjectName", "ObjectAddress", "ServiceCompany", "DeviceGatewayName", "AlarmsCount"];

export const ObjectsTable = ({ rowsData, onEdit, onDelete }: Props) => {
  const header = (
    <TableRow>
      {headers.map((h) => (
        <TableHeaderCell {...{ key: h }}>{h}</TableHeaderCell>
      ))}
    </TableRow>
  );

  const rows =
    rowsData && rowsData.length > 0 ? (
      rowsData.map((row) => {
        const coloredState = row.IsOnline ? (row.AlarmsCount > 0 ? styles.alarm : styles.online) : styles.offline;

        return (
          <TableRow style={coloredState} {...{ key: `${row.DomainId}_${row.ObjectId}_${row.DeviceGatewayId}` }}>
            <TableCell title={row.Domain}>{row.Domain}</TableCell>
            <TableCell title={row.ObjectName}>
              <ControlBox>
              <Link className={styles.link} to={`/object/${row.ObjectId}`} state={{name:row.ObjectName}}>{row.ObjectName} </Link>                
                <div className={styles.controls} style={{position:"absolute", left:"65%", display:"none"}}>
                  <ControlButton icon="edit" onClick={() => onEdit(row.ObjectId)} />
                  <ControlButton icon="delete" onClick={() => onDelete(row.ObjectId)} />
                </div>
              </ControlBox>
            </TableCell>
            <TableCell title={row.ObjectAddress}>{row.ObjectAddress}</TableCell>
            <TableCell title={row.ServiceCompany}>{row.ServiceCompany}</TableCell>
            <TableCell title={row.DeviceGatewayName}>{row.DeviceGatewayName}</TableCell>
            <TableCell>{row.AlarmsCount}</TableCell>
          </TableRow>
        );
      })
    ) : (
      <TableRow>
        <TableCell colspan={headers.length}>{"no data"}</TableCell>
      </TableRow>
    );

  return (
    <div className={styles.wrapper}>
      <Table header={header} rows={rows} />
    </div>
  );
};
