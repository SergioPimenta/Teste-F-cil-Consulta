import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detalhes',
    name: 'detalhes',
    
    component: () => import(/* webpackChunkName: "detalhes" */ '../views/Detalhes.vue')
  },
  {
    path: '/revisão',
    name: 'Revisão',
    
    component: () => import(/* webpackChunkName: "revisão" */ '../views/Revisão.vue')

  },

  {
    path: '/concluido',
    name: 'Concluido',
    
    component: () => import(/* webpackChunkName: "concluido" */ '../views/Concluido.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
