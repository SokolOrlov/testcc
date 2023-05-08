import { fetchData } from "../../API/fetchData";
import { IGatewayData } from "./types";

export class api {

  static async getModemData(id: number, type: string) {
    return await fetchData(`modems/get${type}?Id=${id}`, "GET");
  }

  static async addModem(data: IGatewayData) {
    return await fetchData(`modems/${data.api}`, "POST", data.data);
  }

  static async editModem(id: number, data: IGatewayData) {
    return await fetchData(`modems/${data.api}`, "POST", data.data);
  }
}
