import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/account/Login.vue';
import Register from '../views/account/Registration.vue';
import Character1 from '../views/character/Character1.vue';
import Inventory from '../views/character/Inventory.vue';
import Skills from '../views/character/Skills.vue';
import Dungeons from '../views/character/Dungeons.vue';
import LayoutDefault from '../layouts/LayoutDefault.vue';
import Battle from '../views/dungeons/battle.vue';
import CharacterDefault from '../layouts/CharacterDefault.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: LayoutDefault }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { layout: LayoutDefault }
  },
  {
    path: "/character/",
    name: "Character",
    component: Character1,
    children: [
      {
        path: 'inventory',
        name: 'Inventory',
        component: Inventory,
        meta: { layout: CharacterDefault }
      },
      {
        path: '/skills',
        name: 'Skills',
        component: Skills,
        meta: { layout: CharacterDefault }
      }
    ],
    meta: { layout: CharacterDefault }

  },
 
  {
    path: "/dungeons",
    name: "Dungeons",
    component: Dungeons
  },
  {
    path: "/battle",
    name: "Battle",
    component: Battle
  },
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
