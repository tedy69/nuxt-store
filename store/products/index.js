const states = {
  data_product: {},
  filter_product: [],
  detail_product: {},
};
const mutations = {
  SET_DATA_PRODUCT(state, data) {
    state.data_product = data;
  },
  SET_FILTER_PRODUCT(state, data) {
    state.filter_product = data;
  },
  SET_DETAIL_PRODUCT(state, data) {
    state.detail_product = data;
  },
};
const actions = {
  getDataProducts({ commit }, { page, size }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`/local/api/products?page=${page}&size=${size}`)
        .then((res) => {
          commit("SET_DATA_PRODUCT", res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getDataFilterProducts({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`/local/api/products/category/` + data)
        .then((res) => {
          commit("SET_FILTER_PRODUCT", res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getDetailProducts({ commit }, { category, id }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`/local/api/products/` + category + `/` + id)
        .then((res) => {
          commit("SET_DETAIL_PRODUCT", res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  createProduct({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post(`/local/api/products`, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default {
  namespaced: true,
  state: states,
  mutations,
  actions,
};
