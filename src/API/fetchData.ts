import { Responce } from "./types";

const API_URL = "https://test.cloud-control.ru/api/api/";

const headers = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };
};

// export async function fetchData2<T>(url: string, method: string, body: any): Promise<Responce<T>>{
//   const headers ={
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//   };

//   const params = {
//     method: method,
//     headers: headers,
//     body: JSON.stringify(body),
//   };

//     const result = await fetch(`${API_URL}${url}`, params)
//     const responce = await result.json()

//     if (result.ok)
//       return {ok:result.ok, data: responce  as T}
//     else
//       return {ok:result.ok, message: responce as string} 
// }

export const fetchData = async (API_URN: string, rmethod: string, rbody?: any): Promise<Responce> => {
  const rParams = {
    method: rmethod,
    headers: headers(),
    body: JSON.stringify(rbody),
  };

  try {
    const res = await fetch(`${API_URL}${API_URN}`, rParams);

    if (res.status === 401) {      
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      location.href = "/";
      return ;
    }

    return res.json()
      .then(data=>{ return {ok: res.ok, data: data}})
      .catch(err=>{ return {ok: res.ok, message: err}});

  } catch (error) {
    return {ok: false, message: error}
  }
};
