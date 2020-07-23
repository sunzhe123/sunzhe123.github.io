import Vue from "vue";
import Router from "vue-router";
import home from "../views/home.vue";
import { getBaseUrl } from "../utils/index.js";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: getBaseUrl(),
    routes: [
        {
            path: "/",
            redirect: "/home/index.html",
        },
        {
            path: "/home/index.html",
            name: "home/index.html",
            component: home
        },
        {
            path: "/about/index.html",
            name: "about/index.html",
            component: () =>
                import(/* webpackChunkName: "about" */ "../views/about.vue")
        },
        {
            path: "/detail/index.html",
            name: "detail/index.html",
            component: () =>
                import(/* webpackChunkName: "detail" */ "../views/detail.vue")
        }
    ]
});
