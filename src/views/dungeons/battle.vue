<template>
  <div>
    <apploader :showLoader="showLoader"></apploader>
    <div class="text-center">Battle Field</div>
    <div
      class="row box"
      v-if="character !== undefined && dungeonDetails.enemy !== undefined"
    >
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
        <br/>
        <appbattleLogs :message ="message"/>
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
import BattleLogs from "./../../components/battle/Battle-Logs.vue";

export default {
  mixins: [CharacterMixin],
  components: {
    appProgressBar: ProgressBar,
    appBattleAction: BattleAction,
    appbattleLogs: BattleLogs
  },
  data() {
    return {
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
      message: '',
    };
  },
  created() {
    this.characterId = this.getSession(this.sessionKeys.character);
    this.getCharacter();
    this.enterDungeon();
  },
  methods: {
    attack(skillId) {
      debugger; 
      const skill = this.character.skills.find((x) => x._id === skillId);
     const offense = this.character.stats.off;
      if (skill.target === "self") {
        // either heal or regain the mana
          this.attributes.character.currentMana += 100;
      } else {
        this.attributes.enemy.currentLife -= Math.round((offense * skill.damage) / 100);
        this.attributes.character.currentMana -= skill.cost;
      }
      this.gameMessage(this.dungeonDetails.enemy.name, skill.damage,skill.target);  
     
     setTimeout(()=>{

           this.enemyAttack();
       }); 
    
    },
    enemyAttack() {
      var enemySkills = this.dungeonDetails.enemy.skills;  
      const enemyOffense = this.dungeonDetails.enemy.stats.off;
      // we need to refactor this adding of Focus and Attack
      enemySkills.unshift({
        classId: 0,
        cost: 0,
        damage: 100,
        name: "Focus",
        target: "self",
        type: "M",
        _id: 2
      });
      enemySkills.unshift({
        classId: 0,
        cost: 0,
        damage: 100,
        name: "Attack",
        target: "enemy",
        type: "P",
        _id: 1
      });
      var enemyAttack =
        enemySkills[Math.floor(Math.random() * enemySkills.length)];
      debugger;
      if (enemyAttack.target === "self") {
        // either heal or regain the mana
      } else {
        this.attributes.character.currentLife -= Math.round((enemyOffense * enemyAttack.damage) /100);
        this.attributes.enemy.currentMana -= enemyAttack.cost;
      }
      this.gameMessage(this.character.name, enemyAttack.damage,enemyAttack.target);   
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
            // we need to refactor this adding of Focus and Attack
            this.character.skills.unshift({
              classId: 0,
              cost: 0,
              damage: 100,
              name: "Focus",
              target: "self",
              type: "M",
              _id: 2
            });
            this.character.skills.unshift({
              classId: 0,
              cost: 0,
              damage: 100,
              name: "Attack",
              target: "enemy",
              type: "P",
              _id: 1
            });
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
     gameMessage(character,cost,target){
       debugger;
         if(target === 'self')
         {
             this.message = `${character} increase ${cost} of mana`
         }
         else{
              this.message = `${character} received ${cost} of damage`
         }
        
         
       }
  },
  
  computed: {
    character() {
      return this.$store.getters["characterModule/getCharacter"];
    },
    dungeonDetails() {
      return this.$store.getters["dungeonModule/getDungeonDetails"];
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
