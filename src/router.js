import {createWebHistory,createRouter} from "vue-router";

const routes = [
    {
        path : "/",
        name : "home",
        component: () => import("./components/Home")
    },
    {
        path : "/page-2/:id",
        name : "page-2",
        component : () => import("./components/Page2")
    },
    {
        path : "/ekle",
        name : "ekle",
        component : ()=> import("./components/TodoEkle")
    }

];

const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;