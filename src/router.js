import {createWebHistory,createRouter} from "vue-router";

const routes = [
    {
        path : "/",
        name : "home",
        component: () => import("./components/Home")
    },
    {
        path : "/page-2",
        name : "page-2",
        component : () => import("./components/Page2")
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;