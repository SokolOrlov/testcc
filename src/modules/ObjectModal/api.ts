import { fetchData } from "../../API/fetchData";

export default class Api {
  //Сохранить объект
  static async saveObject(id: number, objectName: string, identificator: string, companyId: number, scompanyId: number) {
    const data = {
      Name: objectName,
      Id: id,
      Description: "",
      DomainId: companyId,
      Country: "",
      Locality: "",
      Address: "",
      Coordinates: "",
      ExternalCode: "",
    };
    
    return await fetchData("objects/save", "POST", data);
  }
  //Получить список компаний
  static async getDomains() {
    return await fetchData("domains/getListOfDomains", "GET");
  }

  //Получить список сервисных компаний
  static async getSCompanies() {
    return await fetchData("serviceCompanies/getListOfServiceCompanies", "GET");
  }

  static async getObject(id: number){
    return await fetchData(`objects/getObject?id=${id}`, "GET");
  }
}
