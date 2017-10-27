import Vue from 'vue'
import Router from 'vue-router'
import Firstpage from '@/components/Firstpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstpage',
      component: Firstpage
    }
  ]
})
