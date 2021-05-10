import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://neko-back.herokuapp.com/2.0/`,
  //  baseURL: `http://localhost:7542/2.0/`,
})

export const authAPI = {
    register(regData: RegistrationRequestType) {
        return instance.post<RegistrationResponseType>(`auth/register`, {regData})
    },
    login(regData: RegistrationRequestType) {
        return instance.post<LoginResponseType>(`auth/login`, {regData})
    },
    logout() {
        return instance.delete(`auth/me`, {})
    },
    forgot(email: string,from:string,message: string) {
         return instance.post<{success: boolean}>(`auth/forgot`,{email,from,message})
    },
    resetPassword(resetPasswordToken: string, password: string) {
        return instance.post<{success: boolean}>(`auth/set-new-password`, {resetPasswordToken, password})
    },
    authMe() {
        return instance.post<AuthMeResponseType>(`auth/me`, {})
    }

}


// Types

export type RegistrationRequestType = {
    regData: {
        email: string
        password: string
        rememberMe?: boolean
    }
}

export type RegistrationResponseType = {
    addedUser: {
        _id: string
        email: string
        name: string
        avatar?: string
        publicCardPacksCount: number
        created: Date
        updated: Date
        isAdmin: boolean
        verified: boolean
        rememberMe: boolean
        error?: string
    }
}

export type LoginResponseType = {
    email: string
    name: string
    isAdmin: boolean
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    __v: number
    _id: string
    success: boolean
}

export type AuthMeResponseType = {
    success: boolean
    token: string
    tokenDeathTime: number
    updatedUser: {}
}