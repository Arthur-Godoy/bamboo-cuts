import type { Route } from "@/types/Route";

const routes: Route[] = [
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/pages/NotFound.vue"),
        meta: {
            noLayout: true,
        }
    },

    {
        path: "/",
        name: "Home",
        component: () => import("@/pages/Home.vue"),
        meta: {
            requiresAuth: true,
        }
    }
]

export default routes;