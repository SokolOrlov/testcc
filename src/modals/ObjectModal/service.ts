import { Responce } from "../../API/types";
import Api from "./api";
import { Domain, ObjectData, SCompany } from "./types";

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
    const res = await Api.getDomains();
    return res.ok ? res.data : []; 
  }

  /**Получить список сервисных компаний */
  static async getSCompanies(): Promise<SCompany[]> {
    const res = await Api.getSCompanies();
    return res.ok ? res.data : [];
  }

  /**Получить инфорцию по объекту ObjectData*/
  static async getObject(id?: number): Promise<ObjectData> {
    const res = await Api.getObject(id);
    return res.ok ? res.data : null;
  }
}
