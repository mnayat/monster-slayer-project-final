import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/account/Login.vue';
import Register from '../views/account/Registration.vue';
import Character from '../views/character/Character.vue';
import Inventory from '../views/character/Inventory.vue';
import Skills from '../views/character/Skills.vue';
import Dungeons from '../views/character/Dungeons.vue';
import LayoutAuth from '../layouts/_Layout-Auth.vue';
import Battle from '../views/dungeons/Battle.vue';
import MainLayout from '../layouts/_Layout.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: LayoutAuth }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { layout: LayoutAuth }
  },
  {
    path: "/character",
    name: "Character",
    component: Character,
    meta: { layout: MainLayout }
  },
  {
    path: '/character/inventory',
    name: 'Inventory',
    component: Inventory,
    meta: { layout: MainLayout }
  },
  {
    path: '/character/skills',
    name: 'Skills',
    component: Skills,
    meta: { layout: MainLayout }
  },
  {
    path: "/dungeons",
    name: "Dungeons",
    component: Dungeons,
    meta: { layout: MainLayout }
  },
  {
    path: "/battle",
    name: "Battle",
    component: Battle,
    meta: { layout: MainLayout }
  }
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
