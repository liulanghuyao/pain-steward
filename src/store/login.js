import http from '../utils/http';
import storage from '../utils/storage';

const state = {
  login: false,
  loginType: '',
  user: {},
  userInfo: {}
};
const getters = {
  isLogin(state) {
    return state.login;
  },
  getUser(state) {
    return state.user || {};
  },
  getUserInfo(state) {
    return state.userInfo || {};
  },
  getLoginType(state) {
    return state.loginType || {};
  }
};
const mutations = {
  setLogin(state, item) {
    state.login = item;
  },
  setUser(state, item) {
    state.user = item;
  },
  setUserInfo(state, item) {
    state.userInfo = item;
  },
  setLoginType(state, item) {
    state.loginType = item;
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
    storage.removeItem('userInfo');
  },
  setUser(context, item) {
    storage.setItem('user', item);
    context.commit('setUser', item);
  },
  setUserInfo(context, item) {
    storage.setItem('userInfo', item);
    context.commit('setUserInfo', item);
  },
  setLoginType(context, item) {
    storage.setItem('loginType', item);
    context.commit('setLoginType', item);
  }
};
export default {
  namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
