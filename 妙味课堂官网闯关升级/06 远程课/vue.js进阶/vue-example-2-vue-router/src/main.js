import Vue from 'vue'
import App from './App'

import router from '@/router'

import '@/assets/css/app.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: {
    App
  }
})
