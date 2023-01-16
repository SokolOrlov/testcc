import { api } from "../../API/api";
import { Domain, ObjectsResult, SCompany } from "./types";

/**Сервис страницы "Все объекты" */
export default class AllObjectsService {

  /**Получить список объектов с гейтвеями
   * @param pageSize Размер страницы
   * @param pageNumber Номер страницы
   * @param filter Фильтр
   * @param objectState Состояние объекта
   * @param domains фильтр по компаниям
   * @returns Список объектов с гейтвеями
   */
  static async getObjects(
    pageSize: number, 
    pageNumber: number, 
    filter: string, 
    objectState: string, 
    domains: number[], 
    scompanies: number[]): Promise<ObjectsResult> {
    const result = await api.getObjects(pageSize, pageNumber, filter, objectState, domains, scompanies);
    
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
}
