import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 首页文章列表
        articleList: [
            {
                id: "article-001",
                articleTitle: "移动端弹窗滑动穿透",
                articleImg: require("../assets/img/touch.jpg") //
            },
            {
                id: "article-002",
                articleTitle: "发布生产 解决CDN缓存导致异常",
                articleImg: require("../assets/img/cdn.jpg") //
            },
            {
                id: "article-003",
                articleTitle: "前端性能优化总结",
                articleImg: require("../assets/img/quick.jpg") //
            },
            {
                id: "article-004",
                articleTitle: "Jquery面向对象写法",
                articleImg: require("../assets/img/class.jpg"),
            },
            {
                id: "article-005",
                articleTitle: "history模式404解决方案",
                articleImg: require("../assets/img/404.jpg") //
            },
            {
                id: "article-006",
                articleTitle: "闭包的应用",
                articleImg: require("../assets/img/bibao.jpg") //
            },
            {
                id: "article-007",
                articleTitle: "骨架屏的使用",
                articleImg: require("../assets/img/gujiaping.jpg") //
            },
            {
                id: "article-008",
                articleTitle: "滑动尺效果的实现",
                articleImg: require("../assets/img/ruler.jpg") //
            }
        ],
        
        // 首页详情列表
        articleDetailList: [
            {
                detailId: "article-001",
                detailTitle: "Ds.js入门",
                detailText: `
                <h1>准备工作</h1>
                <h2>需要一台电脑</h2>
                <img src="../img/ymhd.jpg">
                <h2>第一步 引入ds.js库</h2>
                <pre>
                    <script src="https://d3js.org/d3.v5.min.js"> </script>;
                </pre>` // 应为html结构
            },
            {
                detailId: "article-002",
                detailTitle: "CDN缓存导致的",
                detailText: `
                <h1>问题描述: </h1>
                <h2>
                    每当迭代发布生产时, 都会遇到一个比较头疼的问题, 就是CDN缓存. 
                    html生效了, 但是引用的js css静态资源有的生效有的还是缓存的, 就会导致页面出现异常.
                    比如使用vue打包出来的项目, 目录里一般是包含: html css js img这些资源, 
                    如果两个
                </h2>
                <h1>解决方案</h1>
                <h2>
                    1. 每次打包的时候, 生成带有hash的文件名, 这种也是最常用的方式, 打包好后扔到服务器上, 原来的文件不要动, 
                    每次发布的版本都会在上面保留, 这样当html在加载资源时候, 如果html缓存没有更新, 就会加载原来hash的资源文件, 
                    请求时正常的, 如果html缓存更新了, 会加载新发布的hash的资源文件, 这个不会有缓存问题, 也能正常加载, 可以解决问题. 
                    但是有一个弊病就是, 当迭代的多了, 文件较多, 服务器上分不清哪个是上次的 上上次的 ..., 当分件过多想删除的时, 
                    需要一个一个的去识别, 并且还要css js都能匹配删除, 如果不小心删除错了, css和js对不上, 那就出问题了
                </h2>
                <h2>
                    2. 每次打包的时候, 在文件后面拼接?v=xxx的版本号
                </h2>

                <h2>
                    3. 每次打包的时候, 把所有的静态资源不要放到dist的根路径, 每次都创建一个带唯一版本号的文件夹, 
                    然后把资源打包到这个文件夹下, 这样就类似于第一种解决办法一样, 不管是加载新的还是老的资源其实是都在的, 
                    而且能够保证css js是配套加载的, 当文件过多想删除的时候, 可以按照文件夹去删除, 也不会出现方案1的弊病问题.(推荐)
                </h2>
                ` // 应为html结构
            }
        ],

        // 系列文章列表
        seriesList: [
            {
                id: "series-001",
                seriesTitle: "D3.js学习篇",
                seriesImg: require("../assets/img/d3.jpg"),
                catalogList: [
                    {
                        catalogId: "catalogId_001",
                        catalogName: "准备工作"
                    },
                    {
                        catalogId: "catalogId_002",
                        catalogName: "svg学习"
                    },
                ]
            },
            {
                id: "series-002",
                seriesTitle: "Flutter学习篇",
                seriesImg: require("../assets/img/flutter.jpg"),
            },
            {
                id: "series-003",
                seriesTitle: "Webpack学习篇",
                seriesImg: require("../assets/img/webpack.jpg"),
            },
            {
                id: "series-004",
                seriesTitle: "TS学习篇",
                seriesImg: require("../assets/img/ts.jpg"),
            }
        ],
        
        // 系列详情列表
        seriesDetailList: [
            {
                detailId: "catalogId_001",
                detailTitle: "CDN缓存导致的",
                detailText: `
                <h1>问题描述: </h1>
                <h2>
                    每当迭代发布生产时, 都会遇到一个比较头疼的问题, 就是CDN缓存. 
                    html生效了, 但是引用的js css静态资源有的生效有的还是缓存的, 就会导致页面出现异常.
                    比如使用vue打包出来的项目, 目录里一般是包含: html css js img这些资源, 
                    如果两个
                </h2>
                <h1>解决方案</h1>
                <h2>
                    1. 每次打包的时候, 生成带有hash的文件名, 这种也是最常用的方式, 打包好后扔到服务器上, 原来的文件不要动, 
                    每次发布的版本都会在上面保留, 这样当html在加载资源时候, 如果html缓存没有更新, 就会加载原来hash的资源文件, 
                    请求时正常的, 如果html缓存更新了, 会加载新发布的hash的资源文件, 这个不会有缓存问题, 也能正常加载, 可以解决问题. 
                    但是有一个弊病就是, 当迭代的多了, 文件较多, 服务器上分不清哪个是上次的 上上次的 ..., 当分件过多想删除的时, 
                    需要一个一个的去识别, 并且还要css js都能匹配删除, 如果不小心删除错了, css和js对不上, 那就出问题了
                </h2>
                <h2>
                    2. 每次打包的时候, 在文件后面拼接?v=xxx的版本号
                </h2>

                <h2>
                    3. 每次打包的时候, 把所有的静态资源不要放到dist的根路径, 每次都创建一个带唯一版本号的文件夹, 
                    然后把资源打包到这个文件夹下, 这样就类似于第一种解决办法一样, 不管是加载新的还是老的资源其实是都在的, 
                    而且能够保证css js是配套加载的, 当文件过多想删除的时候, 可以按照文件夹去删除, 也不会出现方案1的弊病问题.(推荐)
                </h2>
                ` // 应为html结构
            }
        ]
    },
    mutations: {},
    actions: {}
});
