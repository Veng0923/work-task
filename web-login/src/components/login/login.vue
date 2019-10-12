<template>
    <div>
        <el-card class="login-box">
            <h2>登陆</h2>
            <el-form ref="form"  :model="form" label-width="80px">
                <el-form-item label="用户名：">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="验证码：">
                    <el-col :span="15">
                        <el-input type="text" v-model="form.code"></el-input>
                    </el-col>
                    <span ref="code" @click="getCode"></span>
                </el-form-item>
                <el-form-item label-width="0">
                    <el-button type="primary" @click="onSubmit">登陆</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import {getCode,login} from "../../request";

    export default {
        name: "login",
        data: function () {
            return {
                form:{
                    username:'',
                    password:"",
                    code:"",
                },
                code:'',
            }
        },
        created: function () {
            this.getCode();
        },
        methods:{
            onSubmit: function () {
                login(this.form.username, this.form.password, this.form.code).then(data=>{
                    const status = data.status;
                    if (status<2){
                        alert(data.message);
                    }else{
                        this.$store.dispatch("changeToken",data.token);
                        this.$router.push('/');
                    }
                });
            },
            getCode(){
                getCode().then(data=>{
                    this.$refs.code.innerHTML = data;
                });
            },
        }
    }
</script>

<style scoped>
    .login-box{
        margin-left: 35%;
        margin-right: 35%;
        padding-left: 80px;
        padding-right: 80px;
    }
</style>