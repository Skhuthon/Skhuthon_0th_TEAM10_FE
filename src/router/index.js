import { createRouter, createWebHistory } from "vue-router";
import CountryListView from "@/views/CountryListView.vue";
import CountryDetailView from "@/views/CountryDetailView.vue";
import LoginView from "@/views/LoginView.vue";
import CityListView from "@/views/CityListView.vue";
import CityDetailView from "@/views/CityDetailView.vue";
import ReviewAddView from "@/views/ReviewAddView.vue";
import MyPageView from "@/views/MyPageView.vue";

const routes = [
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/",
    name: "CountryListView",
    component: CountryListView,
  },
  {
    path: "/api/oauth2/callback/google",
    name: "AuthCallback",
    component: () => import("@/views/AuthCallback.vue"),
  },
  {
    path: "/country/:countryId",
    name: "CountryDetailView",
    component: CountryDetailView,
  },
  {
    path: "/cities/:id",
    name: "CityListView",
    component: CityListView
  },
  {
    path: "/city/:id",
    name: "CityDetailView",
    component: CityDetailView
  },
  {
    path: "/addReview/:id",
    name: "ReviewAddView",
    component: ReviewAddView
  },
  {
    path: "/myPage",
    name: "MyPageView",
    component: MyPageView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
