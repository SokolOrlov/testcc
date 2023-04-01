import { Responce } from "src/API/types";
import { api } from "./api";
import { Gateway } from "./types";


export class service{
    static async getObjectDevices(id: string): Promise<Gateway[]>{
        const res = await api.getObjectDevices(id);
        return res.ok ? res.data : [];        
    }

    static async deleteGateway(id: number): Promise<Responce>{
        const res = await api.deleteGateway(id);
        return res.ok ? 
          { ok: true, message: "" } : 
          { ok: false, message: res.data.Message };
    }
}