import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/components/Welcome'
import login from '@/components/login'
import register from '@/components/register'
import forget from '@/components/forget'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      // redirect: '/login',
      alias: '/Welcome/login',
      component: Welcome,
      children: [{
        path: '/',
        name: 'root',
        component: login
      }, ]
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome,
      children: [{
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: 'register',
          name: 'register',
          component: register
        },
        {
          path: 'forget',
          name: 'forget',
          component: forget
        },

      ]
    },
    {
      path: '/TestModel',
      name: 'TestModel',
      component: () => import('@/components/TestModel'),
      // children: [{
      //   path: '/demo01',
      //   name: 'demo01',
      //   component: () => import('@/components/demo01')
      // }, {
      //   path: '/demo02',
      //   name: 'demo02',
      //   component: () => import('@/components/demo02')
      // }]
    }
  ]
})
