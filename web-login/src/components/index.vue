<template>
    <div>
        <el-container>
            <layout-aside :background-color="asideBackgroundColor"></layout-aside>
            <el-container>
                <router-view></router-view>
            </el-container>
        </el-container>

    </div>
</template>

<script>

    import LayoutAside from "./aside/aside";
    export default {
        name: "index",
        components: {LayoutAside},
        data: function(){
            return {
                asideBackgroundColor: "#545c64",
            }
        },
        computed:{

        }
    }
</script>

<style scoped>

</style>