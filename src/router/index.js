import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/account/Login.vue';
import Register from '../views/account/Registration.vue';
import Character from '../views/character/Character.vue';
import Dungeons from '../views/character/Dungeons.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/account/Login.vue")
  },
  {
    path: "/character",
    name: "Character",
    component: Character
  },
  {
    path: "/dungeons",
    name: "Dungeons",
    component: Dungeons
  }
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
