(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8334f9cc"],{"0498":function(t,e,a){"use strict";var n=a("9841"),s=a.n(n);s.a},"164a":function(t,e,a){},"3e67":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-container"},[a("div",{staticClass:"container"},[a("b-navbar",{attrs:{toggleable:"lg",type:"light"}},[a("div",{staticClass:"brand-container"},[a("b-navbar-brand",{staticClass:"nav-brand",attrs:{href:"/"}},[t._v(" Movies "),a("b-icon",{attrs:{icon:"film","aria-hidden":"true"}})],1)],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/movies"}},[t._v("Movies")])],1),a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/cinemas"}},[t._v("Cinemas")])],1),a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/promotions"}},[t._v("Promotions")])],1),a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/contacts"}},[t._v("Contacts")])],1)],1)],1)],1)])},s=[],i={methods:{closeMenu:function(){event.target.parentElement.classList.remove("show")}}},r=i,o=(a("cf65"),a("2877")),c=Object(o["a"])(r,n,s,!1,null,"644ea2e4",null);e["a"]=c.exports},9841:function(t,e,a){},ae8e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-spinner"},[a("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner",type:"grow"}})],1)},s=[],i={},r=i,o=(a("0498"),a("2877")),c=Object(o["a"])(r,n,s,!1,null,null,null);e["a"]=c.exports},cf65:function(t,e,a){"use strict";var n=a("164a"),s=a.n(n);s.a},d38e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("NavbarAdmin"),t.loading?a("Loader"):t._e(),t.cinema?a("b-modal",{attrs:{id:"modal-deleteCinemaConfirm"},on:{ok:t.onModalOk},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("div",[[t._v("Confirming...")]],2)]},proxy:!0}],null,!1,1220970291)},[a("div",[t._v("Are you sure you want to DELETE this cinema?")])]):t._e(),a("div",{staticClass:"container"},[t.cinema?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover mt-4"},[t._m(0),a("tbody",[a("tr",[a("td",[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.cinema.name))])]),a("td",[t._v(t._s(t.cinema.province))]),a("td",[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-deleteCinemaConfirm",expression:"`modal-deleteCinemaConfirm`"}],staticClass:"btn btn-danger ml-2"},[t._v("Delete")])])])])])]):t._e()])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Province")]),a("th",{attrs:{scope:"col"}})])])}],i=(a("ac1f"),a("5319"),a("ae8e")),r=a("3e67"),o={components:{Loader:i["a"],NavbarAdmin:r["a"]},beforeCreate:function(){this.$store.state.login.token||this.$router.replace("/")},created:function(){this.$store.dispatch("fetchCinemaById",this.$route.params.id)},computed:{loading:function(){return this.$store.state.cinemas.loading},cinema:function(){return this.$store.state.cinemas.data}},methods:{onModalOk:function(){this.$store.dispatch("fetchDeleteCinema",this.$route.params.id)}}},c=o,l=a("2877"),d=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-8334f9cc.75a4144d.js.map