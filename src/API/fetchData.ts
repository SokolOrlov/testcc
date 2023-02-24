const API_URL = "https://test.cloud-control.ru/api/api/";

const headers = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };
};

export const fetchData = async (API_URN: string, rmethod: string, rbody?: any) => {
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
      return;
    }

    return res.json().then(data=>data).catch(err=>err);

  } catch (error) {
    console.log("error", error);
  }
};
