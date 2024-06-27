import { createRouter, createWebHistory } from 'vue-router'
import CountryListView from '@/views/CountryListView.vue'
// import CountryDetailView from '@/views/CountryDetailView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/',
    name: 'CountryListView',
    component: CountryListView
  },
  // {
  //   path: '/country-detail/:id',
  //   name: 'CountryDetailView',
  //   component: CountryDetailView
  // },
  {
    path: '/oauth2/callback/google',
    name: 'AuthCallback',
    component: () => import('@/views/AuthCallback.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
