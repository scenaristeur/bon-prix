(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e121fa4"],{1276:function(e,n,t){"use strict";var r=t("d784"),i=t("44e7"),l=t("825a"),u=t("1d80"),a=t("4840"),c=t("8aa5"),o=t("50c4"),s=t("14c3"),f=t("9263"),d=t("d039"),p=[].push,g=Math.min,h=4294967295,x=!d((function(){return!RegExp(h,"y")}));r("split",2,(function(e,n,t){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var r=String(u(this)),l=void 0===t?h:t>>>0;if(0===l)return[];if(void 0===e)return[r];if(!i(e))return n.call(r,e,l);var a,c,o,s=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,x=new RegExp(e.source,d+"g");while(a=f.call(x,r)){if(c=x.lastIndex,c>g&&(s.push(r.slice(g,a.index)),a.length>1&&a.index<r.length&&p.apply(s,a.slice(1)),o=a[0].length,g=c,s.length>=l))break;x.lastIndex===a.index&&x.lastIndex++}return g===r.length?!o&&x.test("")||s.push(""):s.push(r.slice(g)),s.length>l?s.slice(0,l):s}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,t){var i=u(this),l=void 0==n?void 0:n[e];return void 0!==l?l.call(n,i,t):r.call(String(i),n,t)},function(e,i){var u=t(r,e,this,i,r!==n);if(u.done)return u.value;var f=l(e),d=String(this),p=a(f,RegExp),v=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(x?"y":"g"),E=new p(x?f:"^(?:"+f.source+")",b),I=void 0===i?h:i>>>0;if(0===I)return[];if(0===d.length)return null===s(E,d)?[d]:[];var R=0,w=0,y=[];while(w<d.length){E.lastIndex=x?w:0;var m,_=s(E,x?d:d.slice(w));if(null===_||(m=g(o(E.lastIndex+(x?0:w)),d.length))===R)w=c(d,w,v);else{if(y.push(d.slice(R,w)),y.length===I)return y;for(var S=1;S<=_.length-1;S++)if(y.push(_[S]),y.length===I)return y;w=R=m}}return y.push(d.slice(R)),y}]}),!x)},"14c3":function(e,n,t){var r=t("c6b6"),i=t("9263");e.exports=function(e,n){var t=e.exec;if("function"===typeof t){var l=t.call(e,n);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,n)}},"44e7":function(e,n,t){var r=t("861d"),i=t("c6b6"),l=t("b622"),u=l("match");e.exports=function(e){var n;return r(e)&&(void 0!==(n=e[u])?!!n:"RegExp"==i(e))}},"5d81":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return null!=e.webId?t("div",[t("i",[t("small",[e._v("Logged as : "),t("a",{attrs:{href:e.webId,target:"_blank"}},[e._v(e._s(e.user))])])])]):e._e()},i=[],l=t("1da1"),u=(t("96cf"),t("fb6a"),t("1276"),t("ac1f"),t("00e8")),a=t.n(u),c={name:"SolidSession",data:function(){return{webId:null,user:null}},created:function(){var e=this;a.a.trackSession(function(){var n=Object(l["a"])(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t?(e.webId=t.webId,e.user=t.webId.split("/").slice(2,3)[0]):(e.webId=null,e.user=null),e.$store.dispatch("solid/setWebId",e.webId);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},o=c,s=t("2877"),f=Object(s["a"])(o,r,i,!1,null,null,null);n["default"]=f.exports},"8aa5":function(e,n,t){"use strict";var r=t("6547").charAt;e.exports=function(e,n,t){return n+(t?r(e,n).length:1)}},9263:function(e,n,t){"use strict";var r=t("ad6d"),i=t("9f7f"),l=RegExp.prototype.exec,u=String.prototype.replace,a=l,c=function(){var e=/a/,n=/b*/g;return l.call(e,"a"),l.call(n,"a"),0!==e.lastIndex||0!==n.lastIndex}(),o=i.UNSUPPORTED_Y||i.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=c||s||o;f&&(a=function(e){var n,t,i,a,f=this,d=o&&f.sticky,p=r.call(f),g=f.source,h=0,x=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),x=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(g="(?: "+g+")",x=" "+x,h++),t=new RegExp("^(?:"+g+")",p)),s&&(t=new RegExp("^"+g+"$(?!\\s)",p)),c&&(n=f.lastIndex),i=l.call(d?t:f,x),d?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:c&&i&&(f.lastIndex=f.global?i.index+i[0].length:n),s&&i&&i.length>1&&u.call(i[0],t,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),e.exports=a},"9f7f":function(e,n,t){"use strict";var r=t("d039");function i(e,n){return RegExp(e,n)}n.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),n.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,n,t){"use strict";var r=t("23e7"),i=t("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,n,t){"use strict";var r=t("825a");e.exports=function(){var e=r(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n}},d784:function(e,n,t){"use strict";t("ac1f");var r=t("6eeb"),i=t("d039"),l=t("b622"),u=t("9263"),a=t("9112"),c=l("species"),o=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=l("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));e.exports=function(e,n,t,f){var g=l(e),h=!i((function(){var n={};return n[g]=function(){return 7},7!=""[e](n)})),x=h&&!i((function(){var n=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[c]=function(){return t},t.flags="",t[g]=/./[g]),t.exec=function(){return n=!0,null},t[g](""),!n}));if(!h||!x||"replace"===e&&(!o||!s||d)||"split"===e&&!p){var v=/./[g],b=t(g,""[e],(function(e,n,t,r,i){return n.exec===u?h&&!i?{done:!0,value:v.call(n,t,r)}:{done:!0,value:e.call(t,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),E=b[0],I=b[1];r(String.prototype,e,E),r(RegExp.prototype,g,2==n?function(e,n){return I.call(e,this,n)}:function(e){return I.call(e,this)})}f&&a(RegExp.prototype[g],"sham",!0)}}}]);
//# sourceMappingURL=chunk-7e121fa4.ca039d92.js.map