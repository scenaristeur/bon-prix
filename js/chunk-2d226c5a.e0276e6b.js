(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226c5a"],{e9a1:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[null==e.webId?n("b-button",{attrs:{variant:"success",size:"sm"},on:{click:e.login}},[e._v("Login")]):n("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:e.logout}},[e._v("Logout")])],1)},o=[],s=n("1da1"),a=(n("96cf"),n("00e8")),u=n.n(a),i={name:"SolidLoginButton",data:function(){return{}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(e){this.$store.dispatch("solid/setWebId",e)}}},methods:{login:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.currentSession();case 2:if(n=t.sent,r="https://solidcommunity.net/common/popup.html",n){t.next=8;break}return t.next=7,u.a.popupLogin({popupUri:r});case 7:n=t.sent;case 8:e.webId=n.webId;case 9:case"end":return t.stop()}}),t)})))()},logout:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.logout();case 2:e.webId=null;case 3:case"end":return t.stop()}}),t)})))()}}},c=i,l=n("2877"),p=Object(l["a"])(c,r,o,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d226c5a.e0276e6b.js.map