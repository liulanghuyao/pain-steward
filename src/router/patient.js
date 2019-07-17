import index from '@/pages/patient/index'
import home from '@/pages/patient/home/home'
import consultList from '@/pages/patient/consult/consultList'
import personal from '@/pages/patient/personal/index'
import personalMessage from '@/pages/patient/personal/personalMessage'
import mineOrderList from '@/pages/patient/order/mineOrderList'
import imageTextConsult from '@/pages/patient/consult/imageTextConsult'

export default [{
  path: '/patient/consult/imageText',
  name: 'imageTextConsult',
  component: imageTextConsult,
  meta: {
    title: '图文咨询',
    rank: 1
  }
}, {
  path: '/patient/order/mineList',
  name: 'mineOrderList',
  component: mineOrderList,
  meta: {
    title: '订单记录',
    rank: 1
  }
}, {
  path: '/patient/personal/message',
  name: 'personalMessage',
  component: personalMessage,
  meta: {
    title: '我的资料',
    rank: 1
  }
}, {
  path: '/patient/index',
  name: 'index',
  component: index,
  children: [{
    path: '/patient/consult/list',
    name: 'consultList',
    component: consultList,
    meta: {
      title: '咨询'
    }
  }, {
    path: '/patient/personal',
    name: 'personal',
    component: personal,
    meta: {
      title: '我的'
    }
  }, {
    path: '/patient/home',
    name: 'home',
    component: home
  }]
}]
