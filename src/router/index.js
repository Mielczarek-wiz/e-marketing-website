import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductsFishView from '@/views/ProductsFishView.vue'
import ProductsDishesView from '@/views/ProductsDishesView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    visibleInMenu: true,
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    visibleInMenu: true,
    component: AboutView
  },
  {
    path: '/products',
    name: 'products',
    visibleInMenu: true,
    component: ProductsView
  },
  {
    path: '/products/fish',
    name: '',
    visibleInMenu: false,
    component: ProductsFishView
  },
  {
    path: '/products/dishes',
    name: '',
    visibleInMenu: false,
    component: ProductsDishesView
  },
  {
    path: '/game',
    name: 'game',
    visibleInMenu: true,
    component: () => import('../views/GameView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    visibleInMenu: true,
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
