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
          :mana="attributes.character.mana"
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
            <img
              v-show="!showPlayerAttack"
              :src="attributes.character.img"
              class="player"
            />
            <img
              v-show="showPlayerAttack"
              :src="attributes.character.imgAttack"
              class="player"
            />
            <img
              v-show="!showEnemyBlink"
              :src="attributes.enemy.img"
              class="enemy"
            />
            <img
              v-show="showEnemyBlink"
              :src="attributes.enemy.imgBlink"
              class="enemy"
            />
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
      isLuck: false,
      showPlayerAttack: false,
      showEnemyBlink: false,
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
          imgBlink: ""
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
      this.showPlayerAttack = true;
      this.hideButtons = true;
      var focusValue = 0;
      const skill = this.character.skills.find((x) => x._id === skillId);
      if (skill.target === "self") {
        if (skill.damage < 0) {
          this.applyHeal(skill.damage);
          this.attributes.character.currentMana -= skill.cost;
          this.gameMessage(this.character.name, skill.damage, skill.target);
        } else {
          focusValue = this.applyFocus(this.character.stats.int, false);
          this.gameMessage(this.character.name, focusValue, skill.target);
        }
      } else {
        if (this.IsEvadeHit(this.dungeonDetails.enemy.stats.agi)) {
          this.evadeMessage(this.character.name);
        } else {
          var damage = 0;
          if (skill.type === "P") {
            damage = this.computeDamage(
              skill.damage,
              this.character.stats.off +
                this.character.equipment.weapon.bonus.off +
                this.character.equipment.armor.bonus.off,
              this.dungeonDetails.enemy.stats.def,
              this.character.stats.luk
            );
          } else {
            damage = this.computeDamage(
              skill.damage,
              this.character.stats.int +
                this.character.equipment.weapon.bonus.int +
                this.character.equipment.armor.bonus.int,
              this.dungeonDetails.enemy.stats.def,
              this.character.stats.luk
            );
          }
          if (damage < 0) {
            damage = 0;
          }
          this.attributes.enemy.currentLife -= damage;
          this.gameMessage(this.character.name, damage, skill.target);
          this.showEnemyBlink = true;
        }
        this.attributes.character.currentMana -= skill.cost;
        if (this.attributes.character.currentMana < 0) {
          this.attributes.character.currentMana = 0;
        }
      }
      this.declareWinner();
      if (!this.hasAWinner) {
        setTimeout(() => {
          this.showPlayerAttack = false;
          this.enemyAttack();
        }, 3000);
      }
    },
    applyHeal(heal) {
      this.attributes.character.currentLife -= heal;
      if (this.attributes.character.currentLife > this.character.stats.health) {
        this.attributes.character.currentLife = this.character.stats.health;
      }
    },
    applyFocus(int, isEnemy) {
      var focusValue = 0;
      focusValue = isEnemy
        ? Math.round(0.75 * int)
        : Math.round(
            0.75 * int +
              this.character.equipment.weapon.bonus.int +
              this.character.equipment.armor.bonus.int
          );
      if (isEnemy) {
        this.attributes.enemy.currentMana += focusValue;
        if (
          this.attributes.enemy.currentMana >
          this.dungeonDetails.enemy.stats.mana
        ) {
          this.attributes.enemy.currentMana = this.dungeonDetails.enemy.stats.mana;
        }
      } else {
        this.attributes.character.currentMana += focusValue;
        if (this.attributes.character.currentMana > this.character.stats.mana) {
          this.attributes.character.currentMana = this.character.stats.mana;
        }
      }
      return focusValue;
    },
    computeDamage(skillDamage, offense, defense, luck) {
      if (this.applyLuck(luck)) {
        return Math.round(((skillDamage * offense) / 100 - defense) * 1.5);
      }
      return Math.round((skillDamage * offense) / 100 - defense);
    },
    IsEvadeHit(agility, isEnemy = false) {
      var computedAgi = isEnemy
        ? agility * 0.05
        : (agility +
            this.character.equipment.weapon.bonus.agi +
            this.character.equipment.armor.bonus.agi) *
          0.05;
      if (Math.floor(Math.random() * 100) < 15 + computedAgi) {
        return true;
      }
      return false;
    },
    applyLuck(luck, isEnemy = false) {
      var computedLuck = isEnemy
        ? luck * 10
        : (luck +
            this.character.equipment.weapon.bonus.luk +
            this.character.equipment.armor.bonus.luk) *
          10;
      if (Math.floor(Math.random() * 100) < 25 + computedLuck) {
        this.isLuck = true;
        return true;
      }
      this.isLuck = false;
      return false;
    },

    enemyAttack() {
      this.showEnemyBlink = false;
      var enemySkills = this.dungeonDetails.enemy.skills;
      const enemyOffense = this.dungeonDetails.enemy.stats.off;
      var focusValue = 0;
      enemySkills.unshift(...this.attackNFocusData);
      var enemyAttack =
        enemySkills[Math.floor(Math.random() * enemySkills.length)];
      if (enemyAttack.target === "self") {
        if (enemyAttack.damage < 0) {
          this.applyHeal(enemyAttack.damage);
          this.attributes.enemy.currentMana -= enemyAttack.cost;
          this.gameMessage(
            this.dungeonDetails.enemy.name,
            enemyAttack.damage,
            enemyAttack.target
          );
        } else {
          focusValue = this.applyFocus(
            this.dungeonDetails.enemy.stats.int,
            true
          );
          this.gameMessage(
            this.dungeonDetails.enemy.name,
            focusValue,
            enemyAttack.target
          );
        }
      } else {
        if (this.IsEvadeHit(this.character.stats.agi, true)) {
          this.evadeMessage(this.dungeonDetails.enemy.name);
        } else {
          var damage = 0;
          if (enemyAttack.type === "P") {
            damage = this.computeDamage(
              enemyAttack.damage,
              this.dungeonDetails.enemy.stats.off,
              this.character.stats.def +
                this.character.equipment.weapon.bonus.def +
                this.character.equipment.armor.bonus.def,
              this.dungeonDetails.enemy.stats.luk
            );
          } else {
            damage = this.computeDamage(
              enemyAttack.damage,
              this.dungeonDetails.enemy.stats.int,
              this.character.stats.def +
                this.character.equipment.weapon.bonus.def +
                this.character.equipment.armor.bonus.def,
              this.dungeonDetails.enemy.stats.luk
            );
          }
          if (damage < 0) {
            damage = 0;
          }
          this.attributes.character.currentLife -= damage;
          this.gameMessage(
            this.dungeonDetails.enemy.name,
            damage,
            enemyAttack.target
          );
        }
        this.attributes.enemy.currentMana -= enemyAttack.cost;
        if (this.attributes.enemy.currentMana < 0) {
          this.attributes.enemy.currentMana = 0;
        }
      }
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
              ).img,
              imgBlink: baseEnemies.find(
                (x) => x.name === this.dungeonDetails.enemy.image
              ).imgBlink
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
        if (cost < 0) {
          this.message = `${character} increase ${cost * -1} of health.`;
        } else {
          this.message = `${character} increase ${cost} of mana.`;
        }
      } else {
        if (cost <= 0) {
          this.message = `${character} dealt NO damage!`;
        } else if (this.isLuck) {
          this.message = `${character} dealt ${cost} CRITICAL damage!`;
        } else {
          this.message = `${character} dealt ${cost} of damage!`;
        }
      }
    },
    evadeMessage(character) {
      this.message = `${character} attack missed!`;
    },
    declareWinner() {
      if (this.attributes.character.currentLife <= 0) {
        this.attributes.character.currentLife = 0;
        this.modalTitle = "Sorry, you lose!";
        this.winnerMessage = "You can try again!";
        this.hasAWinner = true;
      }
      if (this.attributes.enemy.currentLife <= 0) {
        this.attributes.enemy.currentLife = 0;

        this.modalTitle = "Congratulations, you win!";
        this.hasAWinner = true;
      }
      setTimeout(() => {
        if (this.hasAWinner) {
          this.$bvModal.show("modal-1");
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
      }, 1500);
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
  min-width: 150px;
  max-width: 100%;
}

.enemy {
  position: absolute;
  top: 170px;
  right: 100px;
  min-height: 150px;
  max-height: 200px;
  max-width: 100%;
}
</style>
