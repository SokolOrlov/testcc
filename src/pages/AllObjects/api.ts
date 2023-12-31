import { fetchData } from "../../API/fetchData";
import { Responce } from "../../API/types";

export default class Api {
  //Получить Объекты для страницы "Все объекты"
  static async getObjects(pageSize: number, pageNumber: number, filter: string, objectState: string, domains: number[], scompanies: number[]): Promise<Responce> {
    const data = {
      iDisplayStart: pageNumber === 1 ? 0 : pageSize * (pageNumber - 1),
      iDisplayLength: pageSize,
      Data: { State: objectState, DomainIds: domains, ServiceCompanyIds: scompanies },
      sSearch: filter,
    };

    return await fetchData("objects/getObjectDeviceGateways", "POST", data);
  }

  //Получить список компаний
  static async getDomains() {
    return await fetchData("domains/getListOfDomains", "GET");
  }

  //Получить список сервисных компаний
  static async getSCompanies() {
    return await fetchData("serviceCompanies/getListOfServiceCompanies", "GET");
  }

  //Удалить объект
  static async deleteObject(id: number) {
    return await fetchData("objects/delete", "POST", { Id: id });
  }
}
