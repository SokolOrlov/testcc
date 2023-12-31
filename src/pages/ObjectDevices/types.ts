type DeviceSystem = {
  Id: number;
  Name: string;
  DeviceType: unknown;
};

type Device = {
  Id: number;
  Name: string;
  SerialNumber: string;
  System: DeviceSystem;
  LastDisconnect: string;
  LastDisconnectString: string;
  IsOnline: boolean;
  IsOnlineDate: string;
  DeviceTypeName: string;
  DeviceSectionTemperatureBehaviors: unknown;
  HasTemperatureBehavior: boolean;
  DeviceGroupType: string;
  Node: number;
  HasAlert: boolean;
};

export type Gateway = {
  Id: number;
  DeviceGatewayType: string;
  SerialNumber: string;
  IsOnline: boolean;
  LastDisconnect: string;
  LastDisconnectString: string;
  LastLogin: string;
  AlarmedDeviceCount: number;
  SyncDate: string;
  SyncDateString: string;
  SoftwareVersion: string;
  StatusHistoryTask: unknown;
  StatusHistoryTaskString: string;
  LastSyncDateValueHistory: unknown;
  LastSyncDateValueHistoryString: string;
  ChangeDateHistoryStatusEpoch: number;
  FirmwareStatus: unknown;
  CorrectionDate: string;
  CorrectionDateString: string;
  HasDemountedDevices: boolean;
  Devices: Device[];
};

type DeviceGatewayType = {
  Value: number;
  Name: string;
  Text: string;
};

export type ObjectInfo = {
  Id: number;
  Description: string;
  DomainId: number;
  DomainName: string;
  Name: string;
  Locality: string;
  Country: string;
  Address: string;
  Coordinates: string;
  Type: number;
  CustomerType: number;
  HasCoolDevices: boolean;
  HasHeatDevices: boolean;
  HasVltDevices: boolean;
  HasSmartHeat: boolean;
  DefaultDeviceGatewayType: number;
  DeviceGatewayTypes: DeviceGatewayType;
  ExternalCode: string;
  HasVpnDevicePoller: boolean;
  FullAddress: string;
};
