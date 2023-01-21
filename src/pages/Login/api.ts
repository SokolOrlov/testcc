import { fetchData } from "../../API/fetchData";

export default class Api {
  //Отправить команду Логин
  static async login(user: string, passw: string) {
    const data = {
      Login: user,
      Password: passw,
      RememberMe: false,
    };
    return await fetchData("account/login", "POST", data);
  }
}
