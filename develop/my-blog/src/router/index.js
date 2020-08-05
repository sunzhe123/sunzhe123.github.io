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
            // 首页
            path: "/home/index.html",
            name: "home/index.html",
            component: home
        },
        {
            // 系列
            path: "/series/index.html",
            name: "series/index.html",
            component: () =>
                import(/* webpackChunkName: "series" */ "../views/series.vue")
        },
        {
            // 系列-目录
            path: "/catalog/index.html",
            name: "catalog/index.html",
            component: () =>
                import(/* webpackChunkName: "catalog" */ "../views/catalog.vue")
        },
        {   
            // 关于
            path: "/about/index.html",
            name: "about/index.html",
            component: () =>
                import(/* webpackChunkName: "about" */ "../views/about.vue")
        },
        {   
            // 详情
            path: "/detail/index.html",
            name: "detail/index.html",
            component: () =>
                import(/* webpackChunkName: "detail" */ "../views/detail.vue")
        }
    ]
});
