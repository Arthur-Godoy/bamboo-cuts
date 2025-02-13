
import router from "@/router";
import useAuthStore, { type AuthStore } from "@/stores/auth";
import type { MessageStore } from "@/stores/message";
import useMessageStore from "@/stores/message";
import axios, { AxiosError, type AxiosInstance, type AxiosResponse } from "axios";

function useHttp(): AxiosInstance {
    const api = axios.create({
        baseURL: 'https://api-v2.pandavideo.com.br/',
        headers: {
            accept: 'application/json',
            Authorization: localStorage.getItem("token"),
        }
    });

    api.interceptors.response.use(
        (response: AxiosResponse): AxiosResponse => {
            return response;
        },
        (error: AxiosError): Promise<never> => {
            if (error.response?.status === 401) {
                const authStore: AuthStore = useAuthStore();
                authStore.unauthenticate();
                router.push({ name: "Login" }); 
            } else {
                const messageStore: MessageStore = useMessageStore();
                const respData = error.response?.data as { errMsg: string };
                messageStore.addMessage(
                    respData.errMsg ?? "Erro ao realizar a requisição",
                    "error"
                );
            }

            return Promise.reject(error);
        },
    );

    return api;
}

export default useHttp;
