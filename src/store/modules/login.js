import { api } from "../../api";
import setHeader from "../../api/setHeader";
import jwtDecode from "jwt-decode";
import router from "../../router";

const state = {
  loading: false,
  token: null,
  err: null
};

const mutations = {
  storeLoginRequest: state => {
    state.loading = true;
    state.token = null;
    state.err = null;
  },

  storeLoginSuccess: (state, payload) => {
    state.loading = false;
    state.token = payload;
    state.err = null;
  },

  storeLoginFailed: (state, payload) => {
    state.loading = null;
    state.token = null;
    state.err = payload;
  },

  clearAuthData: state => {
    state.loading = false;
    state.token = null;
    state.err = null;
  }
};

const actions = {
  logout({ commit }) {
    commit("clearAuthData");
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
  },

  setLogoutTimer({ dispatch }, exp) {
    setTimeout(() => {
      router.replace("/login");
      dispatch("logout");
    }, exp);
  },

  tryAutoLogin({ commit, dispatch }) {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    const exp = localStorage.getItem("exp");
    const date = new Date().getTime() / 1000;
    if (date > exp) {
      dispatch("logout");
    }

    setHeader(token);
    commit("storeLoginSuccess", token);
  },

  fetchUserLogin({ commit, dispatch }, user) {
    commit("storeLoginRequest");
    api
      .post("/users/login", user)
      .then(res => {
        const decoded = jwtDecode(res.data.token);

        if (decoded.userType == "client") {
          router.replace("/");
        } else if (decoded.userType == "admin") {
          router.replace("/admin/dashboard");
        }

        localStorage.setItem("token", res.data.token); //token
        localStorage.setItem("exp", decoded.exp); //expired time
        setHeader(res.data.token);

        dispatch("setLogoutTimer", decoded.exp);
        commit("storeLoginSuccess", res.data.token);
      })
      .catch(err => {
        commit("storeLoginFailed", err);
      });
  }
};

export default {
  state,
  mutations,
  actions
};
