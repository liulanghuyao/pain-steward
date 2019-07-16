import patientIndex from '@/pages/patient/index'
import patientHome from '@/pages/patient/home/home'

export default [{
  path: '/patient/index',
  name: 'patientIndex',
  component: patientIndex,
  children: [{
    path: '/patient/home',
    name: 'patientHome',
    component: patientHome
  }]
}]
