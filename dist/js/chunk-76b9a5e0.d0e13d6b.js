(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76b9a5e0"],{"0498":function(t,s,e){"use strict";var o=e("9841"),n=e.n(o);n.a},"0c65":function(t,s,e){},"16c0":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"background"},[e("Carousel",{attrs:{listPosters:t.listPosters}}),e("NavbarHome"),e("Movies",{attrs:{listMovies:t.listMovies}}),e("Footer"),e("router-view")],1)},n=[],a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"background-carousel"},[t.loading?e("Loader"):e("div",{staticClass:"container custom-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-10 mx-auto p-0"},[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(s){t.slide=s},expression:"slide"}},t._l(t.listPosters,(function(s){return e("b-carousel-slide",{key:s._id,scopedSlots:t._u([{key:"img",fn:function(){return[e("img",{staticClass:"d-block custom-img",attrs:{src:s.url}})]},proxy:!0}],null,!0)})})),1)],1)])])],1)},i=[],r=e("ae8e"),c={props:["listPosters"],components:{Loader:r["a"]},computed:{loading:function(){return this.$store.state.posters.loading}},data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},l=c,u=(e("b1cd"),e("2877")),d=Object(u["a"])(l,a,i,!1,null,"055e18a3",null),v=d.exports,m=e("3f83"),f=e("7f89"),b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"footer-container mt-4"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-lg-4"},[e("b-link",{staticClass:"footer-brand",attrs:{href:"/"}},[t._v(" Movies "),e("b-icon",{attrs:{icon:"film","aria-hidden":"true"}})],1),e("p",[t._v(" Letamin Movies is the largest multiplex cinema chain in South Korea and also has branches in China, Indonesia, Myanmar, Turkey, Vietnam and United State! ")])],1),e("div",{staticClass:"col-md-4 col-lg-4 offset-lg-1 footer-contact"},[e("h3",{staticClass:"footer-header"},[t._v("Contact")]),e("div",{staticClass:"mt-1"},[e("b-icon",{attrs:{icon:"geo-alt","aria-hidden":"true"}}),e("span",{staticClass:"ml-2"},[t._v("Location: 123, District 1, HCM city")])],1),e("div",{staticClass:"mt-1"},[e("b-icon",{attrs:{icon:"telephone-fill","aria-hidden":"true"}}),e("span",{staticClass:"ml-2"},[t._v("Telephone: (+84) 132 564 798")])],1),e("div",{staticClass:"mt-1"},[e("b-icon",{attrs:{icon:"envelope","aria-hidden":"true"}}),e("span",{staticClass:"ml-2"},[t._v("Email: lethanhminh0901@gmail.com")])],1)]),e("div",{staticClass:"col-md-4 col-lg-3 footer-follow"},[e("h3",{staticClass:"footer-header"},[t._v("Follow us")]),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"footer-icon"},[e("a",{attrs:{href:"https://www.facebook.com",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"facebook"},size:"2x"}})],1)]),e("div",{staticClass:"footer-icon"},[e("a",{attrs:{href:"https://twitter.com",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"twitter"},size:"2x"}})],1)]),e("div",{staticClass:"footer-icon"},[e("a",{attrs:{href:"https://www.instagram.com",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"instagram"},size:"2x"}})],1)])])])])])])},p=[],h={},g=h,_=(e("d0bf"),Object(u["a"])(g,b,p,!1,null,"271c3214",null)),C=_.exports,w={components:{Carousel:v,NavbarHome:m["a"],Movies:f["a"],Footer:C},data:function(){return{listPosters:null,listMovies:null}},created:function(){this.$store.dispatch("fetchListPosters"),this.$store.dispatch("fetchListMoviesByStatus","showing")},computed:{posters:function(){return this.$store.state.posters.data},movies:function(){return this.$store.state.movies.data}},watch:{posters:function(t){this.listPosters=t},movies:function(t){this.listMovies=t}}},k=w,x=(e("2346"),Object(u["a"])(k,o,n,!1,null,"3fc6e0a0",null));s["default"]=x.exports},"204c":function(t,s,e){"use strict";var o=e("bbdc"),n=e.n(o);n.a},2346:function(t,s,e){"use strict";var o=e("0c65"),n=e.n(o);n.a},"3f83":function(t,s,e){"use strict";var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"custom-container"},[e("div",{staticClass:"container"},[e("b-navbar",{attrs:{toggleable:"lg",type:"light"}},[e("div",{staticClass:"brand-container"},[e("b-navbar-brand",{staticClass:"nav-brand",attrs:{href:"/"}},[t._v(" Movies "),e("b-icon",{attrs:{icon:"film","aria-hidden":"true"}})],1)],1),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("Movies")])]},proxy:!0}])},[e("b-link",{staticClass:"text-center",attrs:{to:"/status/showing"},on:{click:t.closeMenu}},[t._v("Showing")]),e("b-link",{staticClass:"text-center",attrs:{to:"/status/coming-soon"},on:{click:t.closeMenu}},[t._v("Coming Soon")])],1),e("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("Cinemas")])]},proxy:!0}])},[e("b-dropdown-item",{attrs:{to:"/cinemas"}},[t._v("All Cinemas")])],1),e("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("Promotions")])]},proxy:!0}])},[e("b-dropdown-item",{attrs:{to:"/promotions"}},[t._v("All Promotions")])],1),e("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("About us")])]},proxy:!0}])},[e("b-dropdown-item",{attrs:{to:"/about"}},[t._v("About us")]),e("b-dropdown-item",{attrs:{to:"/contact"}},[t._v("Contact us")])],1),e("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("Members")])]},proxy:!0}])},[e("b-dropdown-item",{attrs:{to:"/signup"}},[t._v("Sign up")]),t.loggedIn?e("b-dropdown-item",{on:{click:t.handleLogout}},[t._v("Logout")]):e("b-dropdown-item",{attrs:{to:"/login"}},[t._v("Login")])],1)],1)],1)],1)],1)])},n=[],a={methods:{closeMenu:function(){event.target.parentElement.classList.remove("show")},handleLogout:function(){this.$store.dispatch("logout")}},computed:{loggedIn:function(){return this.$store.state.login.token}}},i=a,r=(e("204c"),e("2877")),c=Object(r["a"])(i,o,n,!1,null,"0db3dd62",null);s["a"]=c.exports},"450d":function(t,s,e){},"6b8f":function(t,s,e){},"7f89":function(t,s,e){"use strict";var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container position-relative"},[t.status?e("h1",{staticClass:"text-center m-4 title text-light"},[t._v(t._s(t.status))]):e("h1",{staticClass:"text-center m-4 title"},[t._v("Welcome")]),t.loading?e("Loader"):e("div",{staticClass:"row"},t._l(t.listMovies,(function(s){return e("div",{key:s._id,staticClass:"col-lg-3 col-md-6"},[e("b-card",{staticClass:"mb-4 position-relative",staticStyle:{"max-width":"15rem"},attrs:{overlay:"","img-src":s.poster,"img-alt":"Image","img-top":""}},[e("b-link",{staticClass:"btn btn-details",class:{"btn-details-only":"coming-soon"==s.status},attrs:{to:"/details/"+s._id}},[t._v("Details")]),"showing"==s.status?e("b-link",{staticClass:"btn btn-buy",attrs:{to:"/cinemas/movie/"+s._id}},[t._v("Buy Ticket")]):t._e()],1)],1)})),0)],1)},n=[],a=e("ae8e"),i={props:["listMovies","status"],components:{Loader:a["a"]},computed:{loading:function(){return this.$store.state.movies.loading}}},r=i,c=(e("af6e"),e("2877")),l=Object(c["a"])(r,o,n,!1,null,"3541b930",null);s["a"]=l.exports},9841:function(t,s,e){},ae8e:function(t,s,e){"use strict";var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"custom-spinner"},[e("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner",type:"grow"}})],1)},n=[],a={},i=a,r=(e("0498"),e("2877")),c=Object(r["a"])(i,o,n,!1,null,null,null);s["a"]=c.exports},af6e:function(t,s,e){"use strict";var o=e("450d"),n=e.n(o);n.a},b1cd:function(t,s,e){"use strict";var o=e("6b8f"),n=e.n(o);n.a},bbdc:function(t,s,e){},d0bf:function(t,s,e){"use strict";var o=e("e73c"),n=e.n(o);n.a},e73c:function(t,s,e){}}]);
//# sourceMappingURL=chunk-76b9a5e0.d0e13d6b.js.map