/**Ответ domains/getListOfDomains */
export interface Domain {
  Id: number;
  Name: string;
}

/**Ответ serviceCompanies/getListOfServiceCompanies */
export interface SCompany {
  Id: number;
  Name: string;
}

interface GatewayType {
  Value: number;
  Name: string;
  Text: string;
}

export interface ObjectData {
  Id: number;
  Description?: string;
  DomainId: number;
  DomainName: string;
  Name: string;
  Locality?: string;
  Country?: string;
  Address?: string;
  Coordinates?: string;
  Type: number;
  CustomerType: number;
  HasCoolDevices: boolean;
  HasHeatDevices: boolean;
  HasVltDevices: boolean;
  HasSmartHeat: boolean;
  DefaultDeviceGatewayType: number;
  DeviceGatewayTypes: GatewayType[];
  ExternalCode: string;
  HasVpnDevicePoller: string;
  FullAddress?: string;
}
