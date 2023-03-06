import { Responce } from "./types";

const API_URL = "https://test.cloud-control.ru/api/api/";

const headers = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };
};

export const fetchData = async (API_URN: string, rmethod: string, rbody?: unknown): Promise<Responce> => {
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
