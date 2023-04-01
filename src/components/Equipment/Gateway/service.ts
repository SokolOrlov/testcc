
import { Responce } from "../../../API/types";
import { api } from "./api";

export class service {
  static async deleteGateway(id: number): Promise<Responce> {
    const res = await api.deleteGateway(id);
    return res.ok ? { ok: true, message: "" } : { ok: false, message: res.data.Message };
  }
}
