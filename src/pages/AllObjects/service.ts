import { Responce } from "../../API/types";
import Api from "./api";
import { Domain, ObjectsResult, SCompany } from "./types";

/**Сервис страницы "Все объекты" */
export default class service {
  /**Получить список объектов с гейтвеями
   * @param pageSize Размер страницы
   * @param pageNumber Номер страницы
   * @param filter Фильтр
   * @param objectState Состояние объекта
   * @param domains фильтр по компаниям
   * @returns Список объектов с гейтвеями
   */
  static async getObjects(pageSize: number, pageNumber: number, filter: string, objectState: string, domains: number[], scompanies: number[]): Promise<ObjectsResult> {
    const res = await Api.getObjects(pageSize, pageNumber, filter, objectState, domains, scompanies);
    return res.ok ? { data: res.data.aaData, total: res.data.iTotalDisplayRecords } : null;
  }

  /**Получить список компаний */
  static async getDomains(): Promise<Domain[]> {
    const res = await Api.getDomains();
    return res.ok ? res.data : [];
  }

  /**Получить список сервисных компаний */
  static async getSCompanies(): Promise<SCompany[]> {
    const res = await Api.getSCompanies();
    return res.ok ? res.data : [];
  }

  /**Получить список сервисных компаний */
  static async deleteObject(id: number): Promise<Responce> {
    const res = await Api.deleteObject(id);
    return res.ok ? 
      { ok: true, message: "" } : 
      { ok: false, message: res.data.Message };
  }
}
