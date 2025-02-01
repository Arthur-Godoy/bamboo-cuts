import router from "@/router";
import { defineStore } from "pinia";

export interface AuthStore {
    authenticate: (token: string) => void;
    unauthenticate: () => void;
    isAuthenticated: () => boolean;
}

const useAuthStore = defineStore("app", () => {
    function authenticate(token: string): void
    {
        localStorage.setItem("token", token);
        router.push({ name: "Home" });
    }

    function unauthenticate(): void
    {
        localStorage.removeItem("token");
    }

    function isAuthenticated(): boolean
    {
        return !!localStorage.getItem("token");
    }

    return {
        authenticate,
        unauthenticate,
        isAuthenticated,
    };
});

export default useAuthStore;
