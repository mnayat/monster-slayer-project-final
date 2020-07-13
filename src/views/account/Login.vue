<template>
  <div>
    <apploader :showLoader="showLoader" />
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
              'is-invalid': $v.account.username.$error
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
              'is-invalid': $v.account.password.$error
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
        <p v-if="errormessage != ''" class="error text-center">
          {{ errormessage }}
        </p>
        <button @click.prevent="login" class="btn btn-success mt-3 btn-block">
          <fa-icon icon="sign-in-alt"></fa-icon>Login
        </button>
        <router-link class="btn btn-primary mt-3 btn-block" to="/register">
          <fa-icon icon="user-plus"></fa-icon>
          Create Account
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import accountActions from "./../../configuration/actionNames/account-action";
import SessionMixin from "../../mixins/session-mixin";
import RouterMixin from "../../mixins/router-mixin";
import sessionKeys from "../../configuration/session/sessionKeys";
import PathNames from "../../configuration/routerPath/pathNames";
import pathNames from "../../configuration/routerPath/pathNames";
export default {
  name: "Login",

  mixins: [SessionMixin, RouterMixin],
  data() {
    return {
      account: {
        username: "",
        password: ""
      },
      showStart: false,
      showLoader: false,
      showError: false,
      errormessage: ""
    };
  },
  validations: {
    account: {
      username: { required },
      password: { required }
    }
  },
  methods: {
    login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.showLoader = true;
        this.$store
          .dispatch(accountActions.login, this.account)
          .then((resp) => {
            if (resp === true) {
              var getAccountid = this.$store.getters[
                "accountModule/getAccountId"
              ];
              this.startSession();
              this.setSession(sessionKeys.account, getAccountid);
              this.getCharacter(getAccountid);

            } else {
              this.errormessage = resp.data.error;
            }
            this.showLoader = false;
          });
      }
    },
    getCharacter(accountId) {
      this.$store
        .dispatch(accountActions.character, accountId)
        .then((resp) => {
          console.log(this.$store.getters);
          this.setSession(
            sessionKeys.character,
            this.$store.getters["accountModule/getCharacterId"]
          );
          this.redirectTo(pathNames.character);
        })
        .catch(() => {
          // dapat maglagay ng invalid username or password.
        });
    }
  }
};
</script>
