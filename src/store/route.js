const state = {
  route: {},
};
const getters = {
  getRoute(state) {
    return state.route;
  },
  getQuery(state) {
    let str = '?';
    if (state.route.query) {
      Object.keys(state.route.query).forEach(function(key) {
        str += `${key}=${state.route.query[key]}&`;
      });
    }
    return str;
  }
};
const mutations = {
  setRoute(state, item) {
    state.route = item;
  },
};
const actions = {
  setRoute(context, item) {
    context.commit('setRoute', item);
  },
};
export default {
  namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
