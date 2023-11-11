import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About/AboutPage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact/ContactPage.vue')
  },
  {
    path: '/meals/:id',
    name: 'mealPage',
    component: () => import('@/views/Meal/MealPage.vue')
  },
  {
    path: '/area/:area',
    name: 'areaPage',
    component: () => import('@/views/Area/AreaPage.vue')
  },
  {
    path: '/category/:category',
    name: 'categoryPage',
    component: () => import('@/views/Category/CategoryPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router