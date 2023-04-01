import { fetchData } from "../../../API/fetchData";
import { IGatewayData } from "./types";

export class api {

  static async addModem(data: IGatewayData) {
    console.log(data);
    return await fetchData(`modems/${data.api}`, "POST", data.data);
  }



  static async AddSmartHeat(objectId: number, file: any) {
    const body = {
        file: file,
        ObjectId: objectId
    };
    return await fetchData(`modems/createsmartheat`, "POST", body);
  }

}
