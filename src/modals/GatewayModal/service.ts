
import { Responce } from "../../API/types";
import { api } from "./api";
import { IGatewayData } from "./types";

export class service {

  static async addModem(data: IGatewayData):Promise<Responce>{
    const res = await api.addModem(data);
    return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  }

  static async editModem(data: IGatewayData):Promise<Responce>{
    const res = await api.editModem(data);
    return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  }
}