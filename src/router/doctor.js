import index from '@/pages/doctor/index'
import home from '@/pages/doctor/home/home'
import consultList from '@/pages/doctor/consult/consultList'
import personalIndex from '@/pages/doctor/personal/index'
import mineOrderList from '@/pages/doctor/order/mineOrderList'
import personalKill from '@/pages/doctor/personal/kill'

export default [{
  path: '/doctor/personal/kill',
  component: personalKill,
  meta: {
    title: '完善专业技术',
    rank: 1,
  }
}, {
  path: '/doctor',
  component: index,
  children: [{
    path: '',
    name: 'doctorConsultList',
    component: consultList,
    meta: {
      title: '咨询',
      keepAlive: true
    }
  }, {
    path: '/order/mineList',
    name: 'doctorMineOrderList',
    component: mineOrderList,
    meta: {
      title: '所有订单',
      keepAlive: true
    }
  }, {
    path: 'personal',
    name: 'doctorPersonalIndex',
    component: personalIndex,
    meta: {
      title: '我的',
      keepAlive: true
    }
  }],
  meta: {
    keepAlive: true
  }
}]
