import { _limits, _objects, _states } from "../data";
import { AllObjectsTableData } from "./types";

const API_URL = "https://test.cloud-control.ru/api/api/";

const sleep = async (sec: number) =>
  new Promise((resolve) => setTimeout(() => resolve(1), sec));

  /**
   * Отправить запрос
   * @param urn Метод API 
   * @param rmethod Метод запроса
   * @param rbody Данные запроса
   * @returns Данные
   */
const fetchData = async (urn:string, rmethod:string, rbody: any) => {
  const response = await fetch(`${API_URL}${urn}`, {
    method: rmethod,
    headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
    },
    body: JSON.stringify(rbody),
  });
  return await response.json();  
}

export const api = Object.freeze({
  async getAllObjects(pageSize: number, pageNumber: number, filter: string, objectState: string):Promise<AllObjectsTableData> {
    const data = {
      "iDisplayStart": pageSize*pageNumber,
      "iDisplayLength": pageSize,
      "Data.State": objectState, 
      "sSearch": filter
    };
    return await fetchData("/objects/getObjectDeviceGateways", "POST", data);
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