interface AllobjectsRow{
    ObjectId: number,
    ObjectName: string,
    ObjectAddress: string,
    ObjectCoordinates: string,
    DomainId: number,
    Domain: string,
    ServiceCompany: string,
    DeviceGatewayName: string,
    DeviceGatewayId: number,
    IsOnline: boolean,
    AlarmsCount: number,
    AllDeviceCount?: number,
    OfflineDeviceCount?: number
}

export interface AllObjectsTableData{
    sEcho:string, 
    iTotalRecords: number, 
    iTotalDisplayRecords: number,
    aaData: AllobjectsRow[]
}