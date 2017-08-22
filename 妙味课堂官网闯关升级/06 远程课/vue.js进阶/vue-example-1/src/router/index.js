import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello' // 加载Hello组件，@代表src目录

Vue.use(Router) // 安装vue-route插件

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
