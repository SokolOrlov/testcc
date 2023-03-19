import { api } from "./api";
import { Gateway } from "./types";


export class service{
    static async getObjectDevices(id: string): Promise<Gateway[]>{
        const res = await api.getObjectDevices(id);
        return res.ok ? res.data : [];        
    }
}