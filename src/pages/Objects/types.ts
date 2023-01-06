import { DropDownItem } from "../../components/UI/DropDown/DropDown";

/** Состояние объекта */
export interface ObjectState extends DropDownItem {
  value: string;
}

/** Лимит записей на странице */
export interface PageSize extends DropDownItem {
  value: number;
}

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

/**Ответ /objects/getObjectDeviceGateways */
export interface ObjectsResult {
  total: number;
  data: ObjectData[];
}
