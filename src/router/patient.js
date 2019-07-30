import index from '@/pages/patient/index'
import home from '@/pages/patient/home/home'
import consultList from '@/pages/patient/consult/consultList'
import fillMessage from '@/pages/patient/personal/fillMessage'
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
import everyday from '@/pages/patient/evaluate/everyday';
import today from '@/pages/patient/evaluate/today';
import broadHeading from '@/pages/patient/analgesia/broadHeading';
import explainDetail from '@/pages/patient/analgesia/explainDetail';
import mineReportList from '@/pages/patient/report/mineReportList';

export default [{
  path: '/patient/report/mineList',
  component: mineReportList,
  meta: {
    title: '我的报告',
    rank: 1
  }
}, {
  path: '/patient/analgesia/explainDetail',
  component: explainDetail,
  meta: {
    title: '微创镇痛技术',
    rank: 3
  }
}, {
  path: '/patient/analgesia/broadHeading',
  component: broadHeading,
  meta: {
    title: '微创镇痛技术',
    rank: 1
  }
}, {
  path: '/patient/evaluate/today',
  component: today,
  meta: {
    title: '今日评估',
    rank: 2
  }
}, {
  path: '/patient/evaluate/everyday',
  component: everyday,
  meta: {
    title: '每日评估',
    rank: 1
  }
}, {
  path: '/patient/archives/healthy',
  component: healthy,
  meta: {
    title: '健康档案',
    rank: 1
  }
}, {
  path: '/patient/consult/imageText',
  component: imageTextConsult,
  meta: {
    title: '图文咨询',
    rank: 6
  }
}, {
  path: '/patient/consult/payResultConsult',
  component: payResultConsult,
  meta: {
    title: '订单详情',
    rank: 5
  }
}, {
  path: '/patient/consult/payConsult',
  component: payConsult,
  meta: {
    title: '确认支付',
    rank: 4
  }
}, {
  path: '/patient/consult/buyConsult',
  component: buyConsult,
  meta: {
    title: '购买咨询',
    rank: 3
  }
}, {
  path: '/patient/doctor/doctorDetail',
  component: doctorDetail,
  meta: {
    title: '医生主页',
    rank: 2
  }
}, {
  path: '/patient/doctor/doctorList',
  component: doctorList,
  meta: {
    title: '专家团队',
    rank: 1
  }
}, {
  path: '/patient/order/mineList',
  component: mineOrderList,
  meta: {
    title: '订单记录',
    rank: 1
  }
}, {
  path: '/patient/personal/message',
  component: personalMessage,
  meta: {
    title: '我的资料',
    rank: 1
  }
}, {
  path: '/patient/fill-message',
  component: fillMessage,
  meta: {
    title: '基本信息',
    rank: 1
  }
}, {
  path: '/patient',
  name: 'patientIndex',
  component: index,
  children: [{
    path: 'consult/list',
    name: 'patientConsultList',
    component: consultList,
    meta: {
      title: '咨询',
      keepAlive: true
    }
  }, {
    path: 'personal',
    name: 'patientPersonalIndex',
    component: personal,
    meta: {
      title: '我的',
      keepAlive: true
    }
  }, {
    path: '',
    name: 'patientHome',
    component: home,
    meta: {
      keepAlive: true
    }
  }],
  meta: {
    keepAlive: true
  }
}]
