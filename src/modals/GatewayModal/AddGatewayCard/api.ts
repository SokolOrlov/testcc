import { fetchData } from "../../../API/fetchData";
import { IGatewayData } from "./types";

export class api {

  static async addModem(data: IGatewayData) {
    console.log(data);
    return await fetchData(`modems/${data.api}`, "POST", data.data);
  }
}
