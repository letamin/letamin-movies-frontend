import { api } from "@/api/index.js";

const state = {
    loading: false,
    data: null,
    err: null
}

const mutations = {
    storeMovieRequest: (state) => {
        state.loading = true;
        state.data = null;
        state.err = null
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
    },
}

const actions = {
    fetchListMoviesByStatus({ commit }, status) {
        commit("storeMovieRequest");
        api.get(`/movies/status/${status}`)
            .then((res) => {
                commit("storeMovieSuccess", res.data);
            })
            .catch(err => {
                commit("storeMovieFailed", err)
            });
    },

    fetchMoviesById({ commit }, id) {
        commit("storeMovieRequest");
        api.get(`/movies/${id}`)
            .then((res) => {
                commit("storeMovieSuccess", res.data);
            })
            .catch(err => {
                commit("storeMovieFailed", err)
            });
    },
}

export default {
    state,
    mutations,
    actions
}