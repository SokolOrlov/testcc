import Api from "./Api";
import { Domain, SCompany } from "./types";

export default class Service {
  /**Сохранить объект */
  static async saveObject(objectName: string, identificator: string, companyId?: number, scompanyId?: number) {
    const result = await Api.saveObject(objectName, identificator, companyId, scompanyId);
    console.log(result);
  }
  /**Получить список компаний */
  static async getDomains(): Promise<Domain[]> {
    return await Api.getDomains();
  }

  /**Получить список сервисных компаний */
  static async getSCompanies(): Promise<SCompany[]> {
    return Api.getSCompanies();
  }
}
