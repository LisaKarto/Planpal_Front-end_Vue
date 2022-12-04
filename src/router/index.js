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
    path: '/lijsten',
    name: 'lijsten',
    component: () => import('../views/LijstenView.vue')
  },
  {
    path: '/lijst/:idlijst',
    name: 'lijst',
    props: {
      default: true,
    },
    component: () => import('../views/LijstBeherenView.vue')
  },
  {
    path: '/Profile',
    name: 'ProfileComponent',
    component: () => import('../components/Users/Profile.vue'),
    beforeEnter: authenticationGuard,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
