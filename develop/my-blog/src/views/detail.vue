<template>
    <div class="detail-wrapper">
        <!-- <div id="nav">
            <router-link to="/">Home</router-link>
        </div> -->
        <p class="detail-title">{{ detailTitle }}</p>
        <div v-html="pageHtml"></div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            detailTitle: "页面标题",
            pageHtml: ""
        }
    },
    computed: {
        ...mapState(["detailList"])
    },
    created() {
        let articleId = this.$route.query.articleId;
        console.log("--articleId:", articleId);
        this.detailList.map((item) => {
            if (item.articleId === articleId) {
                this.detailTitle = item.detailTitle;
                let detailText = item.detailText;
                console.log("--detailText:", detailText)
                let reg = /\<script/g;
                let reg2 = /\<\/script/g;
                detailText = detailText.replace(reg, "&lt;script");
                detailText = detailText.replace(reg2, "&lt;/script>");
                this.pageHtml = detailText;
            }
        })
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
        margin: 0 auto;
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
    }
}
</style>
