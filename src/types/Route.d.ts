export type Route = {
    name: string;
    path: string;
    component: () => Promise<unknown>;
    meta?: {
        requiresAuth?: boolean;
        noLayout?: boolean;
    }
};