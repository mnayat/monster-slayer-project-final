import Vue from "vue";
import Vuex from "vuex";

import { accountModule } from './account-module';
import { characterModule } from './character-module';
import { dungeonModule } from './dungeon-module';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    accountModule,
    characterModule,
    dungeonModule
  }
});
