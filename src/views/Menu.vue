<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Monster Slayer</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="pathNames.character"
              >Character</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="pathNames.dungeons"
              >Dungeon</router-link
            >
          </li>
        </ul>
        <button class="btn btn-outline-success my-2 my-sm-0" @click="logout()">
          <fa-icon icon="sign-out-alt"></fa-icon>
          Logout
        </button>
      </div>
    </nav>
  </div>
</template>
<script>
import PathNames from "../configuration/routerPath/pathNames";
import SessionMixin from "../mixins/session-mixin";
import RouterMixin from "../mixins/router-mixin";
import pathNames from "../configuration/routerPath/pathNames";
export default {
  mixins: [SessionMixin, RouterMixin],
  data() {
    return {
      pathNames: PathNames
    };
  },
  methods: {
    logout() {
      this.destroySession();
      this.redirectTo(pathNames.login);
    }
  }
};
</script>
