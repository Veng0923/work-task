(function(e){function t(t){for(var r,u,c=t[0],s=t[1],i=t[2],f=0,p=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={name:"app",components:{}},c=u,s=(n("034f"),n("2877")),i=Object(s["a"])(c,o,a,!1,null,null,null),l=i.exports,f=n("5c96"),p=n.n(f),d=(n("0fae"),n("2f62"));r["default"].use(d["a"]);var m=new d["a"].Store({state:{token:""},mutations:{changeToken:function(e,t){e.token=t}},actions:{changeToken:function(e,t){e.commit("changeToken",t)}}}),h=m,b=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    "+e._s(e.message)+"\n")])},g=[],w={name:"index",computed:{message:function(){return this.$store.state.token}}},y=w,k=Object(s["a"])(y,v,g,!1,null,"007b65f8",null),x=k.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{staticClass:"login-box"},[n("h2",[e._v("登陆")]),n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户名："}},[n("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("el-form-item",{attrs:{label:"密码："}},[n("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("el-form-item",{attrs:{label:"验证码："}},[n("el-input",{attrs:{type:"text"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}}),n("span",{attrs:{id:"code"},on:{click:e.getCode}})],1),n("el-form-item",{attrs:{"label-width":"0"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登陆")])],1)],1)],1)],1)},_=[],j=(n("96cf"),n("3b8d")),$=n("6829"),T=n.n($),S=(n("4917"),n("3b2b"),{getCookies:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return t=document.cookie.match(n),t?unescape(t[2]):null}}),P=S.getCookies("csrfToken");T.a.interceptors.request.use((function(e){return e.headers["x-csrf-token"]=P,e}));var C="";function E(e,t,n){return M.apply(this,arguments)}function M(){return M=Object(j["a"])(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o="".concat(C,"/login"),e.abrupt("return",T.a.post(o,{username:t,password:n,code:r}).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function R(){return q.apply(this,arguments)}function q(){return q=Object(j["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="".concat(C,"/code"),e.abrupt("return",T.a.get(t,{}).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}var A={name:"login",data:function(){return{form:{username:"",password:"",code:""},code:""}},created:function(){this.getCode()},methods:{onSubmit:function(){var e=this;E(this.form.username,this.form.password,this.form.code).then((function(t){var n=t.status;n<2?alert(t.message):(e.$store.dispatch("changeToken",t),e.$router.push("/index"))}))},getCode:function(){R().then((function(e){document.getElementById("code").innerHTML=e}))}}},J=A,B=(n("b426"),Object(s["a"])(J,O,_,!1,null,"7607044c",null)),H=B.exports;r["default"].use(b["a"]);var I=[{path:"/index",component:x,meta:{requiresAuth:!0}},{path:"/login",component:H,meta:{requiresAuth:!1}}],L=new b["a"]({routes:I});L.beforeEach((function(e,t,n){e.meta.requiresAuth&&(console.log(h.state.token),""===h.state.token&&n({path:"/login"})),n()}));var z=L;r["default"].config.productionTip=!1,r["default"].use(p.a),new r["default"]({render:function(e){return e(l)},store:h,router:z}).$mount("#app")},"64a9":function(e,t,n){},"71ae":function(e,t,n){},b426:function(e,t,n){"use strict";var r=n("71ae"),o=n.n(r);o.a}});
//# sourceMappingURL=app.530b931e.js.map