(function(e){function t(t){for(var o,i,u=t[0],a=t[1],s=t[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"63775c52","chunk-2c2e613c":"a6241084","chunk-2d0d36fe":"a57b2f99","chunk-2d226c5a":"b0ee61b6"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,a=document.createElement("script");a.charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.src=i(e);var s=new Error;c=function(t){a.onerror=a.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:a})}),12e4);a.onerror=a.onload=c,document.head.appendChild(a)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/bon-prix/",u.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var f=s;c.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t,n){e.exports=n("56d7")},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},c=[],i=(n("034f"),n("2877")),u={},a=Object(i["a"])(u,r,c,!1,null,null,null),s=a.exports,l=n("9483");Object(l["a"])("".concat("/bon-prix/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("SolidLoginButton"),n("SolidSession"),n("HelloWorld",{attrs:{msg:"Welcome to Vue2/Solid Boilerplate based on Solid Specifications"}})],1)},p=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Solid Vue2 Boilerplate")])])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{attrs:{href:"https://github.com/scenaristeur/bon-prix",target:"_blank"}},[e._v(" Source code, tuto, issues")])])}],m={name:"HelloWorld",props:{msg:String}},h=m,v=(n("b5ad"),Object(i["a"])(h,b,g,!1,null,"2fb823da",null)),w=v.exports,j={name:"Home",components:{HelloWorld:w,SolidLoginButton:function(){return n.e("chunk-2d226c5a").then(n.bind(null,"e9a1"))},SolidSession:function(){return n.e("chunk-2d0d36fe").then(n.bind(null,"5d81"))}}},O=j,k=Object(i["a"])(O,d,p,!1,null,null,null),y=k.exports;o["default"].use(f["a"]);var S=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],_=new f["a"]({mode:"history",base:"/bon-prix/",routes:S}),x=_,P=n("2f62"),E=n("1da1"),I=(n("96cf"),n("8522")),W=n("dbc7"),A=n("d11f"),H=n("93ef"),R=function(){return{webId:null,storage:null}},B={},C={login:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e),Object(I["getDefaultSession"])().info.isLoggedIn){t.next=4;break}return t.next=4,Object(I["login"])({oidcIssuer:"https://inrupt.net",redirectUrl:window.location.href,restorePreviousSession:!0});case 4:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,Object(I["getDefaultSession"])().logout();case 3:e.commit("setWebId",null);case 4:case"end":return t.stop()}}),t)})))()},webId:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var o,r,c,i,u,a,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.commit("setWebId",t),null==t){n.next=19;break}return n.next=4,Object(H["a"])(t,{fetch:I["fetch"]});case 4:o=n.sent,console.log(o),r=Object(H["c"])(o,t),c=Object(H["b"])(r,A["b"].familyName),i=Object(H["b"])(r,A["a"].firstName),u=Object(H["b"])(r,A["c"].role),console.log(c,i,u),a=Object(H["b"])(r,A["c"].fn),s=Object(H["e"])(r,A["a"].knows),console.log(a,s),l=Object(H["d"])(r,W["a"].storage),console.log("storage",l),e.commit("setStorage",l),n.next=20;break;case 19:e.commit("setStorage",null);case 20:case"end":return n.stop()}}),n)})))()}},L={setWebId:function(e,t){console.log(t),e.webId=t},setStorage:function(e,t){console.log(t),e.storage=t}},N={namespaced:!0,state:R,getters:B,actions:C,mutations:L};o["default"].use(P["a"]);var T=new P["a"].Store({state:{},mutations:{},actions:{},modules:{solid:N}}),$=n("5f5b"),M=n("b1e0");n("f9e3"),n("2dd8");o["default"].use($["a"]),o["default"].use(M["a"]),o["default"].config.productionTip=!1,new o["default"]({router:x,store:T,render:function(e){return e(s)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){},b5ad:function(e,t,n){"use strict";n("c8dd")},c8dd:function(e,t,n){}});
//# sourceMappingURL=app.20696d9b.js.map