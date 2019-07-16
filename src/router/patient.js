import patientIndex from '@/pages/patient/index'
import patientHome from '@/pages/patient/home/home'

export default [{
  path: '/patient/home',
  name: 'patientHome',
  component: patientHome
}, {
  path: '/patient/index',
  name: 'patientIndex',
  component: patientIndex
}]
