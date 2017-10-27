// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import store from './store'
// import $ from 'jquery'
import VR from 'vue-resource'

Vue.prototype.axios = axios
Vue.prototype.HOST = '/api'

Vue.use(VR)
Vue.config.productionTip = false

axios.defaults.timeout = 5000
const baseURL = '/api'
axios.defaults.baseURL = baseURL

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
