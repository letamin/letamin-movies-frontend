(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-511a9bc5"],{"021a":function(t,n,a){},"0498":function(t,n,a){"use strict";var o=a("9841"),e=a.n(o);e.a},"164a":function(t,n,a){},"3e67":function(t,n,a){"use strict";var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"custom-container"},[a("div",{staticClass:"container"},[a("b-navbar",{attrs:{toggleable:"lg",type:"light"}},[a("div",{staticClass:"brand-container"},[a("b-navbar-brand",{staticClass:"nav-brand",attrs:{href:"/"}},[t._v(" Movies "),a("b-icon",{attrs:{icon:"film","aria-hidden":"true"}})],1)],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/movies"}},[t._v("Movies")])],1),a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/cinemas"}},[t._v("Cinemas")])],1),a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/promotions"}},[t._v("Promotions")])],1),a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/contacts"}},[t._v("Contacts")])],1)],1)],1)],1)])},e=[],i={methods:{closeMenu:function(){event.target.parentElement.classList.remove("show")}}},s=i,r=(a("cf65"),a("2877")),c=Object(r["a"])(s,o,e,!1,null,"644ea2e4",null);n["a"]=c.exports},"4ddd":function(t,n,a){"use strict";var o=a("021a"),e=a.n(o);e.a},9841:function(t,n,a){},ae8e:function(t,n,a){"use strict";var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"custom-spinner"},[a("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner",type:"grow"}})],1)},e=[],i={},s=i,r=(a("0498"),a("2877")),c=Object(r["a"])(s,o,e,!1,null,null,null);n["a"]=c.exports},cf65:function(t,n,a){"use strict";var o=a("164a"),e=a.n(o);e.a},d6cb:function(t,n,a){"use strict";a.r(n);var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{},[a("NavbarAdmin"),t.loading?a("Loader"):t._e(),t.promotion?a("b-modal",{attrs:{id:"modal-promotionDeleteConfirm"},on:{ok:t.onModalOk},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("div",[[t._v("Confirming...")]],2)]},proxy:!0}],null,!1,1220970291)},[a("div",[t._v("Are you sure you want to DELETE this promotion?")])]):t._e(),t.promotion?a("div",{staticClass:"container position-relative"},[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-lg-8 mx-auto d-flex justify-content-between promotion-container"},[a("div",{staticClass:"col-lg-4 promotion-img"},[a("h4",{staticClass:"font-weight-bold"},[t._v(t._s(t.promotion.name))]),a("img",{attrs:{src:t.promotion.image,alt:"Promotion"}})]),a("div",{staticClass:"col-lg-8 ml-3 promotion-description"},[a("p",[t._v(t._s(t.promotion.description))]),a("div",{},[a("b-icon",{staticClass:"mr-2",attrs:{icon:"calendar3","aria-hidden":"true"}}),a("span",{staticClass:"font-weight-bold"},[t._v("From:")]),t._v(" "+t._s(new Date(t.promotion.startTime).toString().slice(0,24))+" - "),a("span",{staticClass:"font-weight-bold"},[t._v("To:")]),t._v(" "+t._s(new Date(t.promotion.endTime).toString().slice(0,24))+" ")],1)])])]),a("button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-promotionDeleteConfirm",expression:"`modal-promotionDeleteConfirm`"}],staticClass:"btn btn-danger btn-delete"},[t._v("Delete")])]):t._e()],1)},e=[],i=(a("ac1f"),a("5319"),a("3e67")),s=a("ae8e"),r={components:{NavbarAdmin:i["a"],Loader:s["a"]},beforeCreate:function(){this.$store.state.login.token||this.$router.replace("/")},created:function(){this.$store.dispatch("fetchPromotionById",this.$route.params.id)},computed:{loading:function(){return this.$store.state.promotions.loading},promotion:function(){return this.$store.state.promotions.data}},methods:{onModalOk:function(){this.$store.dispatch("fetchDeletePromotion",this.$route.params.id)}}},c=r,l=(a("4ddd"),a("2877")),d=Object(l["a"])(c,o,e,!1,null,"08931ecd",null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-511a9bc5.4a51f7c2.js.map