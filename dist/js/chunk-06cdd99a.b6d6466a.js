(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06cdd99a"],{"0498":function(t,e,s){"use strict";var i=s("9841"),a=s.n(i);a.a},6733:function(t,e,s){},"69bf":function(t,e,s){"use strict";var i=s("6733"),a=s.n(i);a.a},9841:function(t,e,s){},ae8e:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-spinner"},[s("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner",type:"grow"}})],1)},a=[],n={},c=n,r=(s("0498"),s("2877")),o=Object(r["a"])(c,i,a,!1,null,null,null);e["a"]=o.exports},c654:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container text-center"},[t.loading?s("Loader"):t._e(),t.cinemas&&t.movie?s("div",{staticClass:"row m-5"},[s("div",{staticClass:"text-center col-sm-6"},[s("h3",{staticClass:"text-light"},[t._v(t._s(t.movie.name))]),s("div",{},[s("img",{attrs:{src:t.movie.poster,alt:"movie poster"}})])]),s("div",{staticClass:"col-sm-6"},[s("h3",{staticClass:"text-light"},[t._v("Available at:")]),s("div",{staticClass:"d-flex justify-content-center align-items-center"},[t._l(t.cinemas,(function(e){return[s("b-link",{key:e._id,staticClass:"btn-cinema m-2",attrs:{to:"/cinemas/details/"+e._id}},[t._v(t._s(e.name))])]}))],2)])]):t._e()],1)},a=[],n=s("ae8e"),c={components:{Loader:n["a"]},created:function(){this.$store.dispatch("fetchCinemasByMovie",this.$route.params.id),this.$store.dispatch("fetchMoviesById",this.$route.params.id)},computed:{cinemas:function(){return this.$store.state.cinemas.data},loading:function(){return this.$store.state.cinemas.loading},movie:function(){return this.$store.state.movies.data}}},r=c,o=(s("69bf"),s("2877")),l=Object(o["a"])(r,i,a,!1,null,"63f03e73",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-06cdd99a.b6d6466a.js.map