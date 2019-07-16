import Vue from 'vue';
import Vuex from 'vuex';
import login from './login';
import loading from './loading';
import route from './route';

Vue.use(Vuex);

const setting = {
  modules: {
    login,
    loading,
    route
  }
};

const store = new Vuex.Store(setting);

export default store;
