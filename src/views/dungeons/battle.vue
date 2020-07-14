<template>
  <div>
    <apploader :showLoader="showLoader"></apploader>
    <div class="text-center">Battle Field</div>
    <div class="row box" v-if="character !== undefined">
      <div class="col-md-2">
        <app-battle-action
          :skills="character.skills"
          @attack="attack"
        ></app-battle-action>
      </div>
      <div class="col-md-10">
        <div class="">
          <div class="row">
            <div class="col-md-6">
              <small>
                {{ character.name }}
              </small>
              <app-progress-bar
                :currentValue="100"
                :maxValue="200"
                :color="'bg-primary'"
              ></app-progress-bar>
              <div class="row">
                <div class="col-md-10">
                  <app-progress-bar
                    :currentValue="100"
                    :maxValue="200"
                    :color="'bg-warning'"
                    :height="10"
                  ></app-progress-bar>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <small>Monster Name</small>
              <app-progress-bar
                :currentValue="200"
                :maxValue="200"
                :color="'bg-primary'"
              ></app-progress-bar>
              <div class="row">
                <div class="offset-2 col-md-10">
                  <app-progress-bar
                    :currentValue="100"
                    :maxValue="200"
                    :color="'bg-warning'"
                    :height="10"
                  ></app-progress-bar>
                </div>
              </div>
            </div>
            <img
              src="../../assets/dungeons/babel-tower.jpg"
              height="350px"
              width="760px"
            />
            <img src="../../assets/classes/archer.gif" class="player" />
            <img src="../../assets/classes/archer.gif" class="enemy" />
            Show Text Here
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressBar from "../../components/common/ProgressBar";
import SessionMixin from "../../mixins/session-mixin";
import characterActions from "./../../configuration/actionNames/character-action";
import CharacterMixin from "./../../mixins/character-mixin";
import BattleAction from "./../../components/battle/Battle-Action";
export default {
  mixins: [SessionMixin, CharacterMixin],
  components: {
    appProgressBar: ProgressBar,
    appBattleAction: BattleAction
  },
  data() {
    return {
      showLoader: false,
      characterId: "",
      hardCodedCharacter: Object
    };
  },
  created() {
    this.characterId = this.getSession(this.sessionKeys.character);
    this.getCharacter();
  },
  methods: {
    attack(skillId) {
      console.log(this.character.skills);
      const skill = this.character.skills.find((x) => x._id === skillId);
      if (skill) {
      }
    },
    getCharacter() {
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.getCharacter, this.characterId)
        .then((res) => {
          if (res === true) {
            this.hardCodedCharacter = this.getHardCodedCharacterData(
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

<style>
.player {
  position: absolute;
  top: 180px;
  left: 100px;
  height: 200px;
  width: 150px;
}

.enemy {
  position: absolute;
  top: 180px;
  right: 100px;
  height: 200px;
  width: 150px;
}
</style>
