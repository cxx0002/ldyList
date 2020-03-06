import Vue from 'vue'
import Router from 'vue-router'

const Kxs = () => import('@/pages/kxs')
const Zy = () => import('@/pages/zy')
const Sc = () => import('@/pages/sc')
const Ydq = () => import('@/pages/ydq')
const Index = () => import('@/ldy')
Vue.use(Router)
export default new Router({
  mode: "hash",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/kxs',
      name: 'Kxs',
      component: Kxs,
    },
    {
      path: '/sc',
      name: 'Sc',
      component: Sc,
    },
    {
      path: '/ydq',
      name: 'Ydq',
      component: Ydq,
    },
    {
      path: '/zy',
      name: 'Zy',
      component: Zy,
    },
    
  ]
})
