import { api } from "@/api/index.js";
import router from "../../router";

const state = {
  loading: false,
  data: null,
  err: null
};

const mutations = {
  storeMovieRequest: state => {
    state.loading = true;
    state.data = null;
    state.err = null;
  },

  storeMovieSuccess: (state, payload) => {
    state.loading = false;
    state.data = payload;
    state.err = null;
  },

  storeMovieFailed: (state, payload) => {
    state.loading = false;
    state.data = null;
    state.err = payload;
  }
};

const actions = {
  fetchAllMovies({ commit }) {
    commit("storeMovieRequest");
    api
      .get(`/movies`)
      .then(res => {
        commit("storeMovieSuccess", res.data);
      })
      .catch(err => {
        commit("storeMovieFailed", err);
      });
  },

  fetchListMoviesByStatus({ commit }, status) {
    commit("storeMovieRequest");
    api
      .get(`/movies/status/${status}`)
      .then(res => {
        commit("storeMovieSuccess", res.data);
      })
      .catch(err => {
        commit("storeMovieFailed", err);
      });
  },

  fetchMoviesById({ commit }, id) {
    commit("storeMovieRequest");
    api
      .get(`/movies/${id}`)
      .then(res => {
        commit("storeMovieSuccess", res.data);
      })
      .catch(err => {
        commit("storeMovieFailed", err);
      });
  },

  fetchEditMovie({ commit }, movie) {
    commit("storeMovieRequest");
    api
      .patch(`/movies/${movie._id}`, movie.movie)
      .then(res => {
        commit("storeMovieSuccess", res.data);
        router.replace("/admin/movies");
      })
      .catch(err => {
        commit("storeMovieFailed", err);
      });
  },

  fetchPostMovie({ commit }, movie) {
    commit("storeMovieRequest");
    api
      .post(`/movies`, movie)
      .then(res => {
        commit("storeMovieSuccess", res.data);
        router.replace("/admin/movies");
      })
      .catch(err => {
        commit("storeMovieFailed", err);
      });
  },

  fetchDeleteMovie({ commit }, id) {
    commit("storeMovieRequest");
    api
      .delete(`/movies/${id}`)
      .then(res => {
        commit("storeMovieSuccess", res.data);
        router.replace("/admin/movies");
      })
      .catch(err => {
        commit("storeMovieFailed", err);
      });
  }
};

export default {
  state,
  mutations,
  actions
};
