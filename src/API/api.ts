import { _limits, _objects, _states } from "../data";
import { AllObjectsTableData } from "./types";

const API_URL = "https://test.cloud-control.ru/api/api/";

  /**
   * Отправить запрос
   * @param urn Метод API 
   * @param rmethod Метод запроса
   * @param rbody Данные запроса
   * @returns Данные
   */
const fetchData = async (API_URN:string, rmethod:string, rbody: any) => {
  return await fetch(`${API_URL}${API_URN}`, {
    method: rmethod,
    headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
    },
    body: JSON.stringify(rbody),
  }).then(res=>res.json());  
}

export const api = Object.freeze({
  async getObjects(pageSize: number, pageNumber: number, filter: string, objectState: string):Promise<AllObjectsTableData> {
    const data = {
      "iDisplayStart": pageSize*pageNumber,
      "iDisplayLength": pageSize,
      "Data.State": objectState, 
      "sSearch": filter
    };
    return await fetchData("objects/getObjectDeviceGateways", "POST", data);
  },

  getObjectsStates() {
    return _states;
  },

  getRecorsOnPageLimits() {
    return _limits;
  },

  async login(user: string, passw: string) {
    const data = {
      Login: user,
      Password: passw,
      RememberMe: false,
    };
    return await fetchData("account/login", "POST", data);
  },
});