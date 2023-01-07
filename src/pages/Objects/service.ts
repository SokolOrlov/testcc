import { TableRow } from "../../components/UI/Table/Table";
import { api } from "../../API/api";
import { Domain, ObjectData, ObjectsResult, ObjectState, PageSize, SCompany } from "./types";

/**Сервис страницы "Все объекты" */
export default class AllObjectsService {

  /**Получить список объектов с гейтвеями
   * @param pageSizeId Размер страницы
   * @param pageNumber Номер страницы
   * @param filter Фильтр
   * @param objectState Состояние объекта
   * @returns Список объектов с гейтвеями
   */
  static async getObjects(pageSizeId: number, pageNumber: number, filter: string, objectStateId: number): Promise<ObjectsResult> {

    const pageSize = api.getPageLimits().find((l) => l.Id == pageSizeId)?.value;
    const objectState = api.getObjectsStates().find((s) => s.Id == objectStateId)?.value;

    const result = await api.getObjects(pageSize, pageNumber, filter, objectState);
    
    return {
      total: result.iTotalDisplayRecords,
      data: result.aaData 
    }
  }

  static async getDomains(): Promise<Domain[]>{
    return await api.getDomains();
  }

  static async getSCompanies(): Promise<SCompany[]>{
    return api.getSCompanies();
  }

  /**Получить состояния объекта
   * @returns Состояния объекта
   */
  static getObjectStates(): ObjectState[] {
    return api.getObjectsStates();
  }

  /**Получить список кол-ва записей в таблице
   * @returns Список лимитов
   */
  static getLimits(): PageSize[] {
    return api.getPageLimits();
  }

  /** Получить данные для таблицы
   * @param posts Массив объектов с гейтвеями
   * @returns Заголовки и строки таблиц
   */
  static getTableData(data: ObjectData[]): [string[], TableRow[]] {    
    const headers = [
      "Domain",
      "ObjectName",
      "ObjectAddress",
      "ServiceCompany",
      "DeviceGatewayName",
      "AlarmsCount",
    ];

    const rows = !data ? null : data.map((post) => {
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
}
