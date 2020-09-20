(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13e54bf0"],{"0121":function(e,t,a){"use strict";var i=a("6b8f5"),n=a.n(i);n.a},"0498":function(e,t,a){"use strict";var i=a("9841"),n=a.n(i);n.a},"164a":function(e,t,a){},"3e67":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"custom-container"},[a("div",{staticClass:"container"},[a("b-navbar",{attrs:{toggleable:"lg",type:"light"}},[a("div",{staticClass:"brand-container"},[a("b-navbar-brand",{staticClass:"nav-brand",attrs:{href:"/"}},[e._v(" Movies "),a("b-icon",{attrs:{icon:"film","aria-hidden":"true"}})],1)],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/movies"}},[e._v("Movies")])],1),a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/cinemas"}},[e._v("Cinemas")])],1),a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/promotions"}},[e._v("Promotions")])],1),a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/admin/contacts"}},[e._v("Contacts")])],1)],1)],1)],1)])},n=[],s={methods:{closeMenu:function(){event.target.parentElement.classList.remove("show")}}},r=s,o=(a("cf65"),a("2877")),m=Object(o["a"])(r,i,n,!1,null,"644ea2e4",null);t["a"]=m.exports},"6b8f5":function(e,t,a){},"7f73":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit-cinema-container"},[a("NavbarAdmin"),e.loading?a("Loader"):e._e(),a("b-modal",{attrs:{id:"modal-editCinemaConfirm"},on:{ok:e.onModalOk},scopedSlots:e._u([{key:"modal-title",fn:function(){return[e.cinema?a("div",[[e._v("Confirming...")]],2):e._e()]},proxy:!0}])},[a("div",{},[e._v("Are you sure you want to edit this cinema?")])]),a("b-modal",{attrs:{id:"modal-moviesList"},scopedSlots:e._u([{key:"modal-title",fn:function(){return[a("div",[[e._v("Movies:")]],2)]},proxy:!0}])},[e.movies?a("form",e._l(e.movies,(function(t){return a("div",{key:t._id},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.movieArray,expression:"movieArray"}],staticClass:"mr-2",attrs:{type:"checkbox",id:t.name},domProps:{value:t._id,checked:Array.isArray(e.movieArray)?e._i(e.movieArray,t._id)>-1:e.movieArray},on:{change:function(a){var i=e.movieArray,n=a.target,s=!!n.checked;if(Array.isArray(i)){var r=t._id,o=e._i(i,r);n.checked?o<0&&(e.movieArray=i.concat([r])):o>-1&&(e.movieArray=i.slice(0,o).concat(i.slice(o+1)))}else e.movieArray=s}}}),a("label",{attrs:{for:t.name}},[e._v(e._s(t.name))])])})),0):e._e()]),e.cinema?a("div",{staticClass:"container"},[a("h3",{staticClass:"text-center mt-4 title"},[e._v("Editing...")]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-lg-10 mx-auto text-center position-relative"},[a("form",{on:{submit:function(e){e.preventDefault()}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editCinema.name,expression:"editCinema.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Name"},domProps:{value:e.editCinema.name},on:{input:function(t){t.target.composing||e.$set(e.editCinema,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editCinema.address,expression:"editCinema.address"}],staticClass:"form-control",attrs:{type:"text",id:"address",placeholder:"Address"},domProps:{value:e.editCinema.address},on:{input:function(t){t.target.composing||e.$set(e.editCinema,"address",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editCinema.province,expression:"editCinema.province"}],staticClass:"form-control",attrs:{type:"text",id:"province",placeholder:"Province"},domProps:{value:e.editCinema.province},on:{input:function(t){t.target.composing||e.$set(e.editCinema,"province",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editCinema.searchTerm,expression:"editCinema.searchTerm"}],staticClass:"form-control",attrs:{type:"text",id:"searchTerm",placeholder:"SearchTerm"},domProps:{value:e.editCinema.searchTerm},on:{input:function(t){t.target.composing||e.$set(e.editCinema,"searchTerm",t.target.value)}}})]),a("div",{staticClass:"form-group d-flex justify-content-between"},[a("input",{staticClass:"form-control input-movies",attrs:{type:"text",id:"movie",placeholder:"Movies"}}),a("div",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-moviesList",expression:"`modal-moviesList`"}],staticClass:"btn-movies m-1"},[a("b-icon",{staticClass:"h4",attrs:{icon:"plus-square","aria-hidden":"true"}})],1)])]),a("button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-editCinemaConfirm",expression:"`modal-editCinemaConfirm`"}],staticClass:"btn btn-success btn-edit"},[e._v("Edit")])])])]):e._e()],1)},n=[],s=(a("ac1f"),a("5319"),a("ae8e")),r=a("3e67"),o={components:{Loader:s["a"],NavbarAdmin:r["a"]},data:function(){return{movieArray:[],editCinema:{name:"",address:"",searchTerm:"",province:""}}},beforeCreate:function(){this.$store.state.login.token||this.$router.replace("/")},created:function(){this.$store.dispatch("fetchCinemaById",this.$route.params.id),this.$store.dispatch("fetchListMoviesByStatus","showing")},computed:{cinema:function(){return this.$store.state.cinemas.data},loading:function(){return this.$store.state.cinemas.loading},movies:function(){return this.$store.state.movies.data}},methods:{onModalOk:function(){this.editCinema.movieId=this.movieArray,this.$store.dispatch("fetchEditCinema",{_id:this.$route.params.id,cinema:this.editCinema})}},watch:{cinema:function(e){e&&(this.editCinema=e,this.movieArray=e.movieId)}}},m=o,c=(a("0121"),a("2877")),d=Object(c["a"])(m,i,n,!1,null,"39a4eaa4",null);t["default"]=d.exports},9841:function(e,t,a){},ae8e:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"custom-spinner"},[a("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner",type:"grow"}})],1)},n=[],s={},r=s,o=(a("0498"),a("2877")),m=Object(o["a"])(r,i,n,!1,null,null,null);t["a"]=m.exports},cf65:function(e,t,a){"use strict";var i=a("164a"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-13e54bf0.728b3cfd.js.map