import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/account/Login.vue';
import Register from '../views/account/Registration.vue';
import Character from '../views/character/Character.vue';
import Inventory from '../views/character/Inventory.vue';
import Skills from '../views/character/Skills.vue';
import Dungeons from '../views/character/Dungeons.vue';
import LayoutDefault from '../layouts/LayoutDefault.vue';
import Battle from '../views/dungeons/Battle.vue';
import CharacterDefault from '../layouts/CharacterDefault.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '*',
    redirect: '/'
  },
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
    path: "/character",
    name: "Character",
    component: Character,
    meta: { layout: CharacterDefault }
  },
  {
    path: '/character/inventory',
    name: 'Inventory',
    component: Inventory,
    meta: { layout: CharacterDefault }
  },
  {
    path: '/character/skills',
    name: 'Skills',
    component: Skills,
    meta: { layout: CharacterDefault }
  },
  {
    path: "/dungeons",
    name: "Dungeons",
    component: Dungeons,
    meta: { layout: CharacterDefault }
  },
  {
    path: "/battle",
    name: "Battle",
    component: Battle,
    meta: { layout: CharacterDefault }
  },
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = Vue.prototype.$session.exists();
  let allowAnonymous = ["Login", "Register"];

  if (allowAnonymous.includes(to.name) && isAuthenticated) {
    next('/character');
  }
  else if (!allowAnonymous.includes(to.name) && !isAuthenticated) {
    next('')
  }
  else {
    next();
  }
});
export default router;
