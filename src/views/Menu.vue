<template>
  <div class="app-links">
    <router-link :to="pathNames.character" class="btn-principal">Character</router-link>
    <router-link :to="pathNames.dungeons" class="btn-principal">Dungeons</router-link>
    <button class="btn-principal logout-button" @click="logout()">Logout</button>

  </div>
</template>
<script>
import PathNames from '../configuration/routerPath/pathNames';
import SessionMixin from '../mixins/session-mixin';
import RouterMixin from '../mixins/router-mixin'
import pathNames from '../configuration/routerPath/pathNames';
export default {
    mixins: [SessionMixin, RouterMixin],
    data() {
        return {
            pathNames: PathNames
        }
    },
    methods: {
        logout() {
            this.destroySession();
            this.redirectTo(pathNames.login);
        }
    }
};
</script>
