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
            },
            {
                id: "article-019",
                articleTitle: "回退白屏",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-020",
                articleTitle: "React setState的回调处理",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-021",
                articleTitle: "Vue路由跳转的动画过渡",
                articleImg: require("../assets/img/ruler.jpg") //
            },
            {
                id: "article-022",
                articleTitle: "console打印增加颜色",
                articleImg: require("../assets/img/ruler.jpg") //
            }
        ],
        
        // 首页详情列表
        articleDetailList: [
            {
                detailId: "article-001",
                detailTitle: "移动端弹窗滑动穿透",
                detailText: `
                <h1>问题描述</h1>
                <h2>
                    当我们日常开发中, 页面中展示弹窗的交互必不可少, 一般都是加一个蒙层, 居中画一个弹窗, 在PC端没有任务问题, 
                    但是我们会发现, 如果在做移动端的时候, 在弹窗上滑动, 背景页面也会跟随滑动, 或者有时候弹窗里有滚动元素, 页面也可滚动,
                    手指滑动有时弹窗里滑动, 有的时候背景页面滑动, 这就是发生了滑动穿透
                </h2>
                <h2>上述所说的穿透现象, 非常影响交互体验, 所以要想办法解决背景滑动的情况</h2>

                <h1>方案一</h1>
                <h2>
                    当在所需的弹窗弹出时, 对html标签增加fixed定位, top:0 left0 宽高100% overflow:hidden, 这样相当于给htm固定住, 禁止外层存在滚动条, 
                    然后当关闭弹窗的时候, 把该定位样式去掉, 但是当外层有滚区域的话, 关闭弹窗后会发现页面回到了顶部, 这就需要在展示弹窗前记录滚动高度, 然后关闭之后
                    滚回到之前的位置
                </h2>

                <h1>方案二</h1>
                <h2>
                    第二种方案就是阻止touchmove默认事件, 让滑动失去效果, 不让页面滚动, 当然, 这样就会一荣俱荣一损俱损了, 弹窗内如果有可滚动元素, 
                    也会不可滑动了, 所以这时候需要引入iscroll, 将需要滚动的内容包裹到iscroll里, 这样就完美解决了, 需要注意的是当关闭弹窗时要把
                    对touchmove事件的阻止删除掉, 避免影响恢复到正常页面的滑动
                </h2>
               ` // 应为html结构
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
                detailId: "article-003",
                detailTitle: "前端性能优化总结",
                detailText: `
                <h1>资源请求优化: </h1>
                <h2>1) js css img资源一定要压缩</h2>
                <h2>2) 能用css做的效果, 不使用js做, 能用原生js做的, 不使用第三方,  避免引入较大第三方库</h2>
                <h2>3) 图片懒加载, 长页面可以避免未展示的图片提前加载, 较少不必要的请求</h2>
                <h2>4) 图片使用雪碧图, 把页面上使用的小图标图片整合绘制到一张图片上去, 加载一次就把资源都加载出来了</h2>
                <h2>5) 一些简单的图片可以使用SVG矢量图, 不变形, 比png渲染快</h2>
                <h2>6) 避免使用iframe, 之前使用到iframe的情况一般是半弹窗展示协议, 需与后端沟通要返回协议内容, 而不是协议链接</h2>
                <h2>7) 对于展示类的接口数据, 请求一次后避免每次都需要请求, 拿到数据后下次直接展示就好, 比如点击规则展示</h2>
                <h2>8) 尽量使用webp图片, webp比同等质量的jpg png都要小25%-35%, 可以有效提升加载性能, 但是会有兼容问题, 要处理好兼容webp</h2>
                
                
                <h1>代码优化:</h1>
                <h2>1) vue axios vuex jquery zepto等可以通过CDN链接的形式进行加载, 减小代码打包的体积</h2>
                <h2>2) 节流和防抖操作, 限制方法频繁触发</h2>
                <h2>3) SPA项目路由页面都进行按需加载</h2>
                <h2>4) 对于首屏需要请求接口后再展示的页面, 尽量加骨架屏和展示的过渡动画</h2>
                <h2>5) 去掉prefetch, 虽然prefresh会告诉浏览器加载下一页面会用到的资源, 提前进行加载, 但是会额外浪费用户流量</h2>
                <h2>6) 图片展示区域, 要设置高度进行占位, 防止图片加载时页面错位的情况</h2>
                <h2>7) 打包时使用webpack BundleAnalyzerPlugin插件进行观察打包文件的大小, 根据情况进行合理优化</h2>
                ` // 应为html结构
            },
            {
                detailId: "article-004",
                detailTitle: "Jquery组件化写法",
                detailText: `
                <h2>
                    当下前端各种流行框架, Vue React Angular..., 使用这些框架的开发的时候我们都比较喜欢拆出组件, 在需要的地方引入, 
                    不仅方便, 还能提高代码可读性, 降低耦合度, 让项目组件化是这些框架的一个特点, 
                    而原来我们使用jQuery开发的时候, 都是一坨一坨的摞在一起, 那么在jQuery里怎么进行组件化开发呢? 
                </h2>

                <h1>面向对象方式</h1>
                <h2>

                <h2>
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
                detailId: "article-009",
                detailTitle: "滑动尺效果的实现",
                detailText: `
                <img src=${require("../assets/img/ruler.gif")} />
                <pre>
                    <xmp>
                        <template>
                            <div>
                                <div class="result-number">
                                    <span v-show="!isEdit">{{ count }}</span>
                                    <input v-show="isEdit" type="number" v-model="inputNumber" @change="handleChange" @keyup.enter="handleChange">
                                    <span @click="handleEdit">修改</span>
                                </div>
                                <div class="scroll-wrapper" ref="scrollWrapper">
                            
                                    <!-- 刻度列表 -->
                                    <div class="ruler-list">
                            
                                        <!-- 有效刻度前面的一些无效刻度  用于占位 -->
                                        <div class="ruler-item" v-for="item in spaceLine" :key="'before-'+item">
                                            <div class="ruler-item-line" ></div>
                                        </div>
                            
                                        <!-- 实际有效刻度 -->
                                        <div class="ruler-item" v-for="item in dataList" :key="item">
                                            <div class="ruler-item-line" v-if="item % (itemBoxNumber*10)"></div>
                                            <div class="ruler-item-number" v-else>
                                                <div class="ruler-number">
                                                    {{item}}
                                                </div>
                                            </div>
                                        </div>
                            
                                        <!-- 有效刻度后面的一些无效刻度  用于占位 -->
                                        <div class="ruler-item" v-for="item in spaceLine" :key="'after-' +item">
                                            <div class="ruler-item-line" ></div>
                                        </div>
                            
                                    </div>
                            
                                    <!-- 红色指针 -->
                                    <div class="ruler-point"></div>
                                </div>
                            </div>
                        </template>

                        <script>
                            import BScroll from "better-scroll";
                            export default {
                                props: {
                                    // 目标刻度值
                                    targetNumber: {
                                        type: Number
                                    },
                            
                                    // 刻度尺最大刻度值
                                    maxNumber: {
                                        type: Number
                                    },
                            
                                    // 每个格子的颗粒度金额
                                    itemBoxNumber: {
                                        type: Number,
                                        default: 1000
                                    }
                                },
                                data() {
                                    return {
                                        isEdit: false,  // 是否为编辑状态
                                        spaceLine: 16,  // 刻度尺前后空的刻度数 150px/10
                                        dataList: [],       // 金额列表
                                        baseNumer: 0,       // 基础金额
                                        scroolNumber: 0,
                                        spaceNumber: 0,     // 左边空白的格子对应的金额数  该金额是需要进行删除的部分
                                        // itemBoxNumber: 1000, // 每个格子的颗粒度金额
                                        halfContainerWidth: 150, // 半个容器的宽度
                                        itemBoxhHalfWidth: 4.45, // 每个格子的一半宽度宽度
                                        baseWidth: 0,               // 
                                        inputNumber: 0
                                    }
                                },
                                computed:{
                                    count: function() {
                                        let result = Math.round(this.baseNumer + this.scroolNumber - this.spaceNumber);
                                        if (result<0) {
                                            result = 0;
                                        } else if (result > 300000) {
                                            result = 300000;
                                        }
                                        this.inputNumber = result;
                                        return result;
                                    },
                                },
                                methods: {
                            
                                    /**
                                     * 初始化尺子
                                     * targetNumber: 目标值
                                     * endNumber: 最大刻度值
                                     * speed: 每个刻度代表金额
                                     */
                                    initRuler(targetNumber, endNumber , speed) {
                                        console.log("---endNumber:", endNumber);
                                        console.log("---this.maxNumber:", this.maxNumber);
                                        this.spaceNumber = this.handleConversion(this.spaceLine *10, speed);
                                        
                                        this.dataList = [];
                                        var scaleCount = endNumber/speed;
                                        for(var i=0; i<=scaleCount; i++) {
                                            this.dataList.push(i * speed);
                                        }
                                        
                                        this.$nextTick(() => {
                                            this.baseWidth = this.halfContainerWidth - this.itemBoxhHalfWidth; // 基础宽度 其实就是刻度尺左边到红线指针的距离
                                            
                                            // 1. 目标金额-刻度尺起始金额 得到金额差  然后除以系数speed 得到需要移动的格子的数量 然后每个格子的长度是10px  再乘以10
                                            // 2. 减去红色指针到外层固定宽度容器的距离, 因为移动的距离是从左边算的(不是中间), 所以要把容器的一般宽度去掉
                                            // 3. 再加上 刻度0前面的无效刻度宽度  无效刻度数为spaceLine 每个刻度是10
                                            let moveWidth = (targetNumber - this.dataList[0])/speed * 10 - this.baseWidth + this.spaceLine *10; // 需要移动的距离
                                            
                                            // 基础金额 相当于是滚动距离为0  但是指针指的为中间金额的刻度 所以要把这段基础距离的基础金额计算出来 后面滚动的时候  再在这基础上进行加减
                                            this.baseNumer = this.handleConversion(this.baseWidth, speed);
                                            this.scroolNumber = this.handleConversion(moveWidth, speed);
                                            this.setBscroll(-moveWidth, speed);
                                        });
                                    },
                                    
                                    /**
                                     * 当填写新的目标值的时候调用该方法, 用于计算移动距离 以及移动距离对应的金额
                                     * 不要再重新初始化刻度尺, 节省性能
                                     */
                                    changeRuler(targetNumber, speed) {
                                        let moveWidth = (targetNumber - this.dataList[0])/speed * 10 - this.baseWidth + this.spaceLine *10; // 需要移动的距离
                                        console.log("---moveWidth:", moveWidth);
                                        this.scroolNumber = this.handleConversion(moveWidth, speed);
                                        console.log("---scroolNumber:", this.scroolNumber);
                                        this.setBscroll(-moveWidth, speed);
                                    },
                            
                            
                                    setBscroll(startX, speed) {
                                        // 判断scroll对象是否被赋值过 赋值过说明已经初始过化了 可直接调用方法移动
                                        if (!this.scroll) {
                                            this.scroll = new BScroll(this.$refs.scrollWrapper, {
                                                startX: startX,
                                                scrollY: false,
                                                scrollX: true,
                                                click: true,
                                                bounce: false,
                                                HWCompositing: true,
                                                probeType: 3,
                                                mouseWheel: {    // pc端同样能滑动
                                                    speed: 20,
                                                    invert: false
                                                },
                                                eventPassthrough: "vertical",
                                                useTransition: false  // 防止iphone微信滑动卡顿
                                            });
                                        } else {
                                            this.scroll.scrollTo(startX, 0, 500);
                                        }
                            
                                        this.scroll.on("scroll", (pos) => {
                                            this.scroolNumber = this.handleConversion(pos.x + this.itemBoxhHalfWidth, speed);
                                        });
                                    },
                            
                                    /**
                                     * 距离换算成金额的处理
                                     */
                                    handleConversion(moveX, speed) {
                                        // 每次移动  先通过移动距离除以每个格子宽度  得到移动的格子数 进行四舍五入 得到整数
                                        // 然后乘以每个格子的金额  得到移动后的金额数
                                        return Math.round(Math.abs(moveX/10)) * speed;
                                    },
                            
                            
                                    handleEdit() {
                                        this.isEdit = true;
                                    },
                            
                                    /**
                                     * 
                                     */
                                    handleChange() {
                                        this.isEdit = false;
                                        if (this.inputNumber < 0) {
                                            this.inputNumber = 0;
                                            console.log("---金额不能填写小于0");
                                            // return false;
                                        } else if (this.inputNumber > 300000) {
                                            this.inputNumber = 300000;
                                            console.log("---金额不能超过最大额度: 300000");
                                            // return false;
                                        } else if (this.inputNumber%500) {
                                            this.inputNumber = this.count;
                                            console.log("---金额必须为500的倍数");
                                            return false;
                                        }
                                        this.changeRuler(parseInt(this.inputNumber, 10), this.itemBoxNumber);
                                    }
                            
                                    
                                },
                                mounted() {
                                    // 入参 1: 指定金额 2, 最大金额 3: 每个格子的颗粒度金额
                                    this.initRuler(this.targetNumber, this.maxNumber, this.itemBoxNumber);
                                }
                            }
                        </script>

                        <style lang="scss">
                            .result-number {
                                width: 100%;
                                text-align: center;
                                margin-bottom: 30px;
                            }
                            
                            .scroll-wrapper {
                                margin: 0 auto;
                                width: 300px;
                                overflow: hidden;
                                position: relative;
                            
                                .ruler-point {
                                    position: absolute;
                                    width: 1px;
                                    height: 50px;
                                    background: red;
                                    top: 0;
                                    bottom: 0;
                                    left: 50%;
                                    margin-left: -0.5px;
                                }
                            }
                            .ruler-list {
                                display: inline-block;
                                white-space: nowrap;
                                height: 50px;
                            }
                            
                            .ruler-item {
                                display: inline-block;
                                width: 10px;
                                height: 20px;
                                position: relative;
                            
                                .ruler-item-line {
                                    width: 1px;
                                    height: 10px;
                                    margin: 1.25px auto;
                                    background: #666;
                                }
                            
                                .ruler-item-number {
                                    width: 1px;
                                    height: 20px;
                                    margin: 1.25px auto;
                                    background: #666;
                                    position: relative;
                            
                                    .ruler-number {
                                        position: absolute;
                                        bottom: -20px;
                                        width: 100px;
                                        left: 50%;
                                        margin-left: -50px;
                                        text-align: center;
                                    }
                                }
                            }
                        </style>
                    </xmp>
                </pre>
                ` // 应为html结构
            },
            {
                detailId: "article-011",
                detailTitle: "npm-check -u 的使用",
                detailText: `
                <h1>npm-check简介</h1>
                <h2></h2>
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
                    大体方案有了, 但是有时候没必要reload页面, 这样页面可能会显得比较怪异, 表现上就是: 加载完页面后刷新了一下又重新加载了一下
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
            },
            {
                detailId: "article-020",
                detailTitle: "React setState的回调处理",
                detailText: `
                <h2>
                    正常写法:
                </h2>
                <pre>
                    this.setState({a: 1}, () => {
                        // next...
                    });
                </pre>
                <h2>
                    改良写法:
                </h2>
                <pre>
                    public async setState(state) {
                        return new Promise((resolve) => {
                            super.setState(state, resolve);
                        });
                    }

                    // 在需要的地方直接像下面这么写(注意方法上要加async)
                    await this.setState({a: 1});
                    // next...
                </pre>
                ` // 应为html结构
            },
            {
                detailId: "article-022",
                detailTitle: "console打印增加颜色",
                detailText: `
                <h2>
                    开发过程中, 经常遇到console.log打印一些日志, 在浏览器控制台去查看, 为了区分, 以前经常会通过加一些特殊字符去标识:
                    console.log("---->aaa")
                    但是还是不够醒目, 后来发现引的一些插件之类的会打印出特殊颜色的日志, 就搜了一下, 发现给日志加颜色如此简单:
                    console.log("%c 我是带颜色的日志 啦啦啦~", "color: #f00");
                    甚至可以加背景色:
                    console.log("%c 我是有背景色的日志 啦啦啦~", "background:#0f0");

                    不是什么高深技术, 只是之前没有注意到, 记录下来, 在日常开发中可以通过设置console的样式, 有效的区分不同流程 页面 模块的日志, 也更方便
                    在日志堆里发现自己想要的
                </h2>
                <img src=${require("../assets/img/log-color.png")} />
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
