import Vue from 'vue'
import Router from 'vue-router'
import patient from './patient';
import login from '@/pages/login/login'
import findPassword from '@/pages/login/findPassword'
import setPassword from '@/pages/login/setPassword'
import register from '@/pages/login/register'
import fillMessage from '@/pages/login/fillMessage'

Vue.use(Router)

let option = {
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
    path: '/fill-message',
    name: 'fillMessage',
    component: fillMessage,
    meta: {
      title: '基本信息',
      rank: 4
    }
  }, {
    path: '/register',
    name: 'register',
    component: register,
    meta: {
      title: '注册',
      rank: 2
    }
  }, {
    path: '/set-password',
    name: 'setPassword',
    component: setPassword,
    meta: {
      title: '设置密码',
      rank: 3
    }
  }, {
    path: '/find-password',
    name: 'findPassword',
    component: findPassword,
    meta: {
      title: '找回密码',
      rank: 2
    }
  }, {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '登录',
      rank: 1
    }
  }]
}

option.routes = option.routes.concat(patient);

let router = new Router(option);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '疼痛e管家';
  next();
});

export default router;
