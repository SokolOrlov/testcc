/**Информация об объекте с сервера */
export interface ObjectData {
  ObjectId: number;
  ObjectName: string;
  ObjectAddress: string;
  ObjectCoordinates: string;
  DomainId: number;
  Domain: string;
  ServiceCompany: string;
  DeviceGatewayName: string;
  DeviceGatewayId: number;
  IsOnline: boolean;
  AlarmsCount: number;
  AllDeviceCount?: number;
  OfflineDeviceCount?: number;
}

/**Ответ objects/getObjectDeviceGateways */
export interface ObjectsResult {
  total: number;
  data: ObjectData[];
}

/**Ответ domains/getListOfDomains */
export interface Domain{
  Id: number
  Name: string
}

/**Ответ serviceCompanies/getListOfServiceCompanies */
export interface SCompany{
  Id: number
  Name: string
}
