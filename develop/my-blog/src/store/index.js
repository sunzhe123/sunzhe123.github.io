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
                articleTitle: "vue-cli3 history模式404解决&发布CDN缓存解决",
                articleImg: require("../assets/img/404.jpg") //
            },
            {
                id: "article-007",
                articleTitle: "闭包的应用",
                articleImg: require("../assets/img/bibao.jpg") //
            },
            {
                id: "article-008",
                articleTitle: "骨架屏的使用",
                articleImg: require("../assets/img/gujiaping.jpg") //
            },
            {
                id: "article-009",
                articleTitle: "滑动尺效果的实现",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-010",
                articleTitle: "移动端解决圆角边框一像素问题",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-011",
                articleTitle: "npm-check -u",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-012",
                articleTitle: "vue项目跳转外链回退不刷新解决",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-013",
                articleTitle: "android手机锁屏倒计时停止问题",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-014",
                articleTitle: "前端断点续传",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-015",
                articleTitle: "LottieJS动画",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-016",
                articleTitle: "前端启动本地服务进行调试",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-017",
                articleTitle: "调试本地代码:配置nginx使路径与生产环境一致",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-018",
                articleTitle: "css modules",
                articleImg: require("../assets/img/ruler.jpg") //
            }
        ],
        
        // 首页详情列表
        articleDetailList: [
            {
                detailId: "article-001",
                detailTitle: "D3.js入门",
                detailText: `
                <h1>准备工作</h1>
                <h2>需要一台电脑</h2>
                <img src="../img/ymhd.jpg">
                <h2>第一步 引入d3.js库</h2>
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
                    每次打包的时候, 生成带有hash的文件名, 这种也是最常用的方式, 打包好后扔到服务器上, 原来的文件不要动, 
                    每次发布的版本都会在上面保留, 这样当html在加载资源时候, 如果html缓存没有更新, 就会加载原来hash的资源文件, 
                    请求时正常的, 如果html缓存更新了, 会加载新发布的hash的资源文件, 这个不会有缓存问题, 也能正常加载, 可以解决问题. 
                    但是有一个弊病就是, 当迭代的多了, 文件较多, 服务器上分不清哪个是上次的 上上次的 ..., 当分件过多想删除的时, 
                    需要一个一个的去识别, 并且还要css js都能匹配删除, 如果不小心删除错了, css和js对不上, 那就出问题了
                </h2>

                <h1>解决方案升级版</h1>
                <h2>
                    每次打包的时候, 把所有的静态资源不要放到dist的根路径, 每次都创建一个带唯一版本号的文件夹, 
                    然后把资源打包到这个文件夹下, 这样就类似于第一种解决办法一样, 不管是加载新的还是老的资源其实是都在的, 
                    而且能够保证css js是配套加载的, 当文件过多想删除的时候, 可以按照文件夹去删除, 也不会出现方案1的弊病问题.
                    然后为了保证index.html里引用的资源都是同一个版本发布的, 那么资源文件的入口就应该只有一个: 不带版本号的app.js,
                    其他资源都放到版本文件夹里, 有缓存的时候, index.html里的唯一入口js会加载老版本的一套资源, 缓存刷新了就会加载新的一套资源, 
                    能保证资源都为一套版本, 所以css文件也要打包到js里, 然后app.js和chunk-vendor.js 打成一个app.js, 这样文件可能会变得比较大,
                    所以要注意组件都按照切片的形式进行加载, 如此这般, 就能保证index.html所引用的资源都为同一个版本的内容, 不会出现CDN缓存问题导致版本不一致出现花屏情况
                </h2>
                ` // 应为html结构
            },
            {
                detailId: "article-005",
                detailTitle: "vue-cli3 history模式404解决方案",
                detailText: `
                <h1>为何会出现404</h1>
                <h2>
                    大家都知道, 单页路由两种模式: history和hash, 我们在实际项目中, 使用history模式时, 都得需要在nginx上进行配置一下, rewrite到index.html上, 否则路由跳转就会出现404, 
                    而使用hash模式就不会出现这类问题, 这是为什么呢? 这是因为hash模式#后面的不被浏览器所识别, 所以当路由无论怎么跳转, 页面是不会按照路由的路径去发起请求的, 而使用了history模式,
                    路由名是被当做了页面地址的一部分, 浏览器会重新发起请求, 而由于单页面应用只有一个根目录的index.html, 服务器根本没有对应路由名的文件, 所以找不到文件导致了404.
                </h2>
                <h1>解决方案</h1>
                <h2>
                    一般的解决方案其实就是配置nginx或者索性改成hash模式了, 但是使用nginx相对比较麻烦, 大一点的公司, 有可能权限不在你这, 还得需要找人帮忙配置,
                    然后能在你这配置, 你得知道怎么配置, 不会就得查喽 哈哈-.- 然后说一下第二种改成hawsh的, 虽然不需要配置了, 但是页面地址看上去怪怪的, 跟锚点一样, 
                    而且当页面使用锚点时,可能还会有冲突, 而且在微信场景里, 貌似是分享之类的可能还有丢失参数的情况(同事遇到过, 本人还没遇到, 所以只能说个大概).
                </h2>
                <h2>
                    然后新的方案就出炉了, 看上面的404的原因大家都知道了, 就是因为路径不是真实的, 找不到文件才404, 那么如果跳转路由时, 对应文件有存在, 那么问题不就解决了嘛
                    思路就是:
                    1. 根据路由名, 生成对应的html文件
                    2. 保证跳转路由的时候能 正确匹配到html文件, 所有路由名字都是 以html结尾
                </h2>
                <h2>
                    上面的思路里路由名字这个比较容易实现, 创建路由的时候都按照html结尾去命名就好了, 但是怎样根据路有名, 生成对应的html文件呢?
                    可以这样去实现: 每个路由都有对应的 vue文件, 保证这个vue文件的名字前缀与路由名字.html前面的一致, 比如页面名字为abc.vue, 那么路由的名字就是abc.html, 
                    然后在通过node在打包的时候读取存放路由页面文件的文件夹, 得到所有文件名字的数组, 然后把数组里每个文件名的后缀都改成.html, 这样就拿到了所有路由名, 
                    紧接着要用到了webPack的一个插件: HtmlWebpackPlugin, 遍历刚才得到的所有路由名字, 然后使用HtmlWebpackPlugin插件按照每个路由名生成一个html文件, 
                    这样打包出来的时候, 就会每个路由都有对应的html文件, 放到服务器上也能有真是存在文件路径, 完美解决
                </h2>
                ` // 应为html结构
            },
            {
                detailId: "article-012",
                detailTitle: "vue项目跳转外链回退不刷新解决",
                detailText: `
                <h1>问题描述: </h1>
                <h2>
                    开发项目时, 经常会有使用location.href跳转外部链接的情况, 但是发现一些手机跳转后点击返回, vue的生命周期没有重新执行, 
                    有一些接口数据或者倒计时的操作需要重新开始, 这时候就会存在问题
                </h2>
                <h1>解决方案</h1>
                <h2>
                    通过网上翻阅各路大神的办法, 都是通过监听 pageshow 方法, 然后执行页面的reload来实现, 
                    大体方案有了, 但是有时候没必要reload页面, 这样页面可能会显得比较怪异, 变现上就是: 加载完页面后刷新了一下又重新加载了一下
                </h2>
                <h2>
                    集合这种方案, 对于一些数据要重新加载的, 可以改为重新调用一下初始化的方法去获取数据, 这样页面就不用再加载一遍
                </h2>

                <h2>
                    然后因为不是全部都不执行生命周期, 是在部分手机上会存在, 所以要对这样方案进行差异化设置, 
                    需要的再去再次获取数据, 执行了生命周期的就没必要再去获取数据了, 
                </h2>
                <h2>总体代码如下:</h2>
                <pre>
                    mounted() {
                        try {
                            sessionStorage.setItem("loadPage", "1"); // 每次执行mounted都对'loadPage'进行重新赋值为1
                        } catch (error) {
                            console.log("---error:", error);
                        }
                        
                        this.pageInit();  // 正常情况 执行了mounted生命周期的调用初始化方法
                
                        // 绑定pageshow
                        window.addEventListener("pageshow", () => {
                            try {
                                let loadPage = sessionStorage.getItem("loadPage");
                                if (loadPage != "1") { // 如果loadPage值不为1, 代表重新进入页面没有执行mounted重置loadPage变量为1的操作
                                    this.pageInit();
                                }
                                sessionStorage.setItem("loadPage", "2"); // 每次执行pageshow都对'loadPage'进行重新赋值为2
                            } catch (error) {
                                console.log("---error:", error);
                            }
                        });
                    }
                </pre>
                ` // 应为html结构
            },
            {
                detailId: "article-016",
                detailTitle: "前端启动本地服务进行调试",
                detailText: `
                <h2>
                    1. node内置模块http, http.createServer
                </h2>
                <h2>
                    2. 启动一个tomcat
                </h2>
                <h2>
                    3. 安装php-study
                </h2>
                <h2>
                    4. express或者koa2
                </h2>
                <h2>
                    5. 最简单的: http-server
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
            },
            {
                id: "series-004",
                seriesTitle: "ThreeJS学习篇",
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
                    需要一个一个的去识别, 并且还要css js都能匹配删除, 如果不小心删除错了, css和js对不上, 那就出问题了, 
                    还有就是多台机器发布, 有的发布完成, 有的没有完成, 就会出现有的能加载有的不能加载 
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
