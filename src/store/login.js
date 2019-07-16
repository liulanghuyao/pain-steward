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
  setLogin(context, item) {
    context.commit('setLogin', item);
  },
  setUser(context, item) {
    if (storage.getItem('token')) {
      http.get('app/user/userInfo').then(data => {
        if (data.code == 1) {
          context.commit('setUser', storage.getItem('user') || {});
        } else {
          storage.setItem('user', data.user);
          context.commit('setUser', data.user);
        }
        context.dispatch('setLogin', true);
      }).catch(error => {});
    }
  }
};
export default {
  namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
