<template>
  <div>
    <div class="text-center">Character Status</div>
    <div class="row box">
      <div class="col-sm-3">
        <div class="panel">
          Character Name
          <div class="row">
            <div class="col-sm-6">Level</div>
            <div class="col-sm-6">{{  }}</div>
          </div>
        </div>
      </div>
      <div class="col-sm-9">
        <div class="item-panel">
          test panel
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SessionMixin from "../../mixins/session-mixin";
import sessionKeys from "../../configuration/session/sessionKeys";
import characterActions from "./../../configuration/actionNames/character-action";
export default {
  data() {
    return {
      characterId: "",
      showLoader: false,
      characterInfo: {}
    };
  },
   mixins: [SessionMixin],
  created() {
    this.characterId = this.getSession(sessionKeys.character);
    this.getCharacter();
  },
  methods: {
    getCharacter() {
      this.showLoader = true;
      debugger;
      this.$store
        .dispatch(characterActions.getCharacter, this.characterId)
        .then((res) => {
          if(res==true) {
            this.characterInfo = this.$store.getters[ "characterModule/getCharacter"];
              console.log( 'character' +this.characterInfo.name);
          }
        });
    },
  },
};
</script>

<style></style>
