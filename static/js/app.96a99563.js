(function(e){function t(t){for(var i,l,r=t[0],o=t[1],c=t[2],p=0,d=[];p<r.length;p++)l=r[p],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&d.push(s[l][0]),s[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,l=1;l<a.length;l++){var r=a[l];0!==s[r]&&(i=!1)}i&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},l={app:0},s={app:0},n=[];function r(e){return o.p+"static/js/"+({}[e]||e)+"."+{"chunk-039962d6":"6ffcb2f8","chunk-2d210c47":"12360b89"}[e]+".js"}function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-039962d6":1};l[e]?t.push(l[e]):0!==l[e]&&a[e]&&t.push(l[e]=new Promise((function(t,a){for(var i="static/css/"+({}[e]||e)+"."+{"chunk-039962d6":"efa08233","chunk-2d210c47":"31d6cfe0"}[e]+".css",s=o.p+i,n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var c=n[r],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===i||p===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],p=c.getAttribute("data-href");if(p===i||p===s)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var i=t&&t.target&&t.target.src||s,n=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=i,delete l[e],u.parentNode.removeChild(u),a(n)},u.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(u)})).then((function(){l[e]=0})));var i=s[e];if(0!==i)if(i)t.push(i[2]);else{var n=new Promise((function(t,a){i=s[e]=[t,a]}));t.push(i[2]=n);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,o.nc&&p.setAttribute("nonce",o.nc),p.src=r(e);var d=new Error;c=function(t){p.onerror=p.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+l+")",d.name="ChunkLoadError",d.type=i,d.request=l,a[1](d)}s[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:p})}),12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(t)},o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=p;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0361":function(e,t,a){e.exports=a.p+"static/img/audio.1c119cb7.png"},2011:function(e,t,a){"use strict";a("227c")},"227c":function(e,t,a){},"562d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var i=a("2b0e"),l=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("el-container",{staticClass:"home-container"},[t("el-header",[t("el-menu",{staticClass:"el-menu",attrs:{"default-active":e.activeIndex,mode:"horizontal","background-color":"#343A40","text-color":"#CCCDCF","active-text-color":"#FFFFFF",router:!0},on:{select:e.handleSelect}},[t("NavMenu",{attrs:{navMenus:e.menuData}})],1)],1),t("el-main",[t("router-view")],1)],1)],1)},s=[],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"navMenu"},[e._l(e.navMenus,(function(a){return[!a.childs&&a.entity?t("el-menu-item",{key:a.entity.id,attrs:{data:a,index:a.entity.name}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.entity.alias))])]):e._e()]}))],2)},r=[],o={name:"NavMenu",props:["navMenus"],data(){return{}},methods:{}},c=o,p=(a("bb62"),a("2877")),d=Object(p["a"])(c,n,r,!1,null,"3a9a78f5",null),u=d.exports,h={name:"app",components:{NavMenu:u},data(){return{activeIndex:"home",menuData:[{entity:{id:1,name:"home",alias:"Home"}},{entity:{id:2,name:"about",alias:"About"}},{entity:{id:3,name:"content",alias:"Content"}}]}},methods:{handleSelect(){}}},f=h,g=(a("2011"),Object(p["a"])(f,l,s,!1,null,null,null)),v=g.exports,m=a("8c4f"),y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("el-steps",{attrs:{active:e.active,"align-center":"","finish-status":"success","process-status":"wait"}},[t("el-step",{attrs:{title:"选择检测模型"}}),t("el-step",{attrs:{title:"上传检测内容"}}),t("el-step",{attrs:{title:"查看检测报告"}})],1),1===e.active?t("div",{attrs:{type:"algin-center"}},[t("div",{staticClass:"select"},[t("h3",[e._v("选择检测模型的类型:")]),t("el-radio",{attrs:{label:"special"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v("专用型")]),t("el-radio",{attrs:{label:"general"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v("通用型")])],1)]):e._e(),2===e.active&&"special"===e.type?t("div",[t("div",{staticClass:"upload"},[t("div",{staticClass:"file-preview"},[e._l(e.dialogspecialUrl,(function(i,l){return t("div",{key:i,staticClass:"forPreview_special"},[t("img",{staticClass:"specialFile",staticStyle:{width:"200px",height:"200px","margin-right":"10px"},attrs:{src:a("0361"),alt:""}}),t("audio",{staticStyle:{display:"inline-block"},attrs:{width:"200px",height:"200px",controls:"controls",src:i}},[e._v(" 您的浏览器不支持音频播放")]),t("img",{staticClass:"delete",staticStyle:{width:"20px",height:"20px",background:"rgba(0, 0, 0, .6)",diaplay:"inline-flex"},attrs:{src:a("d991")},on:{click:function(t){return e.forkspecial(l)}}})])})),t("el-upload",{ref:"upload",staticClass:"special",attrs:{action:" ",limit:10,multiple:"","on-progress":e.uploadspecialProcess,"on-success":e.handlespecialSuccess,"before-upload":()=>{},"on-change":e.beforeUploadspecial,"show-file-list":!1,"auto-upload":!1,accept:".flac"}},[e.specialFlag||0!=e.dialogspecialUrl.length?e._e():t("div",{staticClass:"file-drop-zone"},[t("div",{staticClass:"el-upload__text"},[e._v("点击上传音频")]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传flac格式，且不超过500kb")])]),1==e.specialFlag?t("el-progress",{staticStyle:{"margin-top":"30px",position:"relative",top:"-15px"},attrs:{type:"circle",percentage:e.specialUploadPercent}}):e._e(),t("div",{staticStyle:{"margin-top":"15px"}},[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"}},[e._v("批量上传")])],1)],1)],2)])]):e._e(),2===e.active&&"general"===e.type?t("div",[t("div",{staticClass:"upload"},[t("div",{staticClass:"file-preview"},[e._l(e.dialoggeneralUrl,(function(i,l){return t("div",{key:i,staticClass:"forPreview_special"},[t("img",{staticClass:"specialFile",staticStyle:{width:"200px",height:"200px","margin-right":"10px"},attrs:{src:a("0361"),alt:""}}),t("audio",{staticStyle:{display:"inline-block"},attrs:{width:"200px",height:"200px",controls:"controls",src:i}},[e._v(" 您的浏览器不支持音频播放")]),t("img",{staticClass:"delete",staticStyle:{width:"20px",height:"20px",background:"rgba(0, 0, 0, .6)",diaplay:"inline-flex"},attrs:{src:a("d991")},on:{click:function(t){return e.forkspecial(l)}}})])})),t("el-upload",{ref:"upload",staticClass:"general",attrs:{action:" ",limit:10,multiple:"","on-progress":e.uploadgeneralProcess,"on-success":e.handlegeneralSuccess,"before-upload":()=>{},"on-change":e.beforeUploadgeneral,"show-file-list":!1,"auto-upload":!1,accept:".flac"}},[e.generalFlag||0!=e.dialoggeneralUrl.length?e._e():t("div",{staticClass:"file-drop-zone"},[t("div",{staticClass:"el-upload__text"},[e._v("点击上传音频")]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传flac格式，且不超过500kb")])]),1==e.generalFlag?t("el-progress",{staticStyle:{"margin-top":"30px",position:"relative",top:"-15px"},attrs:{type:"circle",percentage:e.generalUploadPercent}}):e._e(),t("div",{staticStyle:{"margin-top":"15px"}},[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"}},[e._v("批量上传")])],1)],1)],2)])]):e._e(),3===e.active?t("div",{staticClass:"report"},[t("div",{staticClass:"box-card total"},[t("div",{staticClass:"echart",staticStyle:{width:"100%",height:"300px"},attrs:{id:"mychart"}}),t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("检测共计"+e._s(e.reports.length)+"个文件, 其中伪造音频"+e._s(e.fakeFile?e.fakeFile.length:"0")+"个, 真实音频"+e._s(e.trueFile?e.trueFile.length:"0")+"个。")])])]),t("div",{staticClass:"detail"},[t("div",{attrs:{gutter:12}},e._l(e.reports,(function(a){return t("el-col",{key:e.reports.indexOf(a)+1,attrs:{span:8}},[t("div",{staticClass:"box-card"},[t("div",{staticClass:"filename"},[e._v(e._s(a.nameOf))]),0===a.state?t("div",[e._v(" 该音频有"+e._s(String(a.confidence)+"%")+"的概率是真实的。 ")]):t("div",[e._v(" 该音频有"+e._s(a.confidence+"%")+"的概率是伪造的。 ")])])])})),1)])]):e._e(),t("div",{staticStyle:{"text-align":"center",padding:"10px"}},[2===e.active||3===e.active?t("el-button",{attrs:{type:"primary"},on:{click:e.pre}},[e._v("上一步")]):e._e(),1===e.active||2===e.active?t("el-button",{attrs:{type:"primary"},on:{click:e.next}},[e._v("下一步")]):t("el-button",{attrs:{type:"primary"},on:{click:e.next}},[e._v("返回")])],1)],1)},b=[],_=(a("be4f"),a("450d"),a("896a")),x=a.n(_),w=(a("14d9"),a("0643"),a("2382"),a("4e3e"),a("88a7"),a("271a"),a("5494"),a("bc3a")),C=a.n(w),S=a("313e"),k={name:"home",data(){return{active:1,type:"special",specialFlag:!1,specialUploadPercent:"",isShowUploadspecial:!1,dialogspecialUrl:[],specialList:[],specialForm:{showspecialPath:""},generalFlag:!1,generalUploadPercent:0,isShowUploadgeneral:!1,dialoggeneralUrl:[],generalList:[],generalForm:{showgeneralPath:""},reports:[{confidence:100,nameOf:"special_audio1.flac",state:1},{confidence:100,nameOf:"special_audio2.flac",state:0}],myChart:{}}},computed:{trueFile:function(){return this.reports.filter(e=>0===e.state)},fakeFile:function(){return this.reports.filter(e=>1===e.state)}},methods:{handleClose(){},next(){this.active++>2&&(this.active=1),this.active,3==this.active&&("special"==this.type?this.uploadspecialFile():this.uploadgeneralFile(),this.openFullScreen())},pre(){this.active--<1&&(this.active=1)},forkspecial(e){this.dialogspecialUrl.splice(e,1),this.specialList.splice(e,1)},beforeUploadspecial(e,t){var a=e.raw,i=a.size/1024/1024<500;return-1===["audio/flac","audio/mpeg"].indexOf(a.type)?(console.log("请上传正确的音频格式: "+a.type),!1):i?(this.isShowUploadspecial=!0,this.specialFlag=!1,this.specialUploadPercent=0,this.dialogspecialUrl.push(URL.createObjectURL(a)),void this.specialList.push(e)):(console.log("音频大小不能超过500MB"),!1)},uploadspecialFile(){const e=new FormData;e.append("type",this.type),e.append("number",this.specialList.length),this.specialList.forEach((t,a)=>{e.append("filename["+a+"]",t.name),e.append("files["+a+"]",t.raw)});const t="/api/special";C.a.post(t,e,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{this.reports=e.data,this.getPie()}).catch(e=>{console.log("error",e),this.getPie()})},handlespecialSuccess(e,t){this.isShowUploadspecial=!0,this.specialFlag=!1,this.specialUploadPercent=0,0===e.Code?(this.dialogspecialUrl=e.Data,console.log("file",t)):console.log(e.Message)},uploadspecialProcess(e){this.specialFlag=!0,this.specialUploadPercent=Math.floor(e.percent)},handleExceed(){this.$message.warning("当前限制选择 10 个文件，请删除后继续上传")},forkgeneral(e){this.dialoggeneralUrl.splice(e,1),this.generalList.splice(e,1)},beforeUploadgeneral(e,t){var a=e.raw,i=a.size/1024/1024<500;return-1===["audio/flac","audio/mpeg"].indexOf(a.type)?(console.log("请上传正确的音频格式: "+a.type),!1):i?(this.isShowUploadgeneral=!0,this.generalFlag=!1,this.generalUploadPercent=0,this.dialoggeneralUrl.push(URL.createObjectURL(a)),void this.generalList.push(e)):(console.log("音频大小不能超过500MB"),!1)},uploadgeneralFile(){const e=new FormData;e.append("type",this.type),e.append("number",this.generalList.length),this.generalList.forEach((t,a)=>{e.append("filename["+a+"]",t.name),e.append("files["+a+"]",t.raw)});const t="/api/general";C.a.post(t,e,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{this.reports=e.data,console.log(this.reports),this.getPie()}).catch(e=>{console.log("error",e),this.getPie()})},handlegeneralSuccess(e,t){this.isShowUploadgeneral=!0,this.generalFlag=!1,this.generalUploadPercent=0,0===e.Code?(this.dialoggeneralUrl=e.Data,console.log("file",t)):console.log(e.Message)},uploadgeneralProcess(e){this.generalFlag=!0,this.generalUploadPercent=Math.floor(e.percent)},handleExceed(){this.$message.warning("当前限制选择 10 个文件，请删除后继续上传")},getPie(){let e={title:{text:"检测结果",x:"center",textStyle:{color:"#000",fontStyle:"normal",fontWeight:100,fontSize:16}},tooltip:{trigger:"item",formatter:"{b}:{c} ({d}%)"},legend:{orient:"vertical",right:10,textStyle:{color:"#000",fontSize:16},data:["伪造","非伪造"]},color:["#32dadd","#b6a2de"],series:{type:"pie",radius:"70%",center:["50%","50%"],data:[{name:"伪造",value:this.fakeFile.length},{name:"非伪造",value:this.trueFile.length}],label:{show:!1}}},t={tooltip:{trigger:"item",formatter:"{b}:{c} ({d}%)"},legend:{orient:"vertical",right:10,textStyle:{color:"#000",fontSize:16},data:["检测结果可信度",""]},color:["#32dadd","#b6a2de"],series:{type:"pie",radius:"70%",center:["50%","50%"],data:[{name:"检测结果可信度",value:this.reports[0].confidence},{name:"",value:(100-this.reports[0].confidence).toFixed(2)}],label:{show:!1}}};this.myChart=S["a"](document.getElementById("mychart")),1===this.reports.length?this.myChart.setOption(t):this.myChart.setOption(e)},openFullScreen(){let e=x.a.service();setTimeout(()=>{this.$nextTick(()=>{e.close()})},2e3)}}},F=k,U=(a("b659"),Object(p["a"])(F,y,b,!1,null,"ffc841a0",null)),P=U.exports;i["default"].use(m["a"]);const O=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:P},{path:"/about",name:"About",component:()=>a.e("chunk-039962d6").then(a.bind(null,"f820"))},{path:"/contact",name:"Contact",component:()=>a.e("chunk-2d210c47").then(a.bind(null,"b8fa"))}],L=new m["a"]({routes:O});var M=L,j=(a("10cb"),a("f3ad")),E=a.n(j),T=(a("a7cc"),a("df33")),A=a.n(T),D=(a("b5d8"),a("f494")),z=a.n(D),N=(a("6b30"),a("c284")),B=a.n(N),I=(a("f225"),a("89a9")),R=a.n(I),$=(a("9c49"),a("6640")),H=a.n($),q=(a("d2ac"),a("95b0")),J=a.n(q),K=(a("ce18"),a("f58e")),W=a.n(K),G=(a("8bd8"),a("4cb2")),Q=a.n(G),V=(a("4ca3"),a("443e")),X=a.n(V),Y=(a("de31"),a("c69e")),Z=a.n(Y),ee=(a("a673"),a("7b31")),te=a.n(ee),ae=(a("adec"),a("3d2d")),ie=a.n(ae),le=(a("1951"),a("eedf")),se=a.n(le);i["default"].use(se.a),i["default"].use(ie.a),i["default"].use(te.a),i["default"].use(Z.a),i["default"].use(X.a),i["default"].use(Q.a),i["default"].use(W.a),i["default"].use(J.a),i["default"].use(H.a),i["default"].use(R.a),i["default"].use(B.a),i["default"].use(z.a),i["default"].use(A.a),i["default"].use(E.a),i["default"].config.productionTip=!1,new i["default"]({router:M,render:e=>e(v)}).$mount("#app")},b659:function(e,t,a){"use strict";a("562d")},bb62:function(e,t,a){"use strict";a("f9b4")},d991:function(e,t,a){e.exports=a.p+"static/img/close.e885be84.png"},f9b4:function(e,t,a){}});
//# sourceMappingURL=app.96a99563.js.map