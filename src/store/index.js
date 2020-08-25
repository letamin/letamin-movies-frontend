import Vue from "vue";
import Vuex from "vuex";

import posters from "./modules/poster";
import movies from "./modules/movie";
import cinemas from "./modules/cinema";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posters,
    movies,
    cinemas
  }
});
