<template>
  <div id="app">
        <NavBar :currentPath="currentPath"/>
        <el-card class="box-card">
            <!-- <router-view/> -->
            <transition :name="transationName">
                <router-view/>
            </transition>
        </el-card>
  </div>
</template>

<script>
import NavBar from "./container/NavBar.vue";
export default {
    data() {
        return {
            transationName: "slide-fade-right",
            routeStack: [],
            currentPath: ""
        }
    },
    watch: {
        "$route": {
            handler(to, from) {
                let fromRoute = from ? from : {};
                this.currentPath = to.path;
                let length = this.routeStack.length;
                let lastStack = length ? this.routeStack[length - 1] : {};
                if (!length) {
                    this.routeStack.push({
                        to: to.name, from: fromRoute.name
                    });
                    this.transationName = "slide-fade-right";
                } else if (fromRoute && lastStack.to == fromRoute.name && lastStack.from == to.name) {
                    this.routeStack.pop();
                    this.transationName = "slide-fade-left";
                } else {
                    this.routeStack.push({
                        to: to.name, from: fromRoute.name
                    });
                    this.transationName = "slide-fade-right";
                }
            },
            // deep: true,
            immediate: true
        }
    },
    components: {NavBar},
    methods: {}
}
</script>


<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
#app {
    min-height: 100%;
    display: flex;
    justify-content: flex-start;
}

.slide-fade-left, .slide-fade-right {
    position: absolute;left:0;right: 0;
}
.slide-fade-left-enter-active, .slide-fade-right-enter-active {
    transition: all 1.2s ease;
}
.slide-fade-left-leave-active, .slide-fade-right-leave-active {
    transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}

.slide-fade-left-enter {
    right: 0;
    transform: translateX(-50px); 
    opacity: 0;
}

.slide-fade-right-enter {
    left:0;
    transform: translateX(50px);
    opacity: 0;
}

.slide-fade-leave-to {
    right: 0;
    transform: translateX(-50px);
    opacity: 0;
}

.box-card {
    width: 1400px;
    margin: 20px 20px 20px 40px;
    height: 100%;
}

</style>
