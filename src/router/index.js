import { createRouter, createWebHistory } from "vue-router";
import CountryListView from "@/views/CountryListView.vue";
import CountryDetailView from "@/views/CountryDetailView.vue";
import LoginView from "@/views/LoginView.vue";

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
  {
    path: '/oauth2/callback/google',
    name: 'AuthCallback',
    component: () => import('@/views/AuthCallback.vue')
  },
  {
    path: "/country/:id",
    name: "CountryDetailView",
    component: CountryDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
