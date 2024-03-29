import { api } from "@/api/index.js";
import router from "../../router";

const state = {
  loading: false,
  data: null,
  err: null
};

const mutations = {
  storeContactRequest: state => {
    state.loading = true;
    state.data = null;
    state.err = null;
  },

  storeContactSuccess: (state, payload) => {
    state.loading = false;
    state.data = payload;
    state.err = null;
  },

  storeContactFailed: (state, payload) => {
    state.loading = false;
    state.data = null;
    state.err = payload;
  }
};

const actions = {
  fetchContactForm({ commit }, form) {
    commit("storeContactRequest");
    api
      .post("/contacts", form)
      .then(res => {
        commit("storeContactSuccess", res.data);
        router.replace("/contact/done");
      })
      .catch(err => {
        commit("storeContactFailed", err.response.data);
      });
  },

  fetchGetAllContacts({ commit }) {
    commit("storeContactRequest");
    api
      .get("/contacts")
      .then(res => {
        commit("storeContactSuccess", res.data);
      })
      .catch(err => {
        commit("storeContactFailed", err.response.data);
      });
  },

  fetchContactById({ commit }, id) {
    commit("storeContactRequest");
    api
      .get(`/contacts/${id}`)
      .then(res => {
        commit("storeContactSuccess", res.data);
      })
      .catch(err => {
        commit("storeContactFailed", err.response.data);
      });
  },

  fetchDeleteContact({ commit }, id) {
    commit("storeContactRequest");
    api
      .delete(`/contacts/${id}`)
      .then(res => {
        commit("storeContactSuccess", res.data);
        router.replace("/admin/contacts");
      })
      .catch(err => {
        commit("storeContactFailed", err.response.data);
      });
  }
};

export default {
  state,
  mutations,
  actions
};
