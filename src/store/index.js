import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, userData) {
      state.user = userData;
      localStorage.setItem('users', JSON.stringify(userData))
    }
  },
  actions: {
    // saveData(name, family) {
    //   localStorage.setItem(name, family)
    // }
  },
  modules: {},
  getter:{}
});
