(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226c5a"],{e9a1:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null==t.webId?n("b-dropdown",{attrs:{variant:"success",text:"Login"}},t._l(t.issuers,(function(e){return n("b-dropdown-item",{key:e,attrs:{issuer:e},on:{click:t.login}},[t._v(t._s(e))])})),1):n("b-button",{attrs:{variant:"danger"},on:{click:t.logout}},[t._v("Logout")])],1)},o=[],s=n("1da1"),i=(n("96cf"),{name:"SolidLoginButton",data:function(){return{issuers:["https://inrupt.net","https://broker.pod.inrupt.com","https://solidcommunity.net"]}},computed:{webId:function(){return this.$store.state.solid.webId}},methods:{login:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log(t.target.getAttribute("issuer")),console.log(t,t.target,t.target.value),e.$store.dispatch("solid/login",t.target.getAttribute("issuer"));case 3:case"end":return n.stop()}}),n)})))()},logout:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("solid/logout");case 1:case"end":return e.stop()}}),e)})))()}}}),u=i,a=n("2877"),c=Object(a["a"])(u,r,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d226c5a.fe732182.js.map