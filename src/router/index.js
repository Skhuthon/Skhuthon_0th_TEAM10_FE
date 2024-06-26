import { createRouter, createWebHistory } from 'vue-router'
import CountryListView from '@/views/CountryListView.vue'
import CountryDetailView from '@/views/CountryDetailView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/country-list',
    name: 'CountryListView',
    component: CountryListView
  },
  {
    path: '/country-detail/:id',
    name: 'CountryDetailView',
    component: CountryDetailView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
