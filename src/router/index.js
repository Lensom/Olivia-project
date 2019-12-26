import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "mainLayout" },
    component: Home
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "authLayout" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/registration",
    name: "registration",
    meta: { layout: "authLayout" },
    component: () => import("../views/Registration.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
