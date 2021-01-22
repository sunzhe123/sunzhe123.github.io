<template>
    <div class="home-wrapper">
        <el-card class="article-card" v-for="item in articleList" :key="item.id" >
            <div class="article-img" @click="handleDetail(item.id)">
                <img :src="item.articleImg">
            </div>
            <div class="article-title">{{ item.articleTitle }}</div>
        </el-card>
    </div>
</template>

<script> 
import { mapState } from "vuex";
export default {
    name: "home",
    components: {},
    computed: {
        ...mapState(["articleList"])
    },
    data() {
        return {
            msg: "asdasdas",
            showView: false
        }
    },
    created() {
        // console.log("---process.env:", process.env)
    },

    mounted() {},

    methods: {
        handleDetail(id) {
            this.$router.push({
                path: "/detail/index.html",
                query: {
                    detailId: id,
                    type: "article"
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.home-wrapper {
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .article-card {
        width: 20%;
        height: 200px;
        margin-right: 5%;
        margin-top: 20px;
        cursor: pointer;

        .article-img {
            width: 100%;
            margin: 10px auto;
            height: 100px;
            background: #EEE;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .article-title {
            width: 100%;
            margin: 0 auto;
            height: 40px;
            line-height: 40px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }

    .article-card:nth-of-type(4n) {
        margin-right: 0;
    }
}
</style>
