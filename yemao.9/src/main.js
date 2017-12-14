// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* v-tap */
import vueTap from 'v-tap'
import { Datetime, Group } from 'vux'
import $ from '../utils/jquery-3.2.1.min';

Vue.config.productionTip = false

// v-tap
Vue.use(vueTap)

// vux components
Vue.component(Datetime.name, Datetime)
Vue.component(Group.name, Group)

window.jQuery = $
window.$ = $

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
