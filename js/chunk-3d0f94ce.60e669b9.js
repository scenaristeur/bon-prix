(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d0f94ce"],{"159b":function(e,t,r){var n=r("da84"),a=r("fdbc"),o=r("17c2"),c=r("9112");for(var i in a){var s=n[i],u=s&&s.prototype;if(u&&u.forEach!==o)try{c(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(e,t,r){"use strict";var n=r("b727").forEach,a=r("a640"),o=a("forEach");e.exports=o?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"4df4":function(e,t,r){"use strict";var n=r("0366"),a=r("7b0b"),o=r("9bdd"),c=r("e95a"),i=r("50c4"),s=r("8418"),u=r("35a1");e.exports=function(e){var t,r,l,f,d,h,p=a(e),v="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,g=void 0!==m,w=u(p),y=0;if(g&&(m=n(m,b>2?arguments[2]:void 0,2)),void 0==w||v==Array&&c(w))for(t=i(p.length),r=new v(t);t>y;y++)h=g?m(p[y],y):p[y],s(r,y,h);else for(f=w.call(p),d=f.next,r=new v;!(l=d.call(f)).done;y++)h=g?o(f,m,[l.value,y],!0):l.value,s(r,y,h);return r.length=y,r}},"4fad":function(e,t,r){var n=r("23e7"),a=r("6f53").entries;n({target:"Object",stat:!0},{entries:function(e){return a(e)}})},"6f53":function(e,t,r){var n=r("83ab"),a=r("df75"),o=r("fc6a"),c=r("d1e7").f,i=function(e){return function(t){var r,i=o(t),s=a(i),u=s.length,l=0,f=[];while(u>l)r=s[l++],n&&!c.call(i,r)||f.push(e?[r,i[r]]:i[r]);return f}};e.exports={entries:i(!0),values:i(!1)}},"77db":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-list-group",e._l(e.errors,(function(t,n){return r("b-list-group-item",{key:n,attrs:{variant:"danger"}},[e._v(" "+e._s(t)+" ")])})),1),e.errors.length>0?r("b-button",{on:{click:e.setAcl}},[e._v("Set Authorization")]):e._e()],1)},a=[];function o(e){if(Array.isArray(e))return e}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function c(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done);n=!0)if(r.push(c.value),t&&r.length===t)break}catch(s){a=!0,o=s}finally{try{n||null==i["return"]||i["return"]()}finally{if(a)throw o}}return r}}r("fb6a"),r("b0c0"),r("a630");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){return o(e)||c(e,t)||s(e,t)||u()}var f=r("1da1"),d=(r("4fad"),r("159b"),r("1276"),r("ac1f"),r("96cf"),r("00e8")),h=r.n(d),p=r("7fed"),v=r.n(p),b=new v.a(h.a),m={name:"AclCheck",props:["authorizations","webId"],data:function(){return{acl:{},errors:[]}},created:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.init();case 1:case"end":return t.stop()}}),t)})))()},methods:{init:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,c,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.webId||null==e.authorizations){t.next=17;break}r=0,n=Object.entries(JSON.parse(e.authorizations));case 2:if(!(r<n.length)){t.next=17;break}return a=l(n[r],2),o=a[0],c=a[1],e.path=o,t.next=7,e.checkRemoteAcl(o);case 7:if(i=t.sent,null==i){t.next=14;break}return s={},s[o]=c,s.url=o,t.next=14,e.comparaison(s,i);case 14:r++,t.next=2;break;case 17:case"end":return t.stop()}}),t)})))()},comparaison:function(e,t){var r=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.warn("Todo : reverse comparaison "),a=e.url,n.next=4,r.compareWhat(e[a].accessTo,t[a].accessTo,"accessTo");case 4:return n.next=6,r.compareWhat(e[a].default,t[a].default,"default");case 6:case"end":return n.stop()}}),n)})))()},compareWhat:function(e,t,r){var n=this;return Object(f["a"])(regeneratorRuntime.mark((function a(){var o,c,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(o=["Read","Write","Append","Control"],c=function(){var e=l(s[i],2),a=e[0],c=e[1];!Object.prototype.hasOwnProperty.call(t,a)&&n.errors.push("Effective Acl does not have rule on "+r+" for "+a),c.type!=t[a].type&&n.errors.push("Effective Acl does not have the  good type : "+t[a].type+" instead of "+c.type),o.forEach((function(e){c.mode[e]!=t[a].mode[e]&&n.errors.push(e+" Mode should be : "+c.mode[e]+" instead of "+t[a].mode[e])}))},i=0,s=Object.entries(e);i<s.length;i++)c();case 3:case"end":return a.stop()}}),a)})))()},checkRemoteAcl:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=null,t.acl.status="cheching authorizations",r.next=4,b.aclUrlParser(e);case 4:return t.acl.aclObject=r.sent,Array.isArray(t.acl.aclObject)?(a={},void 0==a[e]&&(a[e]={accessTo:{},default:{}}),a.array=[],o={what:e,accesTo:[],default:[]},t.acl.aclObject.forEach((function(t){for(var r=0,n=Object.entries(t);r<n.length;r++){var c=l(n[r],2),i=c[0],s=c[1],u=i.split("&"),f={type:u[0],value:u[1]},d=f,h=s.mode,p={who:d,how:h};1==s.access.accessTo&&(a[e].accessTo[u[1]]={type:u[0],mode:s.mode},o.accesTo.push(p)),1==s.access.default&&(a[e].default[u[1]]={type:u[0],mode:s.mode},o.default.push(p)),a.array.push(o)}})),n=a):t.errors.push("Can not read ACL, it is not an array"),null==n&&t.errors.push("I cannot get remote ACL for"+e),r.abrupt("return",n);case 8:case"end":return r.stop()}}),r)})))()},setAcl:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,c,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.errors=[],t.prev=1,e.acl.status="setting authorizations",t.next=5,b.acl.addUserMode({},[{agent:e.webId}],["Read","Write","Control"],["accessTo","default"]);case 5:return r=t.sent,t.next=8,b.acl.addUserMode({},[{agentClass:"AuthenticatedAgent"}],["Append"],["default"]);case 8:return n=t.sent,t.next=11,b.acl.addUserMode({},[{agentClass:"AuthenticatedAgent"}],["Append","Read"],["accessTo"]);case 11:return a=t.sent,o=[r,n,a],t.next=15,b.acl.createContent(e.path,o);case 15:return c=t.sent,t.next=18,b.getItemLinks(e.path,{links:"include_possible"});case 18:return i=t.sent,s=i.acl,t.next=22,b.putFile(s,c,"text/turtle");case 22:return t.next=24,e.init();case 24:t.next=30;break;case 26:t.prev=26,t.t0=t["catch"](1),e.errors.push("I can not write ACL :"+t.t0),alert(t.t0);case 30:case"end":return t.stop()}}),t,null,[[1,26]])})))()}},watch:{webId:function(){this.init()},authorizations:function(){this.init()}}},g=m,w=r("2877"),y=Object(w["a"])(g,n,a,!1,null,null,null);t["default"]=y.exports},"9bdd":function(e,t,r){var n=r("825a"),a=r("2a62");e.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(c){throw a(e),c}}},a630:function(e,t,r){var n=r("23e7"),a=r("4df4"),o=r("1c7e"),c=!o((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:c},{from:a})},b0c0:function(e,t,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,c=o.toString,i=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&a(o,s,{configurable:!0,get:function(){try{return c.call(this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-3d0f94ce.60e669b9.js.map