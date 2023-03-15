type DeviceSystem = {
    Id: number
    Name: string
    DeviceType: unknown
}

type Device = {
    Id: number
    Name: string
    SerialNumber: string
    System: DeviceSystem
    LastDisconnect: string
    LastDisconnectString: string
    IsOnline: boolean
    IsOnlineDate: string
    DeviceTypeName: string
    DeviceSectionTemperatureBehaviors: unknown
    HasTemperatureBehavior: boolean
    DeviceGroupType: string
    Node: number
}

export type Gateway = {
    Id: 129573,
    DeviceGatewayType: string,
    SerialNumber: string,
    IsOnline: boolean,
    LastDisconnect: string,
    LastDisconnectString: string,
    LastLogin: string|null,
    AlarmedDeviceCount: number,
    SyncDate: string|null,
    SyncDateString: string,
    SoftwareVersion: string,
    StatusHistoryTask: unknown,
    StatusHistoryTaskString: string,
    LastSyncDateValueHistory: unknown,
    LastSyncDateValueHistoryString: string,
    ChangeDateHistoryStatusEpoch: number,
    FirmwareStatus: unknown,
    CorrectionDate: string|null,
    CorrectionDateString: string,
    HasDemountedDevices: boolean,
    Devices: Device[]
}