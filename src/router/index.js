import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Rest from '@/pages/rest/index'
import Running from '@/pages/running/index'
import About from '@/pages/about/index'
import Login from '@/pages/login/index'
import Details from '@/pages/details/index'
import Issue from '@/pages/issue/index'
import Information from '@/pages/information/index'
import MapIndex from '@/pages/map/index'
import UserInfo from '@/pages/userinfo/index'
import Friend from '@/pages/friend/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/rest',
      name: 'Rest',
      component: Rest
    },
    {
      path: '/running',
      name: 'Running',
      component: Running
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/issue',
      name: 'Issue',
      component: Issue
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/map',
      name: 'MapIndex',
      component: MapIndex
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    }
  ]
})
