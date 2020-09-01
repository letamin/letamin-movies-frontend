import Vue from "vue";
import Vuex from "vuex";

import posters from "./modules/poster";
import movies from "./modules/movie";
import cinemas from "./modules/cinema";
import login from "./modules/login";
import signUp from "./modules/signUp";
import ticket from "./modules/ticket";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posters,
    movies,
    cinemas,
    login,
    signUp,
    ticket
  }
});
