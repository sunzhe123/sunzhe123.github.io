import Vue from "vue";
import Router from "vue-router";
import index from "../views/index.vue";
import { getBaseUrl } from "../utils/index.js";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: getBaseUrl(),
    routes: [
        {
            path: "/",
            redirect: "/index.html",
        },
        {
            path: "/index.html",
            name: "index.html",
            component: index
        },
        {
            path: "/about.html",
            name: "about.html",
            component: () =>
                import(/* webpackChunkName: "about" */ "../views/about.vue")
        },
        {
            path: "/detail.html",
            name: "detail.html",
            component: () =>
                import(/* webpackChunkName: "detail" */ "../views/detail.vue")
        }
    ]
});
