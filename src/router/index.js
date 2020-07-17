import Vue from "vue";
import VueRouter from "vue-router";
import AccountRoutes from './account-route';
import CharacterRoutes from './character-route';

Vue.use(VueRouter);
const routes = [...AccountRoutes, ...CharacterRoutes];

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
