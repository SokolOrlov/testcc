import { fetchData } from "./fetchData";
import { AllObjectsTableData } from "./types";

// АПИ
export const api = Object.freeze({
  //Получить Объекты для страницы "Все объекты"
  async getObjects(pageSize: number, pageNumber: number, filter: string, objectState: string):Promise<AllObjectsTableData> {
    const data = {
      "iDisplayStart": pageNumber===1? 0: pageSize*(pageNumber-1),
      "iDisplayLength": pageSize,
      "Data.State": objectState, 
      "sSearch": filter
    };
    return await fetchData("objects/getObjectDeviceGateways", "POST", data);
  },

  async getDomains(){
    return await fetchData("domains/getListOfDomains", "GET");
  },

  async getSCompanies(){
    return await fetchData("serviceCompanies/getListOfServiceCompanies", "GET");
  },

  //Отправить команду Логин
  async login(user: string, passw: string) {
    const data = {
      Login: user,
      Password: passw,
      RememberMe: false,
    };
    return await fetchData("account/login", "POST", data);
  },
});