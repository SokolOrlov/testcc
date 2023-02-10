import React from "react";
import { ObjectData } from "../../pages/Objects/types";
import ControlButton from "../../UI/Button/Control/ControlButton";
import Table, { TableCell, TableHeaderCell, TableRow } from "../../UI/Table/Table";
import ControlBox from "../ControlBox/ControlBox";
import styles from "./ObjectsTable.module.css";

type Props = {
  rowsData: ObjectData[];
  onEdit: (arg: number) => void;
  onDelete: (arg: number) => void;
};

const headers = ["Domain", "ObjectName", "ObjectAddress", "ServiceCompany", "DeviceGatewayName", "AlarmsCount"];

const ObjectsTable = ({ rowsData, onEdit, onDelete }: Props) => {
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
                {row.ObjectName}
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

export default ObjectsTable;
