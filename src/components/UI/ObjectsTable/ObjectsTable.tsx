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
    const header = <TableRow>{headers.map(h=><TableHeaderCell {...{key: h}}>{h}</TableHeaderCell>)}</TableRow>
    const rows = rowsData && rowsData.length > 0 ? 
        rowsData.map(row =>{
            const sellStyle:React.CSSProperties ={
                backgroundColor: row.IsOnline ? 
                    row.AlarmsCount > 0 ? 'rgba(226, 0, 15, 0.2)':'rgba(0, 128, 0, 0.2)'
                    :'rgba(0, 0, 0, 0)'
            }
            return <TableRow {...{key: row.DeviceGatewayId, tabIndex: row.DeviceGatewayId}}> 
                <TableCell sellStyle={sellStyle}>{row.Domain}</TableCell>
                <TableCell sellStyle={sellStyle}>{row.ObjectName}</TableCell>
                <TableCell sellStyle={sellStyle}>{row.ObjectAddress}</TableCell>
                <TableCell sellStyle={sellStyle}>{row.ServiceCompany}</TableCell>
                <TableCell sellStyle={sellStyle}>{row.DeviceGatewayName}</TableCell>
                <TableCell sellStyle={sellStyle}>{row.AlarmsCount}</TableCell>
            </TableRow>}):
        <TableRow><TableCell colspan={headers.length}>{"no data"}</TableCell></TableRow>

    return(
        <Table header={header} rows={rows} />
    )
}


export default ObjectsTable;