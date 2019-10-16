<template>

    <el-menu
            :router=true
            :default-active="menu[0].path"
            background-color="#545c64"
            text-color="#fff"
            :collapse="isCollapse"
            :collapse-transition="true"
            :style="{'min-height': windowHeight,width: setting.width}"
            @open="setTitle"
            active-text-color="#ffd04b">
        <component v-for="item in menu" :key="item.path" :is="item.children&&item.children.length>0?'el-submenu':'el-menu-item'" :index="item.path">
            <template slot="title">
                <i :class="[item.meta.icon]"></i>
                <span slot="title">{{item.meta.title}}</span>
            </template>
            <el-menu-item v-for="subItem in item.children" :index="[item.path,subItem.path].join('/')" :key="[item.path,subItem.path].join('/')">
                {{subItem.title}}
            </el-menu-item>
        </component>
    </el-menu>


</template>

<script>
    import asideSetting from './aside-setting';
    import {routes} from "../../router";

    export default {
        name: "layout-aside",
        props: {
            backgroundColor: String,
        },
        data: function () {
            return {
                isCollapse: false,
                menu: routes[1].children,
                setting: asideSetting,
            }
        },
        created() {

        },
        computed: {
            windowHeight() {
                return `${window.innerHeight}px`;
            },
        },
        methods:{
            setTitle(){
                this.dispatch("changeTitle",this.$route.title);
            },
        }
    }
</script>

<style scoped>
    .aside {
        background-color: #545c64;
        width: 200px;
    }

</style>