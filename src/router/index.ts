import { createRouter, createWebHistory} from "vue-router/auto";
import routes from "./routes";
import type { AuthStore } from "@/stores/auth";
import useAuthStore from "@/stores/auth";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


router.beforeEach((to) => {
    if (to.meta.requiresAuth) {
        const authStore: AuthStore = useAuthStore();

        if (!authStore.isAuthenticated()) {
            router.push({ name: "Login" });
        }
    }
});

router.isReady().then(() => {
    localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
