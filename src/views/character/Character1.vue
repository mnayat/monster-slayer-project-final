<template>
  <div>
    <apploader :showLoader="showLoader"></apploader>
    <div class="text-center">Character Status</div>
    <div class="row box">
      <div class="col-sm-3">
        <appCharacterinfo
          :characterApiInfo="character"
          :defaultInfo="defaultInfo"
        />
      </div>
      <div class="col-sm-9">
        <div class="panel">
          <div class="row">
            <div class="col-sm-4">
              <img :src="defaultInfo.img" />
            </div>
            <div class="col-sm-8" v-if="character !==undefined">
              <p class="text-center">Character Status</p>
              <div class="row">
                <div class="col-sm-3 offset-1 bold ">Attrib</div>
                <div class="col-sm-2 bold">Base</div>
                <div class="col-sm-2 bold">Bonus</div>
                <div class="col-sm-2 bold">Total</div>
              </div>
              <div class="row">
                <div v-for="(stats, i) in character" :key ="i"></div>
                <div class="col-sm-3 offset-1 bold">{{i }}</div>
                 <div class="col-sm-2 bold">{{ }}</div>
                <div class ="col-sm-2 bold " >
                  
                </div>  
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SessionMixin from "../../mixins/session-mixin";
import sessionKeys from "../../configuration/session/sessionKeys";
import characterActions from "./../../configuration/actionNames/character-action";
import baseCharacter from "./../../scripts/character1.js";
import CharacterInfo from "../../components/character/CharacterInfo";
import CharacterStatus from "../../components/character/CharacterStatus";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      characterId: "",
      showLoader: false,
      defaultInfo: {},
      baseCharacter: baseCharacter,
       totalHealth:0,

    };
  },
  components: {
    appCharacterinfo: CharacterInfo,
    appCharacterStatus: CharacterStatus,
  },
  mixins: [SessionMixin],
  created() {
    this.characterId = this.getSession(sessionKeys.character);
    this.getCharacter();
  },
  methods: {
    getCharacter() {
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.getCharacter, this.characterId)
        .then((res) => {
          if (res == true) {
            this.getBaseCharacter();
            this.showLoader = false;
          }
        });
    },
    getBaseCharacter() {
      this.defaultInfo = this.baseCharacter.find(
        (x) => x.characterId === this.character.classType
      );
    },

  },
  computed: {
    character() {
      return this.$store.getters["characterModule/getCharacter"];
    },

  },

};
</script>

<style></style>
