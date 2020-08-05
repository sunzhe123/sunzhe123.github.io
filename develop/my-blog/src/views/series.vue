<!-- 系列篇 -->
<template>
    <div class="series-wrapper">
        <el-card class="series-card" v-for="item in seriesList" :key="item.id" >
            <div class="series-img" @click="handleDetail(item.id)">
                <img :src="item.seriesImg">
            </div>
            <div class="series-title">{{ item.seriesTitle }}</div>
        </el-card>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["seriesList"])
    },
    methods: {
        handleDetail(id) {
            this.$router.push({
                path: "/catalog/index.html",
                query: {
                    seriesId: id
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.series-wrapper {
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .series-card {
        width: 300px;
        height: 200px;
        margin-right: 50px;
        margin-top: 20px;
        cursor: pointer;

        .series-img {
            width: 250px;
            margin: 10px auto;
            height: 100px;
            background: #EEE;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .series-title {
            width: 250px;
            margin: 0 auto;
            height: 40px;
            line-height: 40px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }

    .series-card:nth-of-type(4n) {
        margin-right: 0;
    }
}
</style>

