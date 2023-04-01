
import { Responce } from "../../../API/types";
import { api } from "./api";
import { IGatewayData } from "./types";

export class service {

  static async addModem(data: IGatewayData):Promise<Responce>{
    const res = await api.addModem(data);
    return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  }

  // static async AddModem(objectId: number, imei: string, phone: string): Promise<Responce> {
  //   const res = await api.AddModem(objectId, imei, phone);
  //   return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  // }
  // static async AddMonitorUnit(objectId: number, ip: string, user: string, passw: string, vpn: boolean): Promise<Responce> {
  //   const res = await api.AddMonitorUnit(objectId, ip, user, passw, vpn);
  //   return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  // }
  // static async AddEcl4(objectId: number, serial: string, code: string): Promise<Responce> {
  //   const res = await api.AddEcl4(objectId, serial, code);
  //   return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  // }
  // static async AddSmd(objectId: number, serial: string, code: string): Promise<Responce> {
  //   const res = await api.AddSmd(objectId, serial, code);
  //   return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  // }
  // static async AddPmc(objectId: number, serial: string, code: string): Promise<Responce> {
  //   const res = await api.AddPmc(objectId, serial, code);
  //   return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  // }
  // static async AddSmartHeat(objectId: number, file: any) {
  //   const res = await api.AddSmartHeat(objectId, file);
  //   return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  // }
}