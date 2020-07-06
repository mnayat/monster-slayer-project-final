import Vue from "vue";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vuelidate from 'vuelidate';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSession from 'vue-session';


library.add(fas);
Vue.component('fa-icon', FontAwesomeIcon)

Vue.use(VueSession);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
