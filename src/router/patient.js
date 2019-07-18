import index from '@/pages/patient/index'
import home from '@/pages/patient/home/home'
import consultList from '@/pages/patient/consult/consultList'
import buyConsult from '@/pages/patient/consult/buyConsult'
import payConsult from '@/pages/patient/consult/payConsult'
import payResultConsult from '@/pages/patient/consult/payResultConsult'
import personal from '@/pages/patient/personal/index'
import personalMessage from '@/pages/patient/personal/personalMessage'
import mineOrderList from '@/pages/patient/order/mineOrderList'
import imageTextConsult from '@/pages/patient/consult/imageTextConsult'
import doctorList from '@/pages/patient/doctor/doctorList';
import doctorDetail from '@/pages/patient/doctor/doctorDetail';
import healthy from '@/pages/patient/archives/healthy';

export default [{
  path: '/patient/archives/healthy',
  name: 'healthy',
  component: healthy,
  meta: {
    title: '健康档案',
    rank: 1
  }
}, {
  path: '/patient/consult/imageText',
  name: 'imageTextConsult',
  component: imageTextConsult,
  meta: {
    title: '图文咨询',
    rank: 6
  }
}, {
  path: '/patient/consult/payResultConsult',
  name: 'payResultConsult',
  component: payResultConsult,
  meta: {
    title: '订单详情',
    rank: 5
  }
}, {
  path: '/patient/consult/payConsult',
  name: 'payConsult',
  component: payConsult,
  meta: {
    title: '确认支付',
    rank: 4
  }
}, {
  path: '/patient/consult/buyConsult',
  name: 'buyConsult',
  component: buyConsult,
  meta: {
    title: '购买咨询',
    rank: 3
  }
}, {
  path: '/patient/doctor/doctorDetail',
  name: 'doctorDetail',
  component: doctorDetail,
  meta: {
    title: '医生主页',
    rank: 2
  }
}, {
  path: '/patient/doctor/doctorList',
  name: 'doctorList',
  component: doctorList,
  meta: {
    title: '专家团队',
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
