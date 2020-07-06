<template>
  <div>
    <div align="center">
      <div class="card" style="width: 30rem;">
        <div class="card-body">
          <h5 class="card-title">Login</h5>
          <form novalidate class="form-horizontal">
            <div class="form-group row">
              <label for="username" class="col-sm-3"><b> Username: </b> </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="username"
                  placeholder="User name"
                  v-model="account.username"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="password" class="col-sm-3"><b> Password: </b> </label>
              <div class="col-sm-9">
                <input
                  type="password"
                  class="form-control form-control-sm"
                  id="password"
                  autocomplete="on"
                  placeholder="Password"
                  v-model="account.password"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <button
                  class="btn btn-success btn-block"
                  @click.prevent="login()"
                >
                  <fa-icon icon="sign-in-alt"></fa-icon>
                  Login
                </button>
              </div>
              <div class="col-md-6">
                <router-link class="btn btn-primary btn-block" to="/register">
                  <fa-icon icon="user-plus"></fa-icon>
                  Register
                </router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      account: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch("accountModule/loginAsync", this.account)
        .then((resp) => {
          console.log(resp);
          console.log(
            "store " + this.$store.state.accountModule.player.accountId
          );
          this.$session.start();
          this.$session.set(
            "account-id",
            this.$store.state.accountModule.player.accountId
          );
        });
    }
  }
};
</script>

<style></style>
