(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dff55dd"],{"0498":function(t,a,n){"use strict";var e=n("9841"),s=n.n(e);s.a},"079c":function(t,a,n){"use strict";var e=n("8cd8"),s=n.n(e);s.a},"10ec":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{},[n("NavbarAdmin"),t.loading?n("Loader"):t._e(),t.contact?n("div",{staticClass:"contact-container container mt-4 mb-4 position-relative"},[n("div",{staticClass:"contact-title-container"},[n("h1",{staticClass:"contact-title contact-subject"},[t._v(t._s(t.contact.subject))])]),n("div",{staticClass:"contact-body-container"},[n("div",{staticClass:"contact-info-container"},[n("div",{},[n("span",{staticClass:"font-weight-bold contact-title"},[t._v("From:")]),t._v(" "+t._s(t.contact.name)+" ")]),n("div",{},[n("span",{staticClass:"font-weight-bold contact-title"},[t._v("Email:")]),t._v(" "+t._s(t.contact.email)+" ")])]),n("p",{staticClass:"mt-3"},[n("span",{staticClass:"font-weight-bold contact-title"},[t._v("Message:")]),n("br"),t._v(" "+t._s(t.contact.message)+" ")])]),t._m(0)]):t._e()],1)},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("a",{attrs:{href:"https://mail.google.com",target:"_blank"}},[n("button",{staticClass:"btn btn-success btn-answer mt-2"},[t._v("Answer")])])}],c=n("ae8e"),i=n("3e67"),o={components:{Loader:c["a"],NavbarAdmin:i["a"]},created:function(){this.$store.dispatch("fetchContactById",this.$route.params.id)},computed:{contact:function(){return this.$store.state.contacts.data},loading:function(){return this.$store.state.contacts.loading}}},r=o,l=(n("f10c"),n("2877")),v=Object(l["a"])(r,e,s,!1,null,"05208d4a",null);a["default"]=v.exports},"3e67":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"custom-container"},[n("div",{staticClass:"container"},[n("b-navbar",{attrs:{toggleable:"lg",type:"light"}},[n("div",{staticClass:"brand-container"},[n("b-navbar-brand",{staticClass:"nav-brand",attrs:{href:"/"}},[t._v(" Movies "),n("b-icon",{attrs:{icon:"film","aria-hidden":"true"}})],1)],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"/admin/movies"}},[t._v("Movies")])],1),n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"/admin/cinemas"}},[t._v("Cinemas")])],1),n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"/admin/promotions"}},[t._v("Promotions")])],1),n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"/admin/contacts"}},[t._v("Contacts")])],1)],1)],1)],1)])},s=[],c={methods:{closeMenu:function(){event.target.parentElement.classList.remove("show")}}},i=c,o=(n("079c"),n("2877")),r=Object(o["a"])(i,e,s,!1,null,"455d959e",null);a["a"]=r.exports},"8cd8":function(t,a,n){},9841:function(t,a,n){},ae8e:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"custom-spinner"},[n("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner",type:"grow"}})],1)},s=[],c={},i=c,o=(n("0498"),n("2877")),r=Object(o["a"])(i,e,s,!1,null,null,null);a["a"]=r.exports},b45e:function(t,a,n){},f10c:function(t,a,n){"use strict";var e=n("b45e"),s=n.n(e);s.a}}]);
//# sourceMappingURL=chunk-2dff55dd.363a282a.js.map