import { api } from "../API/api"


export const authService = Object.freeze({
    async login(user:string, passw: string):Promise<any>{        
        const result = await api.login(user, passw);
        if (result.Content?.Value?.accessToken) {
            localStorage.setItem('accessToken', result.Content.Value.accessToken);
        }            

        return result;
    }
})