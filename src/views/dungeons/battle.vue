<template>
  <div>
    <apploader :showLoader="showLoader"></apploader>
    <div class="text-center">Battle Field</div>
    <div class="row box" v-if="character !== undefined && dungeonDetails.enemy !== undefined">
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
                :currentValue="playerHealth"
                :maxValue="character.stats.health"
                :color="'bg-primary'"
              ></app-progress-bar>
              <div class="row">
                <div class="col-md-10">
                  <app-progress-bar
                    :currentValue="playerMana"
                    :maxValue="character.stats.mana"
                    :color="'bg-warning'"
                    :height="10"
                  ></app-progress-bar>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <small>{{ dungeonDetails.enemy.name }}</small>
              <app-progress-bar
                :currentValue="50"
                :maxValue="dungeonDetails.enemy.health"
                :color="'bg-primary'"
              ></app-progress-bar>
              <div class="row">
                <div class="offset-2 col-md-10">
                  <app-progress-bar
                    :currentValue="50"
                    :maxValue="dungeonDetails.enemy.mana"
                    :color="'bg-warning'"
                    :height="10"
                  ></app-progress-bar>
                </div>
              </div>
            </div>
            <img :src="getDungeonImage()" height="350px" width="760px" />
            <img :src="getPlayerImage()" class="player" />
            <img :src="getEnemyImage()" class="enemy" />
            Show Text Here
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressBar from "../../components/common/ProgressBar";
import characterActions from "./../../configuration/actionNames/character-action";
import dungeonActions from "./../../configuration/actionNames/dungeon-action";
import CharacterMixin from "./../../mixins/character-mixin";
import BattleAction from "./../../components/battle/Battle-Action";
import baseDungeon from "./../../data/dungeons-data";
import baseCharacter from "./../../data/characters-data";
import baseEnemies from "./../../data/enemies-data";
import loader from "../../components/common/Loader";
import { watch } from "fs";
export default {
  mixins: [CharacterMixin],
  components: {
    appProgressBar: ProgressBar,
    appBattleAction: BattleAction,
    appLoader : loader
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
      const skill = this.character.skills.find((x) => x._id === skillId);
      if (skill) {
      }
    },
    getDungeonImage() {
      return this.dungeonDetails.dungeon != undefined
        ? baseDungeon.find((x) => x.name === this.dungeonDetails.dungeon.image)
            .img
        : "";
    },
    getEnemyImage() {
      return this.dungeonDetails.enemy != undefined
        ? baseEnemies.find((x) => x.name === this.dungeonDetails.enemy.image)
            .img
        : "";
    },
    getPlayerImage() {
      return this.character.classType != undefined
        ? baseCharacter.find((x) => x.characterId === this.character.classType)
            .img
        : "";
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
    },
  },
  computed: {
    character() {
      return this.$store.getters["characterModule/getCharacter"];
    },
    selectedDungeon() {
      return this.$store.getters["characterModule/getSelectedDungeon"];
    },
    dungeonDetails() {
      return this.$store.getters["dungeonModule/getDungeonDetails"];
    },
    playerHealth(){
      return this.character.stats.health;
    },
    enemyHealth(){
      return this.dungeonDetails.enemy !== undefined ? this.dungeonDetails.enemy.health : 0;
    },
    playerMana(){
      return this.character.stats.mana;
    },
    enemyMana(){
      return this.dungeonDetails.enemy !== undefined ? this.dungeonDetails.enemy.mana : 0;
    },
  },
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
  height: auto;
  max-width: 100%;
}
</style>
