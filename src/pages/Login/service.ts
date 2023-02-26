import Api from "./api";

interface LoginResult {
  ok: boolean;
  message: string;
}

export const service = Object.freeze({
  async login(user: string, passw: string): Promise<LoginResult> {
    const result = await Api.login(user, passw);

    if (result && result.Content?.Value?.accessToken) {
      localStorage.setItem("accessToken", result.Content.Value.accessToken);
      return { ok: true, message: "" };
    } else {
      return { ok: false, message: "Неправильный логин или пароль." };
    }
  },

  async getUserDetails(): Promise<any> {
    return await Api.getUserDetail();
  },
});
