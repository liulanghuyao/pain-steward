const state = {
  route: {},
  pushState: false,
  pushStateFn: function() {},
  keepAlives: []
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
  },
  getPushState(state) {
    return state.pushState;
  },
  getPushStateFn(state) {
    return state.pushStateFn;
  },
  getKeepAlives(state) {
    return state.keepAlives;
  }
};
const mutations = {
  setRoute(state, item) {
    state.route = item;
  },
  setPushState(state, item) {
    state.pushState = item;
  },
  setPushStateFn(state, item) {
    state.pushStateFn = item;
  },
  setKeepAlives(state, item) {
    state.keepAlives = item;
  }
};
const actions = {
  setRoute(context, item) {
    context.commit('setRoute', item);
  },
  setPushState(context, item) {
    context.commit('setPushState', item);
  },
  setPushStateFn(context, item) {
    context.commit('setPushStateFn', item);
  },
  setKeepAlives(context, item) {
    context.commit('setKeepAlives', item);
  }
};
export default {
  namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
