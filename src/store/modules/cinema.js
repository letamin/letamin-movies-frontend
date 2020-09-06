import { api } from "@/api/index.js";
import router from "../../router";

const state = {
    loading: false,
    data: null,
    err: null
}

const mutations = {
    storeCinemaRequest: (state) => {
        state.loading = true;
        state.data = null;
        state.err = null
    },

    storeCinemaSuccess: (state, payload) => {
        state.loading = false;
        state.data = payload;
        state.err = null;
    },

    storeCinemaFailed: (state, payload) => {
        state.loading = false;
        state.data = null;
        state.err = payload;
    },
}

const actions = {
    fetchListCinemas({ commit }) {
        commit("storeCinemaRequest");
        api.get(`/cinemas`)
            .then((res) => {
                commit("storeCinemaSuccess", res.data);
            })
            .catch(err => {
                commit("storeCinemaFailed", err)
            });
    },

    fetchCinemaById({ commit }, id) {
        commit('storeCinemaRequest');
        api.get(`/cinemas/${id}`)
            .then(res => {
                commit('storeCinemaSuccess', res.data);
            })
            .catch(err => {
                commit('storeCinemaFailed', err)
            })
    },

    fetchCinemasByMovie({ commit }, id) {
        commit('storeCinemaRequest');
        api.get(`/cinemas/movie/${id}`)
            .then(res => {
                commit('storeCinemaSuccess', res.data);
            })
            .catch(err => {
                commit('storeCinemaFailed', err);
            })
    },

    fetchEditCinema({ commit }, cinema) {
        commit('storeCinemaRequest');
        api.patch(`/cinemas/${cinema._id}`, cinema.cinema)
            .then(res => {
                commit('storeCinemaSuccess', res.data);
                router.replace('/admin/cinemas');
            })
            .catch(err => {
                commit('storeCinemaFailed', err);
            })
    },

    fetchPostCinema({ commit }, cinema) {
        commit('storeCinemaRequest');
        api.post(`/cinemas`, cinema)
            .then(res => {
                commit('storeCinemaSuccess', res.data);
                router.replace('/admin/cinemas');
            })
            .catch(err => {
                commit('storeCinemaFailed', err);
            })
    },

    fetchDeleteCinema({ commit }, id) {
        commit('storeCinemaRequest');
        api.delete(`/cinemas/${id}`)
            .then(res => {
                commit('storeCinemaSuccess', res.data);
                router.replace('/admin/cinemas');
            })
            .catch(err => {
                commit('storeCinemaFailed', err);
            })
    }
}

export default {
    state,
    mutations,
    actions
}