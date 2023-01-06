  const API_URL = "https://test.cloud-control.ru/api/api/";

  /**
   * Отправить запрос
   * @param urn Метод API 
   * @param rmethod Метод запроса
   * @param rbody Данные запроса
   * @returns Данные
   */
  export const fetchData = async (API_URN:string, rmethod:string, rbody: any) => {
    return await fetch(`${API_URL}${API_URN}`, {
      method: rmethod,
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
      },
      body: JSON.stringify(rbody),
    })
    .then(res=>{    
      // если придет 401 - разлогинимся
      if (res.status === 401) {
        // если запрос со страницы логина, то просто отдадим ответ
        if (localStorage.getItem("auth")) {
          localStorage.removeItem("auth");
          window.location.reload(); 
        }
  
        return res
      }
      return res.json()})
  }