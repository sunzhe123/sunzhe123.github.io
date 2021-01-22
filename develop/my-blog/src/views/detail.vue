<!-- 详情 -->
<template>
    <div class="detail-wrapper">
        <div v-if="resultArr.length">
            <p class="detail-title">{{ detailTitle }}</p>
            <div v-html="pageHtml"></div>
        </div>
        <div v-else>更新中, 敬请期待</div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            detailTitle: "页面标题",
            pageHtml: "",
            resultArr: []
        }
    },
    computed: {
        ...mapState(["articleDetailList", "seriesDetailList"])
    },
    created() {
        let detailId = this.$route.query.detailId;
        let sourceType = this.$route.query.type;
        console.log("--detailId:", detailId);
        if (sourceType === "article") {
            this.resultArr = this.articleDetailList.filter((item) => {
                if (item.detailId === detailId) {
                    this.detailTitle = item.detailTitle;
                    let detailText = item.detailText;
                    console.log("--detailText:", detailText)
                    let reg = /<script/g;
                    let reg2 = /<\/script/g;
                    detailText = detailText.replace(reg, "&lt;script");
                    detailText = detailText.replace(reg2, "&lt;/script>");
                    this.pageHtml = detailText;
                    return item;
                }
            });
        } else {
            this.resultArr = this.seriesDetailList.filter((item) => {
                if (item.detailId === detailId) {
                    this.detailTitle = item.detailTitle;
                    let detailText = item.detailText;
                    let reg = /<script/g;
                    let reg2 = /<\/script/g;
                    detailText = detailText.replace(reg, "&lt;script");
                    detailText = detailText.replace(reg2, "&lt;/script>");
                    this.pageHtml = detailText;
                    return item;
                }
            });
        }
    }
}
</script>
<style lang="scss">
.detail-wrapper {
    // background: #eee;
    color: #000;
    min-height: 500px;
    border-radius: 10px;

    .detail-title {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        height: 50px;
        line-height: 50px;
    }

    // 用于段落标题
    h1 {
        width: 90%;
        margin: 40px auto 0;
        font-size: 20px;
        height: 30px;
        line-height: 30px;
        padding-bottom: 10px;
        border-bottom: 1px solid #555;
        margin-bottom: 30px;
    }

    // 用于段落内容
    h2 {
        width: 90%;
        margin: 0 auto;
        font-size: 18px;
        text-indent: 36px;
        font-weight: normal;
        line-height: 40px;
    }


    // 用于图片
    img {
        display: block;
        margin: 20px auto;
        width: 500px;
        height: auto;
    }

    pre {
        width: 80%;
        margin: 20px auto;
        background: #999;
        white-space: pre-wrap;
        word-wrap: break-word;
        color: #082552;

        xmp {
            width: 100%;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    }
}
</style>
