// 类使用大写
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import './theme/iview.less';
import { RestPlugin } from './rest/index'
// 对象使用小写
import router from './router/index'
import store from './store/index'
import i18n from './i18n/index'

Vue.use(VueRouter)
Vue.use(ViewUI);
Vue.use(RestPlugin)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store,
  i18n,
}).$mount('#app')
