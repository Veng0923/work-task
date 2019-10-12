<template>
    <div>
        <layout-aside></layout-aside>
        <router-view></router-view>
    </div>
</template>

<script>

    import LayoutAside from "./aside/aside";
    export default {
        name: "index",
        components: {LayoutAside},
        computed:{

        }
    }
</script>

<style scoped>

</style>