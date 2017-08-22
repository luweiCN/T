// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 使用的是相对路径，加载的是同目录下的App.vue文件可以省略后缀名，在webpack里设置的
import router from './router' // 加载router文件夹下的的index.js文件，加载某文件夹下的index文件可以只简写文件夹路径

Vue.config.productionTip = false // 关闭生产环境的一些提示

var test = true

var func = test => {

}

/* eslint-disable no-new */
new Vue({
  el: '#app', // 以id为app元素作为挂载点
  router, // 路由，ES6的简写
  template: '<App/>', // 应用的模版
  components: { App }
})
