import { api } from "../API/api"


export const authService = Object.freeze({
    async login(user:string, passw: string):Promise<void>{
        const result = await api.login(user, passw);
        console.log(result);
        localStorage.setItem('accessToken', result.Content.Value.accessToken);
    }

})