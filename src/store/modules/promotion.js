import { api } from "../../api";

const state = {
    loading: false,
    data: null,
    err: null
}

const mutations = {
    storePromotionsRequest: (state) => {
        state.loading = true,
            state.data = null,
            state.err = null
    },

    storePromotionsSuccess: (state, payload) => {
        state.loading = false,
            state.data = payload,
            state.err = null
    },

    storePromotionsFailed: (state, payload) => {
        state.loading = false,
            state.data = null,
            state.err = payload
    }
}

const actions = {
    fetchAllPromotions({ commit }) {
        commit('storePromotionsRequest');
        api.get('/promotions')
            .then(res => {
                commit('storePromotionsSuccess', res.data)
            })
            .catch(err => {
                commit('storePromotionsFailed', err)
            })
    },

    fetchPromotionById({ commit }, id) {
        commit('storePromotionsRequest');
        api.get(`/promotions/${id}`)
            .then(res => {
                commit('storePromotionsSuccess', res.data)
            })
            .catch(err => {
                commit('storePromotionsFailed', err)
            })
    }
}

export default {
    state,
    mutations,
    actions
}