import { DropDownItem } from "../components/UI/DropDown/DropDown";
import { TableRow } from "../components/UI/Table/Table";
import { _limits, _objects, _states } from "../data";
import { ObjectPageState } from "../reducers/ObjectPageReducer";

export interface ObjectsResult {
  total: number;
  data: Post[];
}

export interface Post {
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
  AllDeviceCount: number;
  OfflineDeviceCount: number;
}

/** Состояние объекта */
export interface ObjectState extends DropDownItem {}

/** Лимит записей на странице */
export interface PageSize extends DropDownItem {
  value: number
}

/**Сервис страницы "Все объекты" */
export default class AllObjectsService {
  
  /**Состояние страницы 'Объекты' */
  static _state: ObjectPageState;

  /**Получить список объектов с гейтвеями
   * @param pageSizeId Размер страницы
   * @param pageNumber Номер страницы
   * @param filter Фильтр
   * @param objectState Состояние объекта
   * @returns Список объектов с гейтвеями
   */
  static async getObjectsWithGateways(pageSizeId: number, pageNumber: number, filter: string, objectStateId: number): Promise<ObjectsResult> {    
    let pageSize = _limits.find((l) => l.id == pageSizeId).value
    const start = pageNumber === 1 ? 0 : (pageNumber - 1) * pageSize;
    let total = _objects.aaData.length;
    let data = _objects.aaData.slice(start, start + pageSize);

    if (filter || objectStateId) {
      let filtered = _objects.aaData.filter(
        (val) => val.ObjectName.toLowerCase().indexOf(filter) > -1
      );

      if (objectStateId) {
        switch (objectStateId) {
          case 2:
            filtered = filtered.filter((val) => val.AlarmsCount > 0);
            break;
          case 3:
            filtered = filtered.filter((val) => val.IsOnline);
            break;
          case 4:
            filtered = filtered.filter((val) => !val.IsOnline);
            break;

          default:
            break;
        }
      }

      total = filtered.length;
      data = filtered.slice(start, start + pageSize);
    }

    return await {
      total: total,
      data: data,
    };
  }

  /**Получить состояния объекта
   * @returns Состояния объекта
   */
  static async getObjectStates(): Promise<ObjectState[]> {
    return await _states;
  }

  /**Получить список кол-ва записей в таблице
   * @returns Список лимитов
   */
  static async getLimits(): Promise<PageSize[]> {
    return await _limits;
  }

  /** Получить данные для таблицы
   * @param posts Массив объектов с гейтвеями
   * @returns Заголовки и строки таблиц
   */
  static getTableData(posts: Post[]): [string[], TableRow[]] {
    const headers = [
      "Domain",
      "ObjectName",
      "ObjectAddress",
      "ServiceCompany",
      "DeviceGatewayName",
      "AlarmsCount",
    ];

    const rows = posts.map((post) => {
      return {
        cells: [
          { data: post.Domain, href: `/domain/${post.DomainId}` },
          { data: post.ObjectName },
          { data: post.ObjectAddress },
          { data: post.ServiceCompany },
          { data: post.DeviceGatewayName },
          { data: post.AlarmsCount },
        ],
      };
    });

    return [headers, rows];
  }

  /**
   * Получить состояние страницы 'Объекты'
   * @returns Актуальное состояние страницы 'Объекты'
   */
  static getState(): ObjectPageState{
    return AllObjectsService._state
  }

  /**
   * Запомнить состояние страницы 'Объекты'
   * @param st Актуальное состояние страницы 'Объекты'
   */
  static setState(st: ObjectPageState){
    AllObjectsService._state = st
  }

}
