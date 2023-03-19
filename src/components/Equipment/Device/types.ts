type DeviceSystem = {
    Id: number;
    Name: string;
    DeviceType: unknown;
  };
  
  export type Device = {
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