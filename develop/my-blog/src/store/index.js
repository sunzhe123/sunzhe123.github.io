import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articleList: [
            {
                id: "article-001",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-002",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-003",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-004",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-011",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-012",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-013",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-014",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-112",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-113",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-114",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-202",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-203",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-204",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-302",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-303",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            },
            {
                id: "article-304",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: "" //
            }
        ],
        detailList: [
            {
                articleId: "article-001",
                detailTitle: "Ds.js入门",
                detailText: `
                <h1>准备工作</h1>
                <h2>需要一台电脑</h2>
                <img src="../img/ymhd.jpg">
                <h2>第一步 引入ds.js库</h2>
                <pre>
                    <script src="https://d3js.org/d3.v5.min.js"> </script>;
                </pre>` // 应为html结构
            }
        ]
    },
    mutations: {},
    actions: {}
});
