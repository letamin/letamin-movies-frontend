(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28b6cc18"],{"0498":function(t,e,n){"use strict";var r=n("9841"),a=n.n(r);a.a},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),i=n("2d00"),c=a("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"242a":function(t,e,n){},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),i=n("d039"),c=n("ad6d"),s="toString",o=RegExp.prototype,u=o[s],f=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=s;(f||l)&&r(RegExp.prototype,s,(function(){var t=a(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in o)?c.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),c=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==a(t))}},"466d":function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),c=n("1d80"),s=n("8aa5"),o=n("14c3");r("match",1,(function(t,e,n){return[function(e){var n=c(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var c=a(t),u=String(this);if(!c.global)return o(c,u);var f=c.unicode;c.lastIndex=0;var l,d=[],v=0;while(null!==(l=o(c,u))){var p=String(l[0]);d[v]=p,""===p&&(c.lastIndex=s(u,i(c.lastIndex),f)),v++}return 0===v?null:d}]}))},"479f":function(t,e,n){"use strict";var r=n("242a"),a=n.n(r);a.a},"4d63":function(t,e,n){var r=n("83ab"),a=n("da84"),i=n("94ca"),c=n("7156"),s=n("9bf2").f,o=n("241c").f,u=n("44e7"),f=n("ad6d"),l=n("9f7f"),d=n("6eeb"),v=n("d039"),p=n("69f3").set,h=n("2626"),b=n("b622"),m=b("match"),g=a.RegExp,x=g.prototype,y=/a/g,_=/a/g,w=new g(y)!==y,C=l.UNSUPPORTED_Y,E=r&&i("RegExp",!w||C||v((function(){return _[m]=!1,g(y)!=y||g(_)==_||"/a/i"!=g(y,"i")})));if(E){var S=function(t,e){var n,r=this instanceof S,a=u(t),i=void 0===e;if(!r&&a&&t.constructor===S&&i)return t;w?a&&!i&&(t=t.source):t instanceof S&&(i&&(e=f.call(t)),t=t.source),C&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var s=c(w?new g(t,e):g(t,e),r?this:x,S);return C&&n&&p(s,{sticky:n}),s},R=function(t){t in S||s(S,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},A=o(g),k=0;while(A.length>k)R(A[k++]);x.constructor=S,S.prototype=x,d(a,"RegExp",S)}h("RegExp")},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),c=n("ae40"),s=i("filter"),o=c("filter");r({target:"Array",proto:!0,forced:!s||!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},6278:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.loading?n("Loader"):t._e(),n("div",{staticClass:"mt-4 d-flex justify-content-center"},[n("b-form-input",{staticClass:"mr-sm-2 w-25 search-box",attrs:{size:"sm",placeholder:"Search"},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),t._m(0)],1),n("h1",{staticClass:"text-center mt-4 title"},[t._v("Cinemas")]),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-hover mt-4"},[t._m(1),n("tbody",t._l(t.filteredCinema,(function(e){return n("tr",{key:e._id},[n("td",[n("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))])]),n("td",[t._v(t._s(e.province))]),n("td",[n("router-link",{staticClass:"btn btn-success",attrs:{to:"/admin/cinemas/edit/"+e._id}},[t._v("Edit")]),n("router-link",{staticClass:"btn btn-danger ml-2 btn-delete",attrs:{to:"/admin/cinemas/delete/"+e._id}},[t._v("Delete")])],1)])})),0)])])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"/admin/cinemas/add"}},[n("button",{staticClass:"btn btn-success btn-add"},[t._v("Add")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Name")]),n("th",{attrs:{scope:"col"}},[t._v("Province")]),n("th",{attrs:{scope:"col"}})])])}],i=(n("4de4"),n("b0c0"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("ae8e")),c={components:{Loader:i["a"]},data:function(){return{searchTerm:""}},created:function(){this.$store.dispatch("fetchListCinemas")},computed:{loading:function(){return this.$store.state.cinemas.loading},cinemas:function(){return this.$store.state.cinemas.data},filteredCinema:function(){if(this.searchTerm){var t=new RegExp(this.searchTerm,"gi");return this.cinemas.filter((function(e){return(e.name+e.address+e.searchTerm).match(t)}))}return this.cinemas}}},s=c,o=(n("479f"),n("2877")),u=Object(o["a"])(s,r,a,!1,null,"b36d9aa6",null);e["default"]=u.exports},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),i=n("b622"),c=i("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,c;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(c=i.prototype)&&c!==n.prototype&&a(t,c),t}},9841:function(t,e,n){},ae40:function(t,e,n){var r=n("83ab"),a=n("d039"),i=n("5135"),c=Object.defineProperty,s={},o=function(t){throw t};t.exports=function(t,e){if(i(s,t))return s[t];e||(e={});var n=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:o,l=i(e,1)?e[1]:void 0;return s[t]=!!n&&!a((function(){if(u&&!r)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:o}):t[1]=1,n.call(t,f,l)}))}},ae8e:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-spinner"},[n("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner",type:"grow"}})],1)},a=[],i={},c=i,s=(n("0498"),n("2877")),o=Object(s["a"])(c,r,a,!1,null,null,null);e["a"]=o.exports},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,c=i.toString,s=/^\s*function ([^ (]*)/,o="name";r&&!(o in i)&&a(i,o,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),c=n("50c4"),s=n("65f0"),o=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(v,p,h,b){for(var m,g,x=i(v),y=a(x),_=r(p,h,3),w=c(y.length),C=0,E=b||s,S=e?E(v,w):n?E(v,0):void 0;w>C;C++)if((d||C in y)&&(m=y[C],g=_(m,C,x),t))if(e)S[C]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return C;case 2:o.call(S,m)}else if(f)return!1;return l?-1:u||f?f:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-28b6cc18.be24de00.js.map