import Vue from 'vue'
import VueRouter from 'vue-router'

// 把VueRoute作为Vue的插件
Vue.use(VueRouter)

import App from './App'
import home from '@/components/home.vue'

/* eslint-disable no-new */
var homeRouter = new VueRouter({
  routes: [
    {
      path: '/',
      component: home
    }
  ]
})

new Vue({
  el: '#app',
  router: homeRouter,
  template: '<App />',
  components: {
    App
  }
})
