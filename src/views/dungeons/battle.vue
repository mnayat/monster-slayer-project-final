<template>
  <div>
    <apploader :showLoader="showLoader"></apploader>
    <div class="text-center">Battle Field</div>
    <div
      class="row box"
      v-if="character.name !== undefined && dungeonDetails.enemy !== undefined"
    >
      <div class="col-md-2">
        <app-battle-action
          v-if="!hideButtons"
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
                :currentValue="attributes.character.currentLife"
                :maxValue="attributes.character.life"
                :color="'bg-primary'"
              ></app-progress-bar>
              <div class="row">
                <div class="col-md-10">
                  <app-progress-bar
                    :currentValue="attributes.character.currentMana"
                    :maxValue="attributes.character.mana"
                    :color="'bg-warning'"
                    :height="10"
                  ></app-progress-bar>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <small>{{ dungeonDetails.enemy.name }}</small>
              <app-progress-bar
                :currentValue="attributes.enemy.currentLife"
                :maxValue="attributes.enemy.life"
                :color="'bg-primary'"
              ></app-progress-bar>
              <div class="row">
                <div class="offset-2 col-md-10">
                  <app-progress-bar
                    :currentValue="attributes.enemy.currentMana"
                    :maxValue="attributes.enemy.mana"
                    :color="'bg-warning'"
                    :height="10"
                  ></app-progress-bar>
                </div>
              </div>
            </div>
            <img :src="getDungeonImage()" height="350px" width="760px" />
            <img :src="attributes.character.img" class="player" />
            <img :src="attributes.enemy.img" class="enemy" />
          </div>
        </div>
        <br />
        <appbattleLogs :message="message" />
      </div>
    </div>
    <b-modal
      id="modal-1"
      size="sm"
      :no-close-on-backdrop="true"
      button-size="sm"
      :hide-header-close="true"
    >
      <template v-slot:modal-title>
        {{ modalTitle }}
      </template>
      <p v-html="winnerMessage"></p>
      <template v-slot:modal-footer>
        <button class="btn btn-sm btn-primary" @click="retry()">
          <fa-icon icon="gamepad"></fa-icon>
          Retry
        </button>
        <router-link class="btn btn-sm btn-danger" to="/dungeons">
          <fa-icon icon="sign-out-alt"></fa-icon>
          Leave
        </router-link>
      </template>
    </b-modal>
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
import BattleLogs from "./../../components/battle/Battle-Logs.vue";
import { setTimeout } from "timers";
import { BModal, VBModal } from "bootstrap-vue";
export default {
  mixins: [CharacterMixin],
  components: {
    appProgressBar: ProgressBar,
    appBattleAction: BattleAction,
    appbattleLogs: BattleLogs,
    "b-modal": BModal
  },
  data() {
    return {
      hideButtons: false,
      showLoader: false,
      characterId: "",
      hardCodedCharacter: Object,
      attributes: {
        character: {
          currentLife: 0,
          currentMana: 0,
          life: 0,
          mana: 0,
          img: "",
          imgAttack: ""
        },
        enemy: {
          currentLife: 0,
          currentMana: 0,
          life: 0,
          mana: 0,
          img: "",
          imgAttack: ""
        }
      },
      message: "",
      winnerMessage: "",
      modalTitle: "",
      hasAWinner: false
    };
  },
  created() {
    this.characterId = this.getSession(this.sessionKeys.character);
    this.getCharacter();
    this.enterDungeon();
  },
  methods: {
    attack(skillId) {
      this.hideButtons = true;
      const skill = this.character.skills.find((x) => x._id === skillId);
      const offense = this.character.stats.off;
      if (skill.target === "self") {
        // either heal or regain the mana
        //this.attributes.character.currentMana += 100;
      } else {
        this.attributes.enemy.currentLife -= Math.round(
          (offense * skill.damage) / 100
        );
        this.attributes.character.currentMana -= skill.cost;
      }
      this.gameMessage(this.character.name, skill.damage, skill.target);
      this.declareWinner();
      if (!this.hasAWinner) {
        setTimeout(() => {
          this.enemyAttack();
        }, 3000);
      }
    },
    enemyAttack() {
      var enemySkills = this.dungeonDetails.enemy.skills;
      const enemyOffense = this.dungeonDetails.enemy.stats.off;
      enemySkills.unshift(...this.attackNFocusData);
      var enemyAttack =
        enemySkills[Math.floor(Math.random() * enemySkills.length)];
      debugger;
      if (enemyAttack.target === "self") {
        // either heal or regain the mana
      } else {
        this.attributes.character.currentLife -= Math.round(
          (enemyOffense * enemyAttack.damage) / 100
        );
        this.attributes.enemy.currentMana -= enemyAttack.cost;
      }
      this.gameMessage(
        this.dungeonDetails.enemy.name,
        enemyAttack.damage,
        enemyAttack.target
      );
      this.declareWinner();
      setTimeout(() => {
        this.message = "";
        this.hideButtons = false;
      }, 3000);
    },
    enterDungeon() {
      let dungeonId = this.$route.params.id;
      this.showLoader = true;
      this.dungeonPayload = {
        characterId: this.characterId,
        dungeonId: dungeonId
      };
      this.$store
        .dispatch(dungeonActions.enterDungeon, this.dungeonPayload)
        .then((res) => {
          if (res === true) {
            var enemy = this.dungeonDetails.enemy;
            this.attributes.enemy = {
              currentLife: enemy.stats.health,
              currentMana: enemy.stats.mana,
              life: enemy.stats.health,
              mana: enemy.stats.mana,
              img: baseEnemies.find(
                (x) => x.name === this.dungeonDetails.enemy.image
              ).img
            };
          } else {
            this.showErrorToast();
          }
          this.showLoader = false;
        });
    },
    getDungeonImage() {
      return this.dungeonDetails.dungeon != undefined
        ? baseDungeon.find((x) => x.name === this.dungeonDetails.dungeon.image)
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

            this.character.skills.unshift(...this.attackNFocusData);

            this.attributes.character = {
              currentLife: this.character.stats.health,
              currentMana: this.character.stats.mana,
              life: this.character.stats.health,
              mana: this.character.stats.mana,
              img: this.hardCodedCharacter.img,
              imgAttack: this.hardCodedCharacter.imgAttack
            };
          } else {
            this.showErrorToast();
          }
          this.showLoader = false;
        });
    },
    gameMessage(character, cost, target) {
      if (target === "self") {
        this.message = `${character} increase ${cost} of mana`;
      } else {
        this.message = `${character} dealt ${cost} of damage`;
      }
    },
    declareWinner() {
      if (this.attributes.character.currentLife <= 0) {
        this.attributes.character.currentLife = 0;
        this.$bvModal.show("modal-1");
        this.modalTitle = "Sorry, you lose!";
        this.winnerMessage = "You can try again!";
        this.hasAWinner = true;
      }
      if (this.attributes.enemy.currentLife <= 0) {
        this.attributes.enemy.currentLife = 0;
        this.$bvModal.show("modal-1");
        this.modalTitle = "Congratulations, you win!";
        this.hasAWinner = true;
      }

      if (this.hasAWinner) {
        this.showLoader = true;
        let payload = {
          characterId: this.character._id,
          dungeonId: this.$route.params.id,
          enemyId: this.dungeonDetails.enemy._id
        };
        this.$store
          .dispatch(dungeonActions.resultDungeon, payload)
          .then((res) => {
            if (res === true) {
              var getDungeonResult = this.$store.getters[
                "dungeonModule/getDungeonResult"
              ];
              this.winnerMessage = `<b>Exp Gained</b>:${
                getDungeonResult.exp
              } <br /><b>Item Drop</b>: ${
                getDungeonResult.drop === "" ? "None" : getDungeonResult.drop
              }`;
              console.log(getDungeonResult);
            } else {
              this.showErrorToast();
            }
            this.showLoader = false;
          });
      }
    },
    retry() {
      location.reload();
    }
  },
  computed: {
    character() {
      return this.$store.getters["characterModule/getCharacter"];
    },
    dungeonDetails() {
      return this.$store.getters["dungeonModule/getDungeonDetails"];
    },
    attackNFocusData() {
      return [
        {
          classId: 0,
          cost: 0,
          damage: 100,
          name: "Attack",
          target: "enemy",
          type: "P",
          _id: 1
        },
        {
          classId: 0,
          cost: 0,
          damage: 100,
          name: "Focus",
          target: "self",
          type: "M",
          _id: 2
        }
      ];
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
  height: auto;
  max-width: 100%;
}
</style>
