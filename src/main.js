import Vue from "vue";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import Vuelidate from 'vuelidate';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSession from 'vue-session';
import ScrollBar from 'vue2-scrollbar'
import AppLoader from "./components/common/Loader";
import ToastMixin from './mixins/toast-mixin.vue';
import SessionMixin from './mixins/session-mixin.vue';

library.add(fas);
Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('apploader', AppLoader)

Vue.use(VueSession, {persist: true});
Vue.use(Vuelidate);
Vue.use(ScrollBar);
Vue.use(VueToast);

Vue.mixin(ToastMixin);
Vue.mixin(SessionMixin)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
