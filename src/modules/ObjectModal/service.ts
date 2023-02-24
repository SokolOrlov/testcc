import Api from "./Api";
import { Domain, ObjectData, Responce, SCompany } from "./types";

export default class Service {
  /**Сохранить объект */
  static async saveObject(id: number, objectName: string, identificator: string, companyId?: number, scompanyId?: number): Promise<Responce> {
    try {
      await Api.saveObject(id, objectName, identificator, companyId, scompanyId);
      return { ok: true, message: "" };
    } catch (error) {
      return { ok: false, message: error };
    }
  }

  /**Получить список компаний */
  static async getDomains(): Promise<Domain[]> {
    return await Api.getDomains();
  }

  /**Получить список сервисных компаний */
  static async getSCompanies(): Promise<SCompany[]> {
    return Api.getSCompanies();
  }

  /**Получить инфорцию по объекту ObjectData*/
  static async getObject(id?: number): Promise<ObjectData> {
    if (id) return Api.getObject(id);
  }
}
