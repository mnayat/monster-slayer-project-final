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

          <appCharacterStatus
          :character="character"
          :defaultInfo="defaultInfo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SessionMixin from "../../mixins/session-mixin";
import sessionKeys from "../../configuration/session/sessionKeys";
import characterActions from "./../../configuration/actionNames/character-action";
import baseCharacter from "./../../scripts/character.js";
import CharacterInfo from "../../components/character/CharacterInfo";
import CharacterStatus from "../../components/character/CharacterStatus";
import pathNames from "../../configuration/routerPath/pathNames";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      characterId: "",
      showLoader: false,
      stats: {},
      defaultInfo: {},
      baseCharacter: baseCharacter,
      totalHealth: 0,
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
            this.stats = this.character.stats;
            console.log(this.character);
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
