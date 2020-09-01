import { api } from "@/api/index.js";
import router from "../../router"

const state = {
    loading: false,
    data: null,
    err: null
}

const mutations = {
    storeTicketRequest: (state) => {
        state.loading = true;
        state.data = null;
        state.err = null;
    },

    storeTicketSuccess: (state, payload) => {
        state.loading = false;
        state.data = payload;
        state.err = null;
    },

    storeTicketFailed: (state, payload) => {
        state.loading = false;
        state.data = null;
        state.err = payload;
    }
}

const actions = {
    fetchTicket({ commit }, ticket) {
        commit('storeTicketRequest');
        api.post('/tickets', ticket)
            .then(res => {
                commit('storeTicketSuccess', res.data);
                router.replace('/ticket/confirm');
            })
            .catch(err => {
                commit('storeTicketFailed', err);
            })
    }
}

export default {
    state,
    mutations,
    actions
}