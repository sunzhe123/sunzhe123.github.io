<!-- 系列篇-目录 -->
<template>
    <div class="series-wrapper">
        <div v-for="(item, index) in catalogList" :key="item.catalogId" @click="handleDetail(item.catalogId)">{{ index+1 + ". "+ item.catalogName }}</div>
        <div v-if="!catalogList || !catalogList.length">更新中, 敬请期待</div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            catalogList: [] // 目录列表
        }
    },
    computed: {
        ...mapState(["seriesList"])
    },
    created() {
        let seriesId = this.$route.query.seriesId;
        this.seriesList.map((item) => {
            if (item.id === seriesId) {
                this.catalogList = item.catalogList
            }
        });
        console.log("---catalogList:", this.catalogList);
    },
    methods: {
        handleDetail(id) {
            this.$router.push({
                path: "/detail/index.html",
                query: {
                    detailId: id,
                    type: "catalog"
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
</style>

