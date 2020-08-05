<template>
    <div class="nav-bar-wrapper">
        <PortraitView class="portrait-view-style" />
        <div class="nav-bar-list">
            <router-link class="nav-bar-item" :class="'/home/index.html' | getClassName(currentPath)" to="/home/index.html">文章</router-link>
            <router-link class="nav-bar-item" :class="'/series/index.html' | getClassName(currentPath)" to="/series/index.html">系列</router-link>
            <router-link class="nav-bar-item" :class="'/about/index.html' | getClassName(currentPath)" to="/about/index.html">关于</router-link>
        </div>
    </div>
</template>

<script>
    import PortraitView from "../components/PortraitView.vue";
    export default {
        props: {
            currentPath: {
                type: String
            }
        },
        filters: {
            getClassName(path, currentPath) {
                if (path == currentPath) {
                    return "nav-bar-item-active";
                }
                return "";
            }
        },
        components: {
            PortraitView
        },
        watch: {

        }
    }
</script>

<style scoped lang="scss">
.nav-bar-wrapper {
    width: 100px;
    height: 100%;
    background: rgba($color: #FFF, $alpha: 0);
}

.portrait-view-style {
    position: fixed;
    top: 10px;
    left: 0;
    margin-left: 25px;
    z-index: 100;
}
.nav-bar-list {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background: linear-gradient(to right, #3818f8, #5e45fa);
    width: 100px;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    border-right: 1px solid #aaa;

    .nav-bar-item {
        display: block;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: #FFF;
        font-size: 14px;
        text-decoration: none;

        &.router-link-exact-active {
            color: #42b983;
        }
    }

    .nav-bar-item:first-of-type {
        margin-top: 150px;
    }

    .nav-bar-item-active, .nav-bar-item:hover {
        background: #FFF;
        color: #3818f8;
    }
}
</style>
