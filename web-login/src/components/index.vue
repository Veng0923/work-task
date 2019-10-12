<template>
    <div>
        <Aside></Aside>
        <router-view></router-view>
    </div>
</template>

<script>
    import Aside from "./aside/aside";
    export default {
        name: "index",
        components: {Aside},
        computed:{

        }
    }
</script>

<style scoped>

</style>