const API_URL = "https://test.cloud-control.ru/api/api/";

/**
 * Отправить запрос
 * @param urn Метод API
 * @param rmethod Метод запроса
 * @param rbody Данные запроса
 * @returns Данные
 */

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

    if (!res.ok) {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      location.href = "/";
      return;
    }

    return res.json();
  } catch (error) {
    console.log("error", error);
  }
};
