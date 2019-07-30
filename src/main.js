import Vue from 'vue'
import App from './App'
import router from './router'
import sdk from './sdk'
import moContent from '@/components/moContent'
import llBox from '@/components/llBox'
import llCell from '@/components/llCell'
import llPopupPanel from '@/components/llPopupPanel'
import Vant from 'vant'
import utils from './utils'
import http from './utils/http'
import Mui from 'vue-awesome-mui'
import store from './store'
import storage from './utils/storage.js'
import VueLazyload from 'vue-lazyload'
import 'vant/lib/index.css'
import './sdk/online'
import 'amfe-flexible/index.js'
import '@/assets/js/rem.js'

Vue.use(VueLazyload)
Vue.use(Mui);
Vue.use(Vant);
Vue.component(moContent.name, moContent);
Vue.component(llBox.name, llBox);
Vue.component(llCell.name, llCell);
Vue.component(llPopupPanel.name, llPopupPanel);
Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.$utils = utils;
Vue.prototype.$storage = storage;

let option = {
  router,
  store,
  render: h => h(App)
};

if (sdk.isPlus) {
  if (window.plus) {
    new Vue(option).$mount('#app');
  } else {
    document.addEventListener("plusready", () => {
      new Vue(option).$mount('#app');
    }, false);
  }
} else {
  new Vue(option).$mount('#app');
}
