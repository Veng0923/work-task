(function(e){function t(t){for(var i,a,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},"1d7b":function(e){e.exports=JSON.parse('[{"id":"123456","fileName":"王小虎","size":2048000,"uploadTime":"2019-10-10","description":"上海市普陀区金沙江路 1518 弄"},{"id":"1465413","fileName":"王小虎","size":2048000,"uploadTime":"2019-10-10","description":"上海市普陀区金沙江路 1518 弄"},{"id":"456132","fileName":"王小虎","size":2048000,"uploadTime":"2019-10-10","description":"上海市普陀区金沙江路 1518 弄"},{"id":"1241514","fileName":"王小虎","size":2048000,"uploadTime":"2019-10-10","description":"上海市普陀区金沙江路 1518 弄"}]')},"216f":function(e,t,n){"use strict";var i=n("55de"),o=n.n(i);o.a},2454:function(e,t,n){},"32b4":function(e,t,n){},"55de":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a={name:"app",components:{}},l=a,s=(n("034f"),n("2877")),c=Object(s["a"])(l,o,r,!1,null,null,null),u=c.exports,d=n("5c96"),p=n.n(d),f=(n("0fae"),n("2f62"));i["default"].use(f["a"]);var h=new f["a"].Store({state:{token:"",contentTitle:""},mutations:{changeToken:function(e,t){e.token=t,sessionStorage.setItem("token",t)},changeTitle:function(e,t){e.contentTitle=t}},getters:{getToken:function(e){return e.token||""!==e.token||(e.token=sessionStorage.getItem("token")),e.token},getTitle:function(e){return e.contentTitle}},actions:{changeToken:function(e,t){e.commit("changeToken",t)},changeTitle:function(e,t){e.commit("changeTitle",t)}}}),m=h,g=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-container",[n("layout-aside",{attrs:{"background-color":e.asideBackgroundColor}}),n("el-container",[n("router-view")],1)],1)],1)},w=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{style:{"min-height":e.windowHeight,width:e.setting.width},attrs:{router:!0,"default-active":e.menu[0].path,"background-color":"#545c64","text-color":"#fff",collapse:e.isCollapse,"collapse-transition":!0,"active-text-color":"#ffd04b"},on:{open:e.setTitle}},e._l(e.menu,(function(t){return n(t.children&&t.children.length>0?"el-submenu":"el-menu-item",{key:t.path,tag:"component",attrs:{index:t.path}},[n("template",{slot:"title"},[n("i",{class:[t.meta.icon]}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.title))])]),e._l(t.children,(function(i){return n("el-menu-item",{key:[t.path,i.path].join("/"),attrs:{index:[t.path,i.path].join("/")}},[e._v("\n            "+e._s(i.title)+"\n        ")])}))],2)})),1)},y=[],x=n("7b98"),k={name:"layout-aside",props:{backgroundColor:String},data:function(){return{isCollapse:!1,menu:me[1].children,setting:x}},created:function(){},computed:{windowHeight:function(){return"".concat(window.innerHeight,"px")}},methods:{setTitle:function(){this.dispatch("changeTitle",this.$route.title)}}},F=k,S=(n("216f"),Object(s["a"])(F,v,y,!1,null,"277eb58c",null)),_=S.exports,D={name:"index",components:{LayoutAside:_},data:function(){return{asideBackgroundColor:"#545c64"}},computed:{}},T=D,N=Object(s["a"])(T,b,w,!1,null,"d94d7c86",null),O=N.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{staticClass:"login-box"},[n("h2",[e._v("登陆")]),n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户名："}},[n("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("el-form-item",{attrs:{label:"密码："}},[n("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("el-form-item",{attrs:{label:"验证码："}},[n("el-col",{attrs:{span:10}},[n("el-input",{attrs:{type:"text"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit(t)}},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),n("span",{ref:"code",on:{click:e.getCode}})],1),n("el-form-item",{attrs:{"label-width":"0"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登陆")])],1)],1)],1)],1)},C=[],j=(n("96cf"),n("3b8d")),L=n("6829"),E=n.n(L),R=(n("4917"),n("3b2b"),{getCookies:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return t=document.cookie.match(n),t?unescape(t[2]):null}}),q={host:"127.0.0.1",port:7001},z="http://".concat(q.host,":").concat(q.port);z="";var P=R.getCookies("csrfToken"),U={login:"".concat(z,"/login"),code:"".concat(z,"/code"),upload:"".concat(z,"/upload"),file:"".concat(z,"/file"),downloadFile:"".concat(z,"/file/download")},I=U,M=n("bc3a"),A=n.n(M);function H(e,t,n){return J.apply(this,arguments)}function J(){return J=Object(j["a"])(regeneratorRuntime.mark((function e(t,n,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.post(I.login,{username:t,password:n,code:i}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}function B(){return G.apply(this,arguments)}function G(){return G=Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.get(I.code,{}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}function K(e,t,n){return Q.apply(this,arguments)}function Q(){return Q=Object(j["a"])(regeneratorRuntime.mark((function e(t,n,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.get(I.file,{query:t,page:n,size:i}).then((function(e){return e.data.data})));case 1:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function V(e){return W.apply(this,arguments)}function W(){return W=Object(j["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.delete(I.file+"/".concat(t)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function X(e,t,n){return Y.apply(this,arguments)}function Y(){return Y=Object(j["a"])(regeneratorRuntime.mark((function e(t,n,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.put("".concat(I.file,"/").concat(t),{fileName:n,description:i}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function Z(e,t){return ee.apply(this,arguments)}function ee(){return ee=Object(j["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.get("".concat(I.downloadFile,"/").concat(t),null,{gzip:!0,headers:{"Content-Type":"application/octet-stream"},responseType:"blob"}).then((function(e){var t=e.data,i=new FileReader;i.readAsDataURL(t),i.onload=function(){var e=document.createElement("a");e.download=n,e.href=window.URL.createObjectURL(t),document.body.appendChild(e),e.click(),document.body.removeChild(e)}})));case 1:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}E.a.interceptors.request.use((function(e){return e.headers["x-csrf-token"]=P,e.headers["token"]=m.getters.getToken,e})),E.a.interceptors.response.use((function(e){var t=e.data.status;410===t&&be.push("/login").catch((function(e){throw e}))})),A.a.interceptors.response.use((function(e){var t=e.data.status;410===t&&be.push("/login").catch((function(e){throw e}))}));var te={name:"login",data:function(){return{form:{username:"",password:"",code:""},code:""}},created:function(){this.getCode()},methods:{onSubmit:function(){var e=this;H(this.form.username,this.form.password,this.form.code).then((function(t){var n=t.status;n<2?(alert(t.message),e.getCode()):(e.$store.dispatch("changeToken",t.token),e.$router.push("/"))}))},getCode:function(){var e=this;B().then((function(t){e.$refs.code.innerHTML=t}))}}},ne=te,ie=(n("dd16"),Object(s["a"])(ne,$,C,!1,null,"40ead345",null)),oe=ie.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h2",[e._v(e._s(this.$route.meta.title))]),n("el-row",[n("el-col",{attrs:{span:4}},[n("el-input",{attrs:{placeholder:"请输入检索内容"},on:{change:e.query},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.query(t)}},model:{value:e.queryText,callback:function(t){e.queryText=t},expression:"queryText"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary"},on:{click:e.addFile}},[e._v(e._s(e.string.uploadFile))])],1),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"danger"},on:{click:e.deleteFile}},[e._v(e._s(e.deleteText))])],1)],1),n("el-row",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","row-style":e.rowStyle},on:{"selection-change":e.handleSelectionChange}},[e.toggleDelete?n("el-table-column",{attrs:{type:"selection",prop:"select",width:"55"}}):e._e(),e._l(e.columns,(function(e){return n("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.title,formatter:e.formatter,width:e.width}})})),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]),n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return e.handleDownload(t.$index,t.row)}}},[e._v("下载")])]}}])})],2)],1),n("el-row",[n("el-col",{attrs:{span:1}},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":e.size,"pager-count":e.size,"current-page":e.page,"page-count":e.totalPage},on:{"prev-click":e.prePage,"next-click":e.nextPage,"current-change":e.pageChange}})],1)],1),n("el-dialog",{attrs:{width:"40%",visible:e.isDialogShow,title:e.string.addFile},on:{"update:visible":function(t){e.isDialogShow=t}}},[n("el-row",[n("el-upload",{ref:"upload",attrs:{"auto-upload":!1,"on-change":e.selectFile,action:e.dialogForm.uploadURL,"with-credentials":!0,"on-success":e.handleUploadSuccess,"on-error":e.handleUploadError,headers:{"x-csrf-token":e.csrfToken,token:this.$store.getters.getToken},data:{fileName:this.dialogForm.fileName,description:this.dialogForm.description},drag:""}},[n("i",{staticClass:"el-icon-upload"}),n("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),n("em",[e._v("点击上传")])])])],1),n("el-form",{attrs:{"label-width":"90px"}},[n("el-form-item",{attrs:{label:e.string.fileName}},[n("el-input",{model:{value:e.dialogForm.fileName,callback:function(t){e.$set(e.dialogForm,"fileName",t)},expression:"dialogForm.fileName"}})],1),n("el-form-item",{attrs:{label:e.string.fileDescription}},[n("el-input",{attrs:{"show-word-limit":!0,maxlength:e.value.descriptionMaxLength,placeholder:e.string.descriptionHintText,type:"textarea",rows:3},model:{value:e.dialogForm.description,callback:function(t){e.$set(e.dialogForm,"description",t)},expression:"dialogForm.description"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.uploadFile}},[e._v(e._s(e.string.uploadToServer))])],1)],1)],1),n("el-dialog",{attrs:{width:"40%",visible:e.isEditDialogShow,title:e.string.editFile},on:{"update:visible":function(t){e.isEditDialogShow=t}}},[n("el-form",{attrs:{"label-width":"90px"}},[n("el-form-item",{attrs:{label:e.string.fileName}},[n("el-input",{model:{value:e.editFormDialog.fileName,callback:function(t){e.$set(e.editFormDialog,"fileName",t)},expression:"editFormDialog.fileName"}})],1),n("el-form-item",{attrs:{label:e.string.fileDescription}},[n("el-input",{attrs:{"show-word-limit":!0,maxlength:e.value.descriptionMaxLength,placeholder:e.string.descriptionHintText,type:"textarea",rows:3},model:{value:e.editFormDialog.description,callback:function(t){e.$set(e.editFormDialog,"description",t)},expression:"editFormDialog.description"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.updateFile}},[e._v(e._s(e.string.save))])],1)],1)],1)],1)},ae=[],le=(n("7f7f"),n("ac6a"),n("1d7b")),se=(n("c5f6"),n("5df2"),{columns:[{title:"id",width:80,prop:"id"},{title:"FastDFS_ID",width:200,prop:"fastID"},{title:"文件名称",width:180,prop:"fileName"},{title:"文件大小",width:100,prop:"fileSize",formatter:function(e,t,n){return"".concat((Number.parseFloat(n)/1024/1e3).toFixed(2),"M")}},{title:"上传时间",width:180,prop:"uploadTime",formatter:function(e,t,n){return new Date(n).toLocaleString()}},{title:"文件描述",prop:"description","show-overflow-tooltip":!0}]}),ce={batchDelete:"批量删除",deleteSelectedFile:"删除所选文件",success:"success",error:"error",fileUploadSuccess:"文件上传成功",fileUploadFailed:"文件上传失败",fileFormatNotSupport:"文件格式不支持",selectUploadFile:"请选择要上传的文件",fileName:"文件名称",fileDescription:"文件描述",uploadToServer:"上传到服务器",addFile:"添加文件",uploadFile:"上传文件",notSelectFile:"未选择文件",deleteFileSuccess:"文件删除成功",editFile:"编辑文件",save:"保存",serverError:"服务器异常",updateFileSuccess:"修改文件成功",descriptionHintText:"限制在250字以内"},ue={notifyShowTime:1800,descriptionMaxLength:250},de={name:"list",data:function(){return{queryText:"",string:ce,value:ue,page:1,size:7,totalPage:1,tableData:le,csrfToken:P,loading:!1,columns:se.columns,toggleDelete:!1,multipleSelection:[],deleteText:ce.batchDelete,isDialogShow:!1,isEditDialogShow:!1,deleteList:[],dialogForm:{fileName:"",suffix:"",description:"",uploadURL:I.upload},editFormDialog:{fileName:"",description:""},updateIndex:""}},created:function(){this.getFileList()},watch:{},methods:{query:function(){this.getFileList()},handleSelectionChange:function(e){this.multipleSelection=e},addFile:function(){this.isDialogShow=!0},deleteFile:function(){var e=this;this.toggleDelete?(this.toggleDelete=!1,this.deleteText=ce.batchDelete,this.multipleSelection.forEach((function(t){return e.deleteList.push(t.id)})),0===this.deleteList.length?alert(ce.notSelectFile):V(this.deleteList).then((function(t){200===t.status&&(e.notify(ce.deleteFileSuccess),e.getFileList())}))):(this.toggleDelete=!0,this.deleteText=ce.deleteSelectedFile)},selectFile:function(e,t){this.dialogForm.fileName=e.name,t.length>1&&t.shift()},handleUploadSuccess:function(){this.getFileList(),this.isDialogShow=!1,this.notify(ce.fileUploadSuccess)},handleUploadError:function(e){var t=ce.fileUploadFailed;400===e.status&&(t=ce.fileFormatNotSupport),this.notify(t,ce.error,ce.error)},uploadFile:function(){this.$refs.upload.uploadFiles.length>0?this.$refs.upload.submit():this.$notify({message:ce.selectUploadFile})},handleEdit:function(e,t){this.editFormDialog.fileName=t.fileName,this.editFormDialog.description=t.description,this.isEditDialogShow=!0,this.updateIndex=e},handleDelete:function(e,t){var n=this;V([t.id]).then((function(t){200===t.status&&(n.notify(ce.deleteFileSuccess),n.tableData.splice(e,1))}))},handleDownload:function(e,t){Z(t.id,t.fileName)},getFileList:function(){var e=this;this.loading=!0,K(this.queryText,this.page,this.size).then((function(t){e.tableData=t.fileList,e.totalPage=t.totalPage,e.loading=!1}))},notify:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ce.success,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ce.success;this.$notify({title:t,message:e,type:n,duration:ue.notifyShowTime})},updateFile:function(){var e=this,t=this.editFormDialog,n=t.fileName,i=t.description,o=this.tableData[this.updateIndex],r=o.id;X(r,n,i).then((function(t){if(200===t.status){e.tableData.splice(e.updateIndex,1,Object.assign({},o,e.editFormDialog));var n=ce.success,i=ce.updateFileSuccess;e.notify(i,n,n),e.isEditDialogShow=!1}else{var r=ce.error,a=ce.serverError;e.notify(a,r,r)}}))},prePage:function(){this.page-=1,this.getFileList()},nextPage:function(){this.page+=1,this.getFileList()},pageChange:function(e){this.page=e,this.getFileList()},rowStyle:function(){return"transition: transform 1.5s"}}},pe=de,fe=(n("ad0e"),Object(s["a"])(pe,re,ae,!1,null,"0166aba4",null)),he=fe.exports;i["default"].use(g["a"]);var me=[{path:"/index",component:O,meta:{requiresAuth:!0},redirect:"/"},{path:"/",component:O,meta:{requiresAuth:!0},redirect:"file",children:[{path:"file",component:he,meta:{icon:"el-icon-folder-opened",title:"文件管理",requiresAuth:!0}}]},{path:"/login",component:oe,meta:{requiresAuth:!1}}],ge=new g["a"]({routes:me});ge.beforeEach((function(e,t,n){e.meta.requiresAuth&&(sessionStorage.getItem("token")&&""!==sessionStorage.token||n({path:"/login"})),n()}));var be=ge;i["default"].config.productionTip=!1,i["default"].use(p.a),new i["default"]({render:function(e){return e(u)},store:m,router:be}).$mount("#app")},"64a9":function(e,t,n){},"7b98":function(e){e.exports=JSON.parse('{"width":"170px"}')},ad0e:function(e,t,n){"use strict";var i=n("32b4"),o=n.n(i);o.a},dd16:function(e,t,n){"use strict";var i=n("2454"),o=n.n(i);o.a}});
//# sourceMappingURL=app.784d1fd8.js.map