import React from "react";
import { ObjectData } from "./types";
import Table from "../../UI/Table/Table";
import { TableCell } from "../../UI/Table/TableCell";
import { TableHeaderCell } from "../../UI/Table/TableHeaderCell";
import { TableRow } from "../../UI/Table/TableRow";

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
                    :'rgba(0, 0, 0, 0)',
            }

            const textStyle: React.CSSProperties = {
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden"
            }

            return <TableRow {...{key: `${row.DomainId}_${row.ObjectId}_${row.DeviceGatewayId}`}}> 
                <TableCell sellStyle={sellStyle} title={row.Domain}><p style={textStyle}>{row.Domain}</p></TableCell>
                <TableCell sellStyle={sellStyle} title={row.ObjectName}><p style={textStyle}>{row.ObjectName}</p></TableCell>
                <TableCell sellStyle={sellStyle} title={row.ObjectAddress}><p style={textStyle}>{row.ObjectAddress}</p></TableCell>
                <TableCell sellStyle={sellStyle} title={row.ServiceCompany}><p style={textStyle}>{row.ServiceCompany}</p></TableCell>
                <TableCell sellStyle={sellStyle} title={row.DeviceGatewayName}><p style={textStyle}>{row.DeviceGatewayName}</p></TableCell>
                <TableCell sellStyle={sellStyle}>{row.AlarmsCount}</TableCell>
            </TableRow>}):
        <TableRow><TableCell colspan={headers.length}>{"no data"}</TableCell></TableRow>

    return(
        <div style={{maxHeight: "400px", overflowX: "auto"}}>
        <Table header={header} rows={rows} />
        </div>
    )
}


export default ObjectsTable;