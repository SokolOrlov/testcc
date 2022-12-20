import { _limits, _objects, _states } from "../data";
import { IAllObjects } from "./apiTypes";

const API_URL = "https://test.cloud-control.ru/api/api/";

const waait = async () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 3000));

export const api = Object.freeze({
  async getAllObjects(pageSize: number, pageNumber: number, filter: string, objectStateId: number):Promise<IAllObjects> {
    
    const response = await fetch(`${API_URL}/objects/getObjectDeviceGateways`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify({
            "iDisplayStart": pageSize*pageNumber,
            "iDisplayLength": pageSize,
            "Data.State": "", 
            "sSearch": filter
        }),
      });
      return await response.json();
  },

  async getObjectsStates() {
    return await _states;
  },

  getRecorsOnPageLimits() {
    return _limits;
  },

  async login(user: string, passw: string) {
    const response = await fetch(`${API_URL}/account/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Login: user,
        Password: passw,
        RememberMe: false,
      }),
    });
    return await response.json();
  },
});