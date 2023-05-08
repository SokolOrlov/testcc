
import { Responce } from "../../API/types";
import { api } from "./api";
import { IGatewayData } from "./types";

export class service {

  static async getModemData(id: number, type: string){
    return await api.getModemData(id, type);
  }

  static async addModem(data: IGatewayData):Promise<Responce>{
    const res = await api.addModem(data);
    return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  }

  static async editModem(id: number, data: IGatewayData):Promise<Responce>{
    const res = await api.editModem(id, data);
    return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  }
}