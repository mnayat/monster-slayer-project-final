import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/account/Login.vue';
import Register from '../views/account/Registration.vue';
import Character from '../views/character/Character.vue';
import Inventory from '../views/character/Inventory.vue';
import Skills from '../views/character/Skills.vue';
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
  },
  {
    path: "/character",
    name: "Character",
    component: Character,
    children: [
      // {
      //   path: '/character/inventory',
      //   name: 'Inventory',
      //   component: Inventory
      // },
      {
        path: '/skills',
        name: 'Skills',
        component: Skills
      }
    ]
  },
  {
    path: '/character/inventory',
    name: 'Inventory',
    component: Inventory
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
