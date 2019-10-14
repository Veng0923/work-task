<template>

    <div class="container">
        <h2>{{this.$route.meta.title}}</h2>
        <el-row>
            <el-col :span="4">
                <el-input
                        placeholder="请输入检索内容"
                        @keydown.enter.native="query"
                        v-model="queryText">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" @click="addFile">上传文件</el-button>
            </el-col>
            <el-col :span="2">
                <el-button type="danger" @click="deleteFile">{{deleteText}}</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-table
                    class="table"
                    :data="tableData"
                    border
                    @selection-change="handleSelectionChange"
                    style="width: 100%">
                <el-table-column
                        type="selection"
                        prop="select"
                        v-if="toggleDelete"
                        width="55">
                </el-table-column>
                <el-table-column
                        v-for="item in columns"
                        :key="item.prop"
                        :prop="item.prop"
                        :label="item.title"
                        :formatter="item.formatter"
                        :width="item.width">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="data">
                        <el-button
                                size="mini"
                                @click="handleEdit(data.$index, data.row)">编辑</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(data.$index, data.row)">删除</el-button>
                        <el-button
                                size="mini"
                                type="success"
                                @click="handleDownload(data.$index, data.row)">下载</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <el-col :span="1">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :page-size="size"
                        :page-count="totalPage">
                </el-pagination>
            </el-col>
        </el-row>
        <el-dialog
                width="40%"
                :visible.sync="isDialogShow"
                title="添加文件">
            <el-row>
                <el-upload
                        ref="upload"
                        :auto-upload="false"
                        :on-change="selectFile"
                        :action="dialogForm.uploadURL"
                        :with-credentials="true"
                        :on-success="handleUploadSuccess"
                        :on-error="handleUploadError"
                        :data="{fileName:this.dialogForm.fileName,description: this.dialogForm.description}"
                        drag>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </el-row>
            <el-form label-width="90px">
                <el-form-item label="文件名称：">
                    <el-input v-model="dialogForm.fileName"></el-input>
                </el-form-item>
                <el-form-item label="文件描述：">
                    <el-input  type="textarea" :rows="3" v-model="dialogForm.description"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="uploadFile">上传到服务器</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import fileData from './file-data';
    import fileColumns from './file-column-setting';
    import routerConfig from "../../request/router-config";
    import {getFileList} from "../../request";

    export default {
        name: "list",
        data: function () {
            return {
                queryText: '',
                page:1,
                size:10,
                totalPage:1,
                tableData: fileData,
                columns: fileColumns.columns,
                toggleDelete: false,
                multipleSelection:[],
                deleteText:"批量删除",
                isDialogShow: false,
                dialogForm:{
                    fileName:'',
                    suffix: '',
                    description:'',
                    uploadURL: routerConfig.upload,
                }
            }
        },
        created(){
            this.getFileList();
        },
        methods:{
            query(){
                alert(`search:${this.queryText}`);
            },
            handleSelectionChange(val){
                this.multipleSelection = val;
            },
            addFile(){
                this.isDialogShow = true;
            },
            deleteFile(){
                if(this.toggleDelete){
                    alert("删除所选文件");
                    this.toggleDelete = false;
                    this.deleteText = '批量删除';
                }else{
                    this.toggleDelete = true;
                    this.deleteText = "删除所选文件";
                }
            },
            selectFile(file,fileList){
                this.dialogForm.fileName = file.name;
                if (fileList.length > 1) {
                    fileList.shift();
                }
            },
            handleUploadSuccess(){
                this.getFileList();
                this.isDialogShow = false;
                this.$notify({
                    title: "Success",
                    message: "文件上传成功",
                    type: 'success'
                });
            },
            handleUploadError(){
                this.$notify.error({
                    title: "Error",
                    message: "文件上传失败",
                });
            },
            uploadFile(){
                if (this.$refs.upload.uploadFiles.length>0){
                    this.$refs.upload.submit();
                }else{
                    this.$notify({
                        message: "请要选择上传的文件",
                    });
                }
            },
            handleEdit(index,row){

            },
            handleDelete(index,row){
                this.tableData.splice(index,1);
            },
            handleDownload(index,row){

            },
            getFileList(){
                getFileList(this.queryText,this.page,this.size).then(data=>{
                    this.tableData = data.fileList;
                    this.totalPage = data.totalPage;
                });
            },
        }
    }
</script>

<style scoped>
    .container {
        margin: 10px;
        text-align: center;
        width: 100%;
    }
    .table{
        margin: 10px 0;
    }
</style>