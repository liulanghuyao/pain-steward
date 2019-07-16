const state = {
  loading: false,
};
const getters = {
  isLoading(state) {
    return state.loading;
  }
};
const mutations = {
  hide(state) {
    state.loading = false;
  },
  show(state) {
    state.loading = true;
  }
};
const actions = {
  hide(context, item) {
    context.commit('hide', item);
  },
  show(context, item) {
    context.commit('show', item);
  },
};
export default {
  namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
