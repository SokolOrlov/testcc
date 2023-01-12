import React from "react";
import { ObjectData } from "../../../pages/Objects/types";
import Table from "../BaseTable/Table";
import { TableCell } from "../BaseTable/TableCell";
import { TableHeaderCell } from "../BaseTable/TableHeaderCell";
import { TableRow } from "../BaseTable/TableRow";

type Props = { 
    rowsData: ObjectData[]
}

const headers = [
    "Domain",
    "ObjectName",
    "ObjectAddress",
    "ServiceCompany",
    "DeviceGatewayName",
    "AlarmsCount",
  ];

  //background-color: rgba(226, 0, 15, 0.2);
  //background-color: rgba(0, 128, 0, 0.2);
const ObjectsTable = ({rowsData}: Props)=>{
    const header = <TableRow>{headers.map(h=><TableHeaderCell {...{key: h}}><div>{h}</div></TableHeaderCell>)}</TableRow>
    const rows = rowsData && rowsData.length > 0 ? 
        rowsData.map(row =>{
            const sellStyle:React.CSSProperties ={
                backgroundColor: row.IsOnline? row.AlarmsCount>0?'rgba(226, 0, 15, 0.2)':'rgba(0, 128, 0, 0.2)':'rgba(0, 0, 0, 0)'
            }
            return <TableRow {...{key: row.DeviceGatewayId, tabIndex: row.DeviceGatewayId}}> 
                <TableCell sellStyle={sellStyle}><div>{row.Domain}</div></TableCell>
                <TableCell sellStyle={sellStyle}><div>{row.ObjectName}</div></TableCell>
                <TableCell sellStyle={sellStyle}><div>{row.ObjectAddress}</div></TableCell>
                <TableCell sellStyle={sellStyle}><div>{row.ServiceCompany}</div></TableCell>
                <TableCell sellStyle={sellStyle}><div>{row.DeviceGatewayName}</div></TableCell>
                <TableCell sellStyle={sellStyle}><div>{row.AlarmsCount}</div></TableCell>
            </TableRow>}):
        <TableRow><TableCell colspan={headers.length}><div>{"no data"}</div></TableCell></TableRow>

    return(
        <Table header={header} rows={rows} />
    )


}


export default ObjectsTable;