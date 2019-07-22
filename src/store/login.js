import http from '../utils/http';
import storage from '../utils/storage';

const state = {
  login: false,
  user: {}
};
const getters = {
  isLogin(state) {
    return state.login;
  },
  getUser(state) {
    return state.user || {};
  }
};
const mutations = {
  setLogin(state, item) {
    state.login = item;
  },
  setUser(state, item) {
    state.user = item;
  }
};
const actions = {
  login(context, authorization) {
    context.commit('setLogin', true);
    authorization && storage.setItem('Authorization', authorization);
  },
  logout(context) {
    context.commit('setLogin', false);
    storage.removeItem('Authorization');
    storage.removeItem('user');
  },
  setUser(context, item) {
    storage.setItem('user', item);
    context.commit('setUser', item);
  }
};
export default {
  namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
