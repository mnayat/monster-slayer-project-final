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
        <appCharacterStatus :character="character" :defaultInfo="defaultInfo" />
      </div>
    </div>
  </div>
</template>

<script>
import SessionMixin from "../../mixins/session-mixin";
import CharacterMixin from "../../mixins/character-mixin";
import characterActions from "./../../configuration/actionNames/character-action";
import CharacterInfo from "../../components/character/Character-Info";
import CharacterStatus from "../../components/character/Character-Status";
export default {
  mixins: [SessionMixin, CharacterMixin],
  components: {
    appCharacterinfo: CharacterInfo,
    appCharacterStatus: CharacterStatus
  },
  data() {
    return {
      characterId: "",
      showLoader: false,
      defaultInfo: {},
      totalHealth: 0
    };
  },
  created() {
    this.characterId = this.getSession(this.sessionKeys.character);
    this.getCharacter();
  },
  methods: {
    getCharacter() {
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.getCharacter, this.characterId)
        .then((res) => {
          if (res == true) {
            this.defaultInfo = this.getHardCodedCharacterData(
              this.character.classType
            );
          } else {
            this.showErrorToast();
          }
          this.showLoader = false;
        });
    }
  },
  computed: {
    character() {
      return this.$store.getters["characterModule/getCharacter"];
    }
  }
};
</script>

<style></style>
