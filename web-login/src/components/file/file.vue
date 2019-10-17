<template>

    <div class="container">
        <h2>{{this.$route.meta.title}}</h2>
        <el-row>
            <el-col :span="4">
                <el-input
                        placeholder="请输入检索内容"
                        @keydown.enter.native="query"
                        @change="query"
                        v-model="queryText">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" @click="addFile">{{string.uploadFile}}</el-button>
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
                    v-loading="loading"
                    :row-style="rowStyle"
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
                        :pager-count="size"
                        :current-page="page"
                        @prev-click="prePage"
                        @next-click="nextPage"
                        @current-change="pageChange"
                        :page-count="totalPage">
                </el-pagination>
            </el-col>
        </el-row>
        <el-dialog
                width="40%"
                :visible.sync="isDialogShow"
                :title="string.addFile">
            <el-row>
                <el-upload
                        ref="upload"
                        :auto-upload="false"
                        :on-change="selectFile"
                        :action="dialogForm.uploadURL"
                        :with-credentials="true"
                        :on-success="handleUploadSuccess"
                        :on-error="handleUploadError"
                        :headers="{'x-csrf-token': csrfToken,token:this.$store.getters.getToken}"
                        :data="{fileName:this.dialogForm.fileName,description: this.dialogForm.description}"
                        drag>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </el-row>
            <el-form label-width="90px">
                <el-form-item :label="string.fileName">
                    <el-input v-model="dialogForm.fileName"></el-input>
                </el-form-item>
                <el-form-item :label="string.fileDescription">
                    <el-input :show-word-limit="true" :maxlength="value.descriptionMaxLength"
                              :placeholder="string.descriptionHintText"
                              type="textarea" :rows="3" v-model="dialogForm.description"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="uploadFile">{{string.uploadToServer}}</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog
                width="40%"
                :visible.sync="isEditDialogShow"
                :title="string.editFile">
            <el-form label-width="90px">
                <el-form-item :label="string.fileName">
                    <el-input v-model="editFormDialog.fileName"></el-input>
                </el-form-item>
                <el-form-item :label="string.fileDescription">
                    <el-input :show-word-limit="true" :maxlength="value.descriptionMaxLength"
                              :placeholder="string.descriptionHintText"
                              type="textarea" :rows="3" v-model="editFormDialog.description"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="updateFile">{{string.save}}</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import fileData from './file-data';
    import fileColumns from './file-column-setting';
    import routerConfig,{csrfToken} from "../../request/router-config";
    import {getFileList,deleteFiles,updateFile,downloadFile} from "../../request";
    import {string,value} from "./resource";
    export default {
        name: "list",
        data: function () {
            return {
                queryText: '',
                string: string,
                value: value,
                page:1,
                size:7,
                totalPage:1,
                tableData: fileData,
                csrfToken: csrfToken,
                loading: false,
                columns: fileColumns.columns,
                toggleDelete: false,
                multipleSelection: [],
                deleteText: string.batchDelete,
                isDialogShow: false,
                isEditDialogShow: false,
                deleteList: [],
                dialogForm: {
                    fileName:'',
                    suffix: '',
                    description:'',
                    uploadURL: routerConfig.upload,
                },
                editFormDialog: {
                    fileName:'',
                    description:'',
                },
                updateIndex: '',
            }
        },
        created(){
            this.getFileList();
        },
        watch:{

        },
        methods:{
            query(){
                this.getFileList();
            },
            handleSelectionChange(val){
                this.multipleSelection = val;
            },
            addFile(){
                this.isDialogShow = true;
            },
            deleteFile(){
                if(this.toggleDelete){
                    this.toggleDelete = false;
                    this.deleteText = string.batchDelete;
                    this.multipleSelection.forEach(value => this.deleteList.push(value.id));
                    this.deleteList.length === 0?alert(string.notSelectFile):
                        deleteFiles(this.deleteList).then(result=>{
                            if (result.status === 200) {
                                this.notify(string.deleteFileSuccess);
                                this.getFileList();
                            }
                        });
                }else{
                    this.toggleDelete = true;
                    this.deleteText = string.deleteSelectedFile;
                }
            },
            selectFile(file,fileList){
                this.dialogForm.fileName = file.name;
                if (fileList.length > 1) {
                    fileList.shift();
                }
            },
            handleUploadSuccess(response){
                if (response.status === 500) {
                    this.notify(response.message,string.error,string.error);
                }else{
                    this.getFileList();
                    this.isDialogShow = false;
                    this.notify(string.fileUploadSuccess);
                }
            },
            handleUploadError(error){
                let message = string.fileUploadFailed;
                if (error.status === 400) {
                    message = string.fileFormatNotSupport;
                }
                this.notify(message,string.error,string.error);
            },
            uploadFile(){
                if (this.$refs.upload.uploadFiles.length>0){
                    this.$refs.upload.submit();
                }else{
                    this.$notify({message: string.selectUploadFile,});
                }
            },
            handleEdit(index,row){
                this.editFormDialog.fileName = row.fileName;
                this.editFormDialog.description = row.description;
                this.isEditDialogShow = true;
                this.updateIndex = index;
            },
            handleDelete(index,row){
                deleteFiles([row.id]).then(result=>{
                    if (result.status === 200) {
                        this.notify(string.deleteFileSuccess);
                        this.tableData.splice(index,1);
                    }
                });
            },
            handleDownload(index,row){
                downloadFile(row.id,row.fileName);
            },
            getFileList(){
                this.loading = true;
                getFileList(this.queryText,this.page,this.size).then(data=>{
                    this.tableData = data.fileList;
                    this.totalPage = data.totalPage;
                    this.loading = false;
                });
            },
            notify(message,title=string.success,type=string.success){
                this.$notify({title,message,type,duration: value.notifyShowTime});
            },
            updateFile(){
                const {fileName,description} = this.editFormDialog;
                const row = this.tableData[this.updateIndex];
                const id = row.id;
                updateFile(id,fileName,description).then(result=>{
                    if (result.status === 200) {
                        this.tableData.splice(this.updateIndex,1,Object.assign({},row,this.editFormDialog));
                        const {success,updateFileSuccess} = string;
                        this.notify(updateFileSuccess,success,success);
                        this.isEditDialogShow = false;
                    }else{
                        const {error,serverError} = string;
                        this.notify(serverError,error,error);
                    }
                });
            },
            prePage(){
                this.page -=1;
                this.getFileList();
            },
            nextPage(){
                this.page += 1;
                this.getFileList();
            },
            pageChange(page){
                this.page = page;
                this.getFileList();
            },
            rowStyle(){
                return "transition: transform 1.5s";
            }
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