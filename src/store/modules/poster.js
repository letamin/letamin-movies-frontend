import { api } from "@/api/index.js";

const state = {
    loading: false,
    data: null,
    err: null
}

const mutations = {
    storePosterRequest: (state) => {
        state.loading = true;
        state.data = null;
        state.err = null
    },

    storePosterSuccess: (state, payload) => {
        state.loading = false;
        state.data = payload;
        state.err = null;
    },

    storePosterFailed: (state, payload) => {
        state.loading = false;
        state.data = null;
        state.err = payload;
    },
}

const actions = {
    fetchListPosters({ commit }) {
        commit("storePosterRequest");
        api.get("/posters")
            .then((res) => {
                commit("storePosterSuccess", res.data);
            })
            .catch(err => {
                commit("storePosterFailed", err)
            });
    },
}

export default {
    state,
    mutations,
    actions
}