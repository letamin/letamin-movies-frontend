(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1645ec6"],{"138d":function(t,n,o){},"204c":function(t,n,o){"use strict";var e=o("bbdc"),s=o.n(e);s.a},"3f83":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"custom-container"},[o("div",{staticClass:"container"},[o("b-navbar",{attrs:{toggleable:"lg",type:"light"}},[o("div",{staticClass:"brand-container"},[o("b-navbar-brand",{staticClass:"nav-brand",attrs:{href:"/"}},[t._v(" Movies "),o("b-icon",{attrs:{icon:"film","aria-hidden":"true"}})],1)],1),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto"},[o("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("em",[t._v("Movies")])]},proxy:!0}])},[o("b-link",{staticClass:"text-center",attrs:{to:"/status/showing"},on:{click:t.closeMenu}},[t._v("Showing")]),o("b-link",{staticClass:"text-center",attrs:{to:"/status/coming-soon"},on:{click:t.closeMenu}},[t._v("Coming Soon")])],1),o("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("em",[t._v("Cinemas")])]},proxy:!0}])},[o("b-dropdown-item",{attrs:{to:"/cinemas"}},[t._v("All Cinemas")])],1),o("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("em",[t._v("Promotions")])]},proxy:!0}])},[o("b-dropdown-item",{attrs:{to:"/promotions"}},[t._v("All Promotions")])],1),o("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("em",[t._v("About us")])]},proxy:!0}])},[o("b-dropdown-item",{attrs:{to:"/about"}},[t._v("About us")]),o("b-dropdown-item",{attrs:{to:"/contact"}},[t._v("Contact us")])],1),o("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("em",[t._v("Members")])]},proxy:!0}])},[o("b-dropdown-item",{attrs:{to:"/signup"}},[t._v("Sign up")]),t.loggedIn?o("b-dropdown-item",{on:{click:t.handleLogout}},[t._v("Logout")]):o("b-dropdown-item",{attrs:{to:"/login"}},[t._v("Login")])],1)],1)],1)],1)],1)])},s=[],a={methods:{closeMenu:function(){event.target.parentElement.classList.remove("show")},handleLogout:function(){this.$store.dispatch("logout")}},computed:{loggedIn:function(){return this.$store.state.login.token}}},r=a,i=(o("204c"),o("2877")),c=Object(i["a"])(r,e,s,!1,null,"0db3dd62",null);n["a"]=c.exports},"5a31":function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"ticket-container"},[o("NavbarHome"),o("router-view")],1)},s=[],a=(o("ac1f"),o("5319"),o("3f83")),r={components:{NavbarHome:a["a"]},created:function(){this.$store.state.login.token||this.$router.replace("/login")}},i=r,c=(o("7b6f"),o("2877")),u=Object(c["a"])(i,e,s,!1,null,"369309e2",null);n["default"]=u.exports},"7b6f":function(t,n,o){"use strict";var e=o("138d"),s=o.n(e);s.a},bbdc:function(t,n,o){}}]);
//# sourceMappingURL=chunk-d1645ec6.f220ee1c.js.map