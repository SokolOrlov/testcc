import { api } from "../../API/api";
import { Domain, ObjectsResult, ObjectState, PageSize, SCompany } from "./types";

/**Сервис страницы "Все объекты" */
export default class AllObjectsService {

  /**Получить список объектов с гейтвеями
   * @param pageSizeId Размер страницы
   * @param pageNumber Номер страницы
   * @param filter Фильтр
   * @param objectState Состояние объекта
   * @returns Список объектов с гейтвеями
   */
  static async getObjects(pageSize: number, pageNumber: number, filter: string, objectStateId: number): Promise<ObjectsResult> {

    // const pageSize = api.getPageLimits().find((l) => l.Id == pageSizeId)?.value;
    const objectState = api.getObjectsStates().find((s) => s.Id == objectStateId)?.value;

    const result = await api.getObjects(pageSize, pageNumber, filter, objectState);
    
    return {
      total: result.iTotalDisplayRecords,
      data: result.aaData 
    }
  }

  /**Получить список компаний */
  static async getDomains(): Promise<Domain[]>{
    return await api.getDomains();
  }

  /**Получить список сервисных компаний */
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
}
