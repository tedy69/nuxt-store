import Vue from "vue";
import Vuex from "vuex";
import products from "./products";

Vue.use(Vuex);

const state = {};
const actions = {};
const getters = {};
const mutations = {};

export default () =>
  new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
      products,
    },
  });
