import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import patient from './patient'
import doctor from './doctor'
import login from '@/pages/login/login'
import findPassword from '@/pages/login/findPassword'
import setPassword from '@/pages/login/setPassword'
import register from '@/pages/login/register'

Vue.use(Router)

let option = {
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
    path: '/register',
    component: register,
    meta: {
      title: '注册',
      rank: 2
    }
  }, {
    path: '/set-password',
    component: setPassword,
    meta: {
      title: '设置密码',
      rank: 3
    }
  }, {
    path: '/find-password',
    component: findPassword,
    meta: {
      title: '找回密码',
      rank: 2
    }
  }, {
    path: '/login',
    component: login,
    meta: {
      title: '登录',
      rank: 1
    }
  }]
}

option.routes = option.routes.concat(patient);
option.routes = option.routes.concat(doctor);

let router = new Router(option);

router.beforeEach((to, from, next) => {
  if (to.meta.keepAlive && to.name) {
    store.dispatch('route/setKeepAlives', [to.name]);
  }
  document.title = to.meta.title || '疼痛e管家';
  next();
});
export default router;
