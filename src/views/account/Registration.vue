<template>
  <div>
    <apploader :showLoader="showLoader"></apploader>
    <div align="center" class="imgbackground registration-box">
      <div class="card" style="width: 60rem;">
        <div class="card-body">
          <h4 class="card-title text-white">
            <b>Registration</b>
          </h4>
          <form novalidate class="form-horizontal">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group row">
                  <label for="fullName" class="col-sm-3 text-white text-left"
                    ><b> Full Name:</b>
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="fullName"
                      placeholder="Full Name"
                      v-model.lazy="accountDetails.fullName"
                      :class="{
                        'is-invalid': $v.accountDetails.fullName.$error
                      }"
                      @blur="$v.accountDetails.fullName.$touch()"
                    />
                    <p
                      class="text-white text-left"
                      v-if="
                        !$v.accountDetails.fullName.required &&
                          $v.accountDetails.fullName.$dirty
                      "
                    >
                      Full Name is required!
                    </p>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="email" class="col-sm-3 text-white text-left"
                    ><b> Email: </b>
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control form-control-sm "
                      id="email"
                      placeholder="Email"
                      v-model.lazy="accountDetails.email"
                      :class="{ 'is-invalid': $v.accountDetails.email.$error }"
                      @blur="$v.accountDetails.email.$touch()"
                    />
                    <p
                      class="text-white text-left"
                      v-if="
                        !$v.accountDetails.email.required &&
                          $v.accountDetails.email.$dirty
                      "
                    >
                      Email is required!
                    </p>
                    <p
                      class="text-white text-left"
                      v-if="
                        !$v.accountDetails.email.email &&
                          $v.accountDetails.email.required &&
                          $v.accountDetails.email.$dirty
                      "
                    >
                      Invalid email!
                    </p>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="username" class="col-sm-3 text-white text-left"
                    ><b> Username: </b>
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="username"
                      placeholder="User name"
                      v-model.lazy="accountDetails.username"
                      :class="{
                        'is-invalid': $v.accountDetails.username.$error
                      }"
                      @blur="$v.accountDetails.username.$touch()"
                    />
                    <p
                      class="text-white text-left"
                      v-if="
                        !$v.accountDetails.username.required &&
                          $v.accountDetails.username.$dirty
                      "
                    >
                      User Name is required!
                    </p>
                    <p
                      class="text-white text-left"
                      v-if="
                        !$v.accountDetails.username.minLength &&
                          $v.accountDetails.username.required &&
                          $v.accountDetails.username.$dirty
                      "
                    >
                      username must have at least
                      {{ $v.accountDetails.username.$params.minLength.min }}
                      characters!
                    </p>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="password" class="col-sm-3 text-white text-left"
                    ><b> Password: </b>
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      id="password"
                      autocomplete="on"
                      placeholder="Password"
                      v-model.lazy="accountDetails.password"
                      :class="{
                        'is-invalid': $v.accountDetails.password.$error
                      }"
                      @blur="$v.accountDetails.password.$touch()"
                    />
                    <p
                      class="text-white text-left"
                      v-if="
                        !$v.accountDetails.password.required &&
                          $v.accountDetails.password.$dirty
                      "
                    >
                      Password is required!
                    </p>
                    <p
                      class="text-white text-left"
                      v-if="
                        !$v.accountDetails.password.minLength &&
                          $v.accountDetails.password.required &&
                          $v.accountDetails.password.$dirty
                      "
                    >
                      Password must have at least
                      {{ $v.accountDetails.password.$params.minLength.min }}
                      characters!
                    </p>
                  </div>
                </div>
                <hr />
                <div class="form-group row">
                  <label
                    for="characterName"
                    class="col-sm-3 text-white text-left"
                    ><b> Alias: </b>
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="characterName"
                      placeholder="Alias"
                      v-model.lazy="accountDetails.characterName"
                      :class="{
                        'is-invalid': $v.accountDetails.characterName.$error
                      }"
                      @blur="$v.accountDetails.characterName.$touch()"
                    />
                    <p
                      class="text-white text-left"
                      v-if="
                        !$v.accountDetails.characterName.required &&
                          $v.accountDetails.characterName.$dirty
                      "
                    >
                      Alias is required!
                    </p>
                    <p
                      class="text-white text-left"
                      v-if="
                        !$v.accountDetails.characterName.minLength &&
                          $v.accountDetails.characterName.required &&
                          $v.accountDetails.characterName.$dirty
                      "
                    >
                      Alias must have at least
                      {{
                        $v.accountDetails.characterName.$params.minLength.min
                      }}
                      characters!
                    </p>
                    <p
                      class="text-white text-left"
                      v-if="
                        !$v.accountDetails.characterName.maxLength &&
                          $v.accountDetails.characterName.required &&
                          $v.accountDetails.characterName.$dirty
                      "
                    >
                      >The maximum length of character for Alias is
                      {{
                        $v.accountDetails.characterName.$params.maxLength.max
                      }}!>
                    </p>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="character" class="col-sm-3 text-white text-left"
                    ><b> Character: </b>
                  </label>
                  <div class="col-sm-9">
                    <select
                      class="form-control form-control-sm"
                      id="character"
                      v-model="accountDetails.classType"
                      :class="{
                        'is-invalid': $v.accountDetails.classType.$error
                      }"
                      @blur="$v.accountDetails.classType.$touch()"
                    >
                      <option
                        v-for="character in getHardCodedCharactersData"
                        :key="character.characterId"
                        :value="character.characterId"
                      >
                        {{ character.name }}
                      </option>
                    </select>
                    <p
                      class="text-white text-left"
                      v-if="
                        !$v.accountDetails.classType.required &&
                          $v.accountDetails.classType.$dirty
                      "
                    >
                      Character is required!
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6" v-if="selectedCharacter !== undefined">
                <div class="alert alert-success" role="alert">
                  {{ selectedCharacter.description }}
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <img :src="selectedCharacter.img" />
                  </div>

                  <div class="col-md-6">
                    <div
                      v-for="(attribute, i) in selectedCharacter.attributes"
                      :key="i"
                      style="padding-bottom:10px;"
                    >
                      <p class="text-white text-left">
                        <b>
                          {{ attribute.attribute }}
                        </b>
                      </p>
                      <app-progress-bar
                        :currentValue="attribute.level"
                      ></app-progress-bar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <button
                  class="btn btn-success btn-block"
                  @click.prevent="register()"
                >
                  <fa-icon icon="save"></fa-icon>
                  Save
                </button>
              </div>
              <div class="col-md-6">
                <router-link class="btn btn-primary btn-block" to="/">
                  <fa-icon icon="sign-in-alt"></fa-icon>
                  Back to Log In
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
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import accountActions from "./../../configuration/actionNames/account-action";
import ProgressBar from "../../components/common/ProgressBar";
import CharacterMixin from "../../mixins/character-mixin";
export default {
  mixins: [CharacterMixin],
  components: {
    appProgressBar: ProgressBar
  },
  data() {
    return {
      accountDetails: {
        fullName: "",
        email: "",
        username: "",
        password: "",
        characterName: "",
        classType: ""
      },
      showLoader: false
    };
  },
  validations: {
    accountDetails: {
      fullName: { required },
      email: { required, email },
      username: { required, minLength: minLength(6) },
      password: { required, minLength: minLength(6) },
      characterName: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      },
      classType: { required }
    }
  },
  methods: {
    register() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.showLoader = !this.showLoader;
        this.$store
          .dispatch(accountActions.register, this.accountDetails)
          .then((res) => {
            this.showToast("success", "Registered successfully. You can now login your account.");
            this.showLoader = !this.showLoader;
            this.$router.push("/");
          });
      }
    }
  },
  computed: {
    selectedCharacter() {
      return this.getHardCodedCharacterData(this.accountDetails.classType)
    }
  }
};
</script>
<style scoped>
.imgbackground {
  background: url("../../assets/backgrounds/splash-screen.gif");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 1280px;
  min-height: 620px;
  height: 100%;
  padding-top: 50px;
}

.regsitration-box {
  width: 300px;
  min-height: 400px;
  height: 30%;
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
