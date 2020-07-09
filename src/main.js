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
import ScrollBar from 'vue2-scrollbar'
// import loader from "./components/common/Loader";

library.add(fas);
Vue.component('fa-icon', FontAwesomeIcon)
// Vue.component('loader', loader)

Vue.use(VueSession);
Vue.use(Vuelidate);
Vue.use(ScrollBar);

Vue.config.productionTip = false;
Vue.mixin({
  created() {
    console.log('[created] ' + this.$options.name)
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
