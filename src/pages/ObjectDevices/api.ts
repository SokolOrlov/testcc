import { fetchData } from "../../API/fetchData";


export class api{
    static async getObjectDevices(id: string){
        return await fetchData(`modems/getModemsWithDevices?Id=${id}`, "GET");
    }
}