export default class Api {
  //Отправить команду Логин
  static async login(user: string, passw: string) {
    const data = {
      Login: user,
      Password: passw,
      RememberMe: false,
    };

    return fetchLogin(data);
  }
}

const fetchLogin = async ( data: any) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const params = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  };
  
  const API_URL = "https://test.cloud-control.ru/api/api/";
  const API_URN = "account/login";

  try {
    const res = await fetch(`${API_URL}${API_URN}`, params);

    if(res.ok)
      return res.json()
    // else
    //   return {
        
    //   }
  } catch (error) {
    console.log("error", error);
  }
 
};
