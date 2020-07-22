<template>
    <div class="home">
        <div id="nav">
            <router-link to="/About.html">About</router-link>
        </div>
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld :msg="msg"/>
    </div>
</template>

<script> 
export default {
    name: "home",
    components: {
        HelloWorld: () => import(/* webpackChunkName: "HelloWorld" */ "../components/HelloWorld.vue")
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
    mounted() {}
};
</script>
