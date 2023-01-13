import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authenticationGuard } from '@/auth/authenticationGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lists',
    name: 'ListsView',
    component: () => import('../views/Lists/ListsView.vue'),
    beforeEnter: authenticationGuard
  },
  {
    path: '/list/:idList',
    name: 'ListManagementView',
    props: {
      default: true,
    },
    component: () => import('../views/Lists/ListManagementView.vue'),
    beforeEnter: authenticationGuard
  },
  {
    path: '/Profile',
    name: 'ProfileComponent',
    component: () => import('../components/Auth0/Users/Profile.vue'),
    beforeEnter: authenticationGuard,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
