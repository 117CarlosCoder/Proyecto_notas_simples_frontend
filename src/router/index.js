/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */
// Composables
import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import NotasPage from "../pages/Users/Notas/NotasPage.vue";
import Home from "../components/Home.vue";
const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/notas",
        name: "NotasPage",
        component: NotasPage,
        meta: { requiresAuth: true },
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/home",
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("jwt");
    if (to.meta.requiresAuth && !token) {
        next({ name: "Home" });
    }
    else {
        next();
    }
});
export default router;
