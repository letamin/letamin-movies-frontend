import { api } from "@/api/index.js";
import router from "../../router"

const state = {
    loading: false,
    data: null,
    err: null
}

const mutations = {
    storeSignUpRequest: (state) => {
        state.loading = true;
        state.data = null;
        state.err = null;
    },

    storeSignUpSuccess: (state, payload) => {
        state.loading = false;
        state.data = payload;
        state.err = null;
    },

    storeSignUpFailed: (state, payload) => {
        state.loading = false;
        state.data = null;
        state.err = payload;
    },
}

const actions = {
    fetchUserSignUp({ commit }, user) {
        commit('storeSignUpRequest');
        api.post('/users', user)
            .then(res => {
                commit('storeSignUpSuccess', res.data);
                setTimeout(() => {
                    router.replace('/');
                }, 2000);
            })
            .catch(err => {
                err.response.data
                commit('storeSignUpFailed', err.response.data);

            })
    }
}

export default {
    state,
    mutations,
    actions
}