(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224d23"],{e288:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-list-group",[e._v(" INBOX ( "+e._s(e.messages.length)+" messages ) "),e._l(e.messages,(function(t){return n("b-list-group-item",{key:t.url},[e._v(" "+e._s(t.created)+" / "+e._s(t.creator)+" : "),n("b",[e._v(e._s(t.annonce.title))]),e._v(" ::: "+e._s(t.text)+" "),n("b-button",{staticStyle:{"margin-left":"auto"},attrs:{variant:"light"},on:{click:function(n){return e.reply(t)}}},[n("b-icon",{attrs:{icon:"pen"}})],1),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.message-delete",modifiers:{"message-delete":!0}}],staticStyle:{"margin-left":"auto"},attrs:{variant:"danger"},on:{click:function(n){return e.showDeleteConfirm(t)}}},[n("b-icon",{attrs:{icon:"trash"}})],1)],1)})),n("b-modal",{attrs:{id:"message-delete",centered:"",title:"Delete"},on:{ok:e.onDelete}},[n("div",{staticClass:"p-3",domProps:{innerHTML:e._s(e.deleteMessage)}})])],2)},a=[],s=n("1da1"),o=(n("96cf"),n("00e8")),i=n.n(o),c=n("7fed"),u=n.n(c),l=new u.a(i.a),d=window.solid,m={name:"AnnonceInbox",data:function(){return{messages:[],deleteMessage:""}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.readInbox();case 1:case"end":return t.stop()}}),t)})))()},methods:{readInbox:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,a,s,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.webId){t.next=24;break}return t.next=3,d.data.from(e.webId)[e.webId]["http://www.w3.org/ns/ldp#inbox"];case 3:return n=t.sent,r="".concat(n)+"annonces/",t.next=7,l.readFolder(r);case 7:a=t.sent,console.log(a),s=a.files.sort((function(e,t){return new Date(t.created).getTime()-new Date(e.created).getTime()})),e.messages=[];case 11:if(!(s.length>0)){t.next=24;break}return o=s.shift(),t.t0=JSON,t.next=16,l.readFile(o.url);case 16:return t.t1=t.sent,t.next=19,t.t0.parse.call(t.t0,t.t1);case 19:i=t.sent,i.url=o.url,e.messages.push(i),t.next=11;break;case 24:case"end":return t.stop()}}),t)})))()},onDelete:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("delete"),t.next=3,l.deleteFile(e.urlToDelete);case 3:e.readInbox();case 4:case"end":return t.stop()}}),t)})))()},showDeleteConfirm:function(e){this.deleteMessage="Do you want to delete <b>"+e.url+"</b>",this.urlToDelete=e.url}},watch:{webId:function(){this.readInbox()}},computed:{webId:function(){return this.$store.state.solid.webId}}},b=m,w=n("2877"),f=Object(w["a"])(b,r,a,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d224d23.87c58651.js.map