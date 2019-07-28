import index from '@/pages/doctor/index'
import home from '@/pages/doctor/home/home'

export default [{
  path: '/doctor',
  name: 'index',
  component: index,
  children: [{
    path: '',
    name: 'doctorHome',
    component: home,
    meta: {
      keepAlive: true
    }
  }],
  meta: {
    keepAlive: true
  }
}]
