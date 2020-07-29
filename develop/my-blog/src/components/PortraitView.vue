<template>
    <div class="portrait-view">
        <div class="user-portrait">
            <img src="../assets/ymhd.jpg">
        </div>
        <div class="user-id">大哲子</div>
    </div>
</template>

<script>
    export default {
        props: {}
    }
</script>

<style scoped lang="scss">
.portrait-view {
    width: 50px;
    .user-portrait {
        width: 50px;
        height: 50px;
        background: #FFF;
        border: 1px solid #aaa;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    .user-id {
        margin-top: 5px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        font-size: 12px;
        color: #FFF;
    }
}
</style>
