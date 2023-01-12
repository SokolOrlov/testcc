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

const ObjectsTable = ({rowsData}: Props)=>{
    const header = <TableRow>{headers.map(h=><TableHeaderCell><div>{h}</div></TableHeaderCell>)}</TableRow>
    const rows = rowsData && rowsData.length > 0 ? 
        rowsData.map(row =>
        <TableRow {...{key: row.DeviceGatewayId, tabIndex: row.DeviceGatewayId}}> 
            <TableCell><div>{row.Domain}</div></TableCell>
            <TableCell><div>{row.ObjectName}</div></TableCell>
            <TableCell><div>{row.ObjectAddress}</div></TableCell>
            <TableCell><div>{row.ServiceCompany}</div></TableCell>
            <TableCell><div>{row.DeviceGatewayName}</div></TableCell>
            <TableCell><div>{row.AlarmsCount}</div></TableCell>
        </TableRow>):
        <TableRow><TableCell {...{colspan: headers.length}}><div>{"no data"}</div></TableCell></TableRow>
        
    return(
        <Table header={header} rows={rows} />
    )


}


export default ObjectsTable;