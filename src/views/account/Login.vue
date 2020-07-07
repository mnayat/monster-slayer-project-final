<template>
  <div class="container-fluid imgbackground">
    <div class=" row login-box">
      <form novalidate>
        <div class="form-group">
          <h5 class="card-title text-center">Login</h5>
          <hr />
          <fa-icon icon="user"></fa-icon
          ><label for="username" class="pl-2 font-weight-bold">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="username "
            v-model="account.username"
            :class="{
              'is-invalid': $v.account.username.$error,
            }"
            @blur="$v.account.username.$touch()"
          />
          <p
            class="text-white text-left"
            v-if="!$v.account.username.required && $v.account.username.$dirty"
          >
            Username is required!
          </p>
        </div>
        <div class="form-group">
          <fa-icon icon="key"></fa-icon
          ><label for="pass" class="pl-2 font-weight-bold">Password</label>
          <input
            type="password"
            class="form-control form-control-sm"
            id="password"
            autocomplete="on"
            placeholder="Password"
            v-model="account.password"
            :class="{
              'is-invalid': $v.account.password.$error,
            }"
            @blur="$v.account.password.$touch()"
          />
          <p
            class="text-white text-left"
            v-if="!$v.account.password.required && $v.account.password.$dirty"
          >
            Password is required!
          </p>
        </div>
        <button @click.prevent="login" class="btn btn-success mt-3 btn-block">
          <fa-icon icon="sign-in-alt"></fa-icon>Login
        </button>
        <router-link class="btn btn-success mt-3 btn-block  " to="/register">
          <fa-icon icon="user-plus"></fa-icon>
          Register
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import accountActions from "./../../configuration/actionNames/account-action";
export default {
  name: "Login",
  data() {
    return {
      account: {
        username: "",
        password: "",
      },
    };
  },
  validations: {
    account: {
      username: { required },
      password: { required },
    },
  },

  methods: {
    login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store
          .dispatch(accountActions.login, this.account)
          .then((resp) => {
            console.log(resp);
            console.log(
              "store ",
              +  this.$store.getters["accountModules/getAccountIdStores"]
            );
            this.$session.start();
            this.$session.set(
              "account-id",
              this.$store.state.accountModule.player.accountId
              //this.accountId()
            );
          });
      }
    },
  },
};
</script>

<style>
.imgbackground {
  margin-top: 5vh;
  background: url("../../assets/background/splash-screen.gif");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 1280px;
  height: 620px;
}
.custom-margin {
  margin-top: 10vh;
}
.custom-border {
  border: 5px solid rgba(255, 255, 255, 0.3);
}

.login-box {
  width: 300px;
  height: 400px;
  background: rgba(216, 214, 214, 0.5);
  color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 10px 50px;
}
</style>
