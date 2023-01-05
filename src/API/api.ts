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
  })
  .then(res=>{    
    // если придет 401 - разлогинимся
    if (res.status === 401) {
      // если запрос со страницы логина, то просто отдадим ответ
      if (localStorage.getItem("auth")) {
        localStorage.removeItem("auth");
        window.location.reload(); 
      }

      return res
    }
    return res.json()})
}

// АПИ
export const api = Object.freeze({
  //Получить Объекты для страницы "Все объекты"
  async getObjects(pageSize: number, pageNumber: number, filter: string, objectState: string):Promise<AllObjectsTableData> {
    const data = {
      "iDisplayStart": pageSize*pageNumber,
      "iDisplayLength": pageSize,
      "Data.State": objectState, 
      "sSearch": filter
    };
    return await fetchData("objects/getObjectDeviceGateways", "POST", data);
  },

  //Получить состояния объектов
  getObjectsStates() {
    return _states;
  },

  //Получить размеры стриниц таблицы
  getRecorsOnPageLimits() {
    return _limits;
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