(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["annonceEdit"],{"1e3f":function(e,n,t){},"3fbb":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-container",[null!=e.webId?t("div",[t("h3",[e._v("Add an Annonce")]),t("b-form",[t("b-form-group",{attrs:{id:"input-group-title",label:"Title:","label-for":"input-title",description:"Your annonce / 'small ad' need a explicit title."}},[t("b-form-input",{attrs:{id:"input-title",state:e.getState(),autofocus:"",placeholder:"Enter annonce title",required:""},model:{value:e.annonce.title,callback:function(n){e.$set(e.annonce,"title",n)},expression:"annonce.title"}})],1),t("b-form-group",{attrs:{id:"input-group-category",label:"Categories:","label-for":"input-category",description:"Please add 1 to 3 categories to specify where to find your annonce."}},[t("b-form-input",{attrs:{id:"input-category",placeholder:"3 categories max, comma separated"},model:{value:e.annonce.category,callback:function(n){e.$set(e.annonce,"category",n)},expression:"annonce.category"}})],1),t("b-form-group",{attrs:{id:"input-group-category",label:"Description:","label-for":"input-description",description:"Please give a clear description."}},[t("b-textarea",{attrs:{id:"input-description",placeholder:"Description",rows:"7"},model:{value:e.annonce.description,callback:function(n){e.$set(e.annonce,"description",n)},expression:"annonce.description"}})],1),t("b-form",{attrs:{inline:""}},[t("label",{staticClass:"mr-sm-2",attrs:{for:"input-price"}},[e._v("Price:")]),t("b-input",{staticClass:"mr-sm-2",attrs:{id:"input-price",placeholder:"price"},model:{value:e.annonce.price,callback:function(n){e.$set(e.annonce,"price",n)},expression:"annonce.price"}}),t("label",{staticClass:"mr-sm-2",attrs:{for:"input-currency"}},[e._v("Currency:")]),t("b-input",{staticClass:"mr-sm-2",attrs:{id:"input-currency",placeholder:"currency (€,$...)"},model:{value:e.annonce.currency,callback:function(n){e.$set(e.annonce,"currency",n)},expression:"annonce.currency"}})],1),t("b-form-group",{attrs:{id:"input-group-images",label:"Images:","label-for":"input-images",description:"Add some images for a better description & visibility"}},[t("Upload",{attrs:{id:"input-images",images:e.annonce.images},on:{imagesUploaded:e.imagesUploaded}})],1),t("p",[e._v('If you add images, don\'t forget to hit the "send" button before hitting the "save" one.')]),t("div",{staticClass:"d-flex"},[t("b-button",{staticClass:"ml-auto",attrs:{variant:"info"},on:{click:function(n){return e.add()}}},[e._v("save")]),t("b-button",{staticClass:"ml-2",attrs:{variant:"secondary"},on:{click:function(n){return e.goBack()}}},[e._v("back")])],1)],1),e._v(" --------------------------- test dropzone not activated yet , don't use resized "),t("vueDropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:e.dropzoneOptions,duplicateCheck:!0},on:{"vdropzone-file-added":e.vfileAdded,"vdropzone-success":e.vsuccess,"vdropzone-error":e.verror,"vdropzone-removed-file":e.vremoved,"vdropzone-sending":e.vsending}})],1):t("div",[e._v(" You must login to manage your annonces. ")])])},i=[],a=(t("d3b7"),t("3ca3"),t("ddb0"),t("7db0"),t("1276"),t("ac1f"),t("5cc6"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("3c5d"),t("2954"),t("649e"),t("219c"),t("170b"),t("b39a"),t("72f7"),t("b0c0"),t("1e3f"),t("d4ec")),r=(t("a4d3"),t("e01a"),t("ec26")),s=function e(){Object(a["a"])(this,e),this.id=Object(r["a"])(),this.title="",this.category="",this.description="",this.price=null,this.currency=null,console.log("new annonce",this)},c={name:"AnnonceEdit",components:{Upload:function(){return t.e("chunk-af80c1a8").then(t.bind(null,"93b7"))},vueDropzone:function(){return t.e("chunk-2d0e51ff").then(t.t.bind(null,"92c3",7))}},data:function(){return{annonce:null,files:null,dropzoneOptions:{url:"https://httpbin.org/post",thumbnailWidth:200,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"},addRemoveLinks:!0,resizeWidth:100}}},created:function(){var e=this;console.log(this.$route.params.id),this.annonce=void 0!=this.$route.params.id?this.annoncesMy.find((function(n){return n.id===e.$route.params.id})):new s,void 0==this.annonce.images&&(this.annonce.images=[])},methods:{vsuccess:function(e){console.log(e)},verror:function(e){console.log(e)},vremoved:function(e){console.log(e)},vsending:function(e){console.log(e)},vfileAdded:function(e){var n=this.$refs.myVueDropzone,t=800,o=600,i=new FileReader;i.addEventListener("load",(function(i){var a=new Image;a.src=i.target.result,a.addEventListener("load",(function(i){var r=i.target.width,s=i.target.height;if(r<=t&&s<=o)n.enqueueFile(e);else{r>s?r>t&&(s*=t/r,r=t):s>o&&(r*=o/s,s=o);var c=document.createElement("canvas");c.width=r,c.height=s;var d=c.getContext("2d");d.drawImage(a,0,0,r,s);var l=this.base64ToFile(c.toDataURL(),e),u=n.files.indexOf(e);n.files[u]=l,n.enqueueFile(l)}}))})),i.readAsDataURL(e)},add:function(){this.annonce.title.length<1?alert("Title must not be empty !"):(console.log(this.annonce),this.$store.dispatch("annonce/update",this.annonce),this.$router.go(-1))},goBack:function(){this.$router.go(-1)},getState:function(){return this.annonce.title.length>0},imagesUploaded:function(e){console.log(e),this.annonce.images=e},base64ToFile:function(e,n){var t,o;t=-1!==e.split(",")[0].indexOf("base64")?atob(e.split(",")[1]):decodeURI(e.split(",")[1]),o=e.split(",")[0].split(":")[1].split(";")[0];for(var i=new Array,a=0;a<t.length;a++)i[a]=t.charCodeAt(a);var r=new File([new Uint8Array(i)],n.name,{type:o}),s=["upload","status","previewElement","previewTemplate","accepted"];return s.forEach((function(e){r[e]=n[e]})),r}},computed:{annoncesMy:function(){return this.$store.state.annonce.annoncesMy},webId:function(){return this.$store.state.solid.webId}}},d=c,l=t("2877"),u=Object(l["a"])(d,o,i,!1,null,null,null);n["default"]=u.exports},"7db0":function(e,n,t){"use strict";var o=t("23e7"),i=t("b727").find,a=t("44d2"),r="find",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),o({target:"Array",proto:!0,forced:s},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(r)},ec26:function(e,n,t){"use strict";var o,i=new Uint8Array(16);function a(){if(!o&&(o="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(i)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function s(e){return"string"===typeof e&&r.test(e)}for(var c=s,d=[],l=0;l<256;++l)d.push((l+256).toString(16).substr(1));function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(d[e[n+0]]+d[e[n+1]]+d[e[n+2]]+d[e[n+3]]+"-"+d[e[n+4]]+d[e[n+5]]+"-"+d[e[n+6]]+d[e[n+7]]+"-"+d[e[n+8]]+d[e[n+9]]+"-"+d[e[n+10]]+d[e[n+11]]+d[e[n+12]]+d[e[n+13]]+d[e[n+14]]+d[e[n+15]]).toLowerCase();if(!c(t))throw TypeError("Stringified UUID is invalid");return t}var p=u;function f(e,n,t){e=e||{};var o=e.random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n){t=t||0;for(var i=0;i<16;++i)n[t+i]=o[i];return n}return p(o)}n["a"]=f}}]);
//# sourceMappingURL=annonceEdit.a1b6e5bf.js.map