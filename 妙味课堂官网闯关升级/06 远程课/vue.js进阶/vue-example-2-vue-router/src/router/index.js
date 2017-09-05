import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/components/home'
import about from '../components/about'
import document from '@/components/document'
// import noFound from '@/components/404.vue'
import study from '@/components/about/study'
import work from '@/components/about/work'
import hobby from '@/components/about/hobby'
import slider from '@/components/slider'
import user from '@/components/user'

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savePosition) {
    // 点击浏览器的前进后退或者切换导航的时候才会触发
    // console.log(to) // 要进入的目标路由对象，要到哪里去
    // console.log(from) // 离开的路由对象，从哪里来
    // console.log(savePosition) // 记录滚动条的坐标，只有在点击前进后退的时候记录值
    // if (savePosition) {
    //   return savePosition
    // } else {
    //   return {x: 0, y: 0}
    // }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      component: home,
      meta: {
        index: 0,
        title: 'home'
      }
    },
    {
      path: '/user/:userType?/:userId?',
      component: user,
      meta: {
        index: 3,
        title: 'user'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      alias: '/index'
    },
    {
      path: '/document',
      name: 'Docunment',
      components: {
        default: document,
        slider
      },
      meta: {
        index: 1,
        login: true,
        title: 'document'
      },
      beforeEnter (to, from, next) {
        console.log('befroreEnter')
        next()
      }
    },
    {
      path: '/about',
      component: about,
      children: [
        {
          path: '', // 默认的子路由
          name: 'About',
          component: study,
          meta: {
            index: 2,
            title: 'about'
          }
        },
        {
          path: '/work', // 渲染出来的路径： /work
          name: 'Work',
          component: work
        },
        {
          path: 'hobby', // 渲染出来的路径： /about/hobby
          name: 'Hobby',
          component: hobby
        }
      ]
    },
    {
      path: '*',
      // component: noFound
      // 重定向
      // redirect: '/home'
      // redirect: { path: '/home' }
      // redirect: {name: 'About'}
      redirect: (to) => {
        // 动态设置重定向的目标

        // console.log(to)
        // to是目标路由对象，就是我们访问的路径的路由信息

        if (to.path === '/123') {
          return '/home'
        } else if (to.path === '/456') {
          return {path: '/document'}
        }
      }
    }
  ]
})

/*
router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  // next()
  // next(false)

  // if (to.meta.login) {
  //   next('/login')
  // } else {
  //   next()
  // }

  next()
})
*/

/*
router.afterEach((to, from) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = 'luwei'
  }
})
*/

export default router
