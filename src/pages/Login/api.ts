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

  static async getUserDetail(){
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    };
  
    const params = {
      method: "GET",
      headers: headers,
    };

    const res = await fetch("https://test.cloud-control.ru/api/api/users/getCurrentUserDetail",params);
    return await res.json();    
  }
}

const fetchLogin = async (data: any) => {
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
    
    if (res.ok) return res.json();
  } catch (error) {
    console.log("error", error);
  }
};
