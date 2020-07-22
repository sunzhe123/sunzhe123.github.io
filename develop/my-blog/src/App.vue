<template>
  <div id="app">
    <transition :name="transationName">
        <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            transationName: "slide-fade-right",
            routeStack: []
        }
    },
    watch: {
        '$route' (to, from) {
            let length = this.routeStack.length;
            let lastStack = length ? this.routeStack[length - 1] : {};
            if (!length) {
                this.routeStack.push({
                    to: to.name, from: from.name
                });
                this.transationName = "slide-fade-right";
            } else if (lastStack.to == from.name && lastStack.from == to.name) {
                this.routeStack.pop();
                this.transationName = "slide-fade-left";
            } else {
                this.routeStack.push({
                    to: to.name, from: from.name
                });
                this.transationName = "slide-fade-right";
            }
        }
    },
    methods: {}
}
</script>


<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
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
</style>
