import { fetchData } from "../../../API/fetchData";

export class api {
  static async deleteGateway(id: number) {
    const body = {
      Id: id,
    };
    return await fetchData(`modems/delete`, "POST", body);
  }
}
