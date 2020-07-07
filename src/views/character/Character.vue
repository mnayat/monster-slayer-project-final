<template>
    <div class="app-container">
        <div class="app-base-layout">
            <app-menu></app-menu>
            <div class="app-header">
                <div>Character Status</div>
            </div>
            <div class="app-body">
                <div class="character-home-screen row nomargin">
                    <div class="col-sm-4 nopadding">
                        <div class="character-details-container">
                            <div class="character-name center bold">{{ characterDetails.name }}</div>
                            <div class="row nomargin character-details">
                                <div class="col-sm-3 offset-sm-1 nopadding bold">Level</div>
                                <div class="col-sm-6 offset-sm-2 nopadding">{{ characterDetails.level }}</div>
                                <div class="col-sm-12 row-break"></div>

                <div class="col-sm-3 offset-sm-1 nopadding bold">Class</div>
                <div class="col-sm-6 offset-sm-2 nopadding">
                  {{ characterClass }}
                </div>
                <div class="col-sm-12 row-break"></div>

                <div class="col-sm-3 offset-sm-1 nopadding bold">Total Exp</div>
                <div class="col-sm-6 offset-sm-2 nopadding">
                  {{ characterDetails.totalExp }}
                </div>
                <div class="col-sm-12 row-break"></div>

                <div class="col-sm-3 offset-sm-1 nopadding bold">Next Lvl</div>
                <div class="col-sm-6 offset-sm-2 nopadding">
                  {{ characterDetails.nextLevelExp }}
                </div>
                <div class="col-sm-12 row-break"></div>

                <div class="col-sm-3 offset-sm-1 nopadding bold">Char Id</div>
                <div class="col-sm-8"></div>
                <div class="col-sm-6 offset-sm-2 nopadding">
                  {{ characterDetails._id }}
                </div>
                <div class="col-sm-12 row-break"></div>

                <div class="col-sm-6 offset-sm-1 nopadding bold">
                  Dungeon Access
                </div>
                <div class="col-sm-5 nopadding"></div>
                <div
                  class="col-sm-10 offset-sm-2 nopadding"
                  v-for="dungeon in characterDetails.dungeonAccess"
                  :key="dungeon.id"
                  v-bind:value="{ id: dungeon.id, text: dungeon.name }"
                >
                  {{ dungeon.name }}
                </div>
                <div class="col-sm-12 row-break"></div>
              </div>
            </div>
          </div>
          <div class="col-sm-8 nopadding">
            <div class="character-stats-container">
              <div class="character-stats row nomargin">
                <div class="col-sm-3 no padding center">
                  <img :src="characterImg" class="character-img" />
                </div>
                <div class="col-sm-9">
                  <div class="center">Character Stats</div>
                  <div class="detailed-stats row nomargin">
                    <div class="col-sm-3 bold">Attribute</div>
                    <div class="col-sm-3 bold">Base</div>
                    <div class="col-sm-3 bold">Bonus</div>
                    <div class="col-sm-3 bold">Total</div>
                  </div>
                  <div class="detailed-stats row nomargin">
                    <div class="col-sm-3 bold">Health</div>
                    <div class="col-sm-3 center">
                      {{ characterDetails.stats.health }}
                    </div>
                    <div class="col-sm-3 center">{{ bonusStats.health }}</div>
                    <div class="col-sm-3 center">{{ totalStats.health }}</div>
                  </div>
                  <div class="detailed-stats row nomargin">
                    <div class="col-sm-3 bold">Mana</div>
                    <div class="col-sm-3 center">
                      {{ characterDetails.stats.mana }}
                    </div>
                    <div class="col-sm-3 center">{{ bonusStats.mana }}</div>
                    <div class="col-sm-3 center">{{ totalStats.mana }}</div>
                  </div>
                  <div class="detailed-stats row nomargin">
                    <div class="col-sm-3 bold">Off</div>
                    <div class="col-sm-3 center">
                      {{ characterDetails.stats.off }}
                    </div>
                    <div class="col-sm-3 center">{{ bonusStats.off }}</div>
                    <div class="col-sm-3 center">{{ totalStats.off }}</div>
                  </div>
                  <div class="detailed-stats row nomargin">
                    <div class="col-sm-3 bold">Def</div>
                    <div class="col-sm-3 center">
                      {{ characterDetails.stats.def }}
                    </div>
                    <div class="col-sm-3 center">{{ bonusStats.def }}</div>
                    <div class="col-sm-3 center">{{ totalStats.def }}</div>
                  </div>
                  <div class="detailed-stats row nomargin">
                    <div class="col-sm-3 bold">Agi</div>
                    <div class="col-sm-3 center">
                      {{ characterDetails.stats.agi }}
                    </div>
                    <div class="col-sm-3 center">{{ bonusStats.agi }}</div>
                    <div class="col-sm-3 center">{{ totalStats.agi }}</div>
                  </div>
                  <div class="detailed-stats row nomargin">
                    <div class="col-sm-3 bold">Int</div>
                    <div class="col-sm-3 center">
                      {{ characterDetails.stats.int }}
                    </div>
                    <div class="col-sm-3 center">{{ bonusStats.int }}</div>
                    <div class="col-sm-3 center">{{ totalStats.int }}</div>
                  </div>
                  <div class="detailed-stats row nomargin">
                    <div class="col-sm-3 bold">Luk</div>
                    <div class="col-sm-3 center">
                      {{ characterDetails.stats.luk }}
                    </div>
                    <div class="col-sm-3 center">{{ bonusStats.luk }}</div>
                    <div class="col-sm-3 center">{{ totalStats.luk }}</div>
                  </div>
                </div>
              </div>
              <div class="character-aresenal row nomargin">
                <div class="col-sm-6 nopadding">
                  <div class="center bold">Equipment</div>
                  <div class="row nomargin">
                    <div class="col-sm-10 offset-sm-2 bold">Weapon</div>
                    <div class="col-sm-8 offset-sm-4">
                      <img
                        class="svg-icon svg-fill"
                        :src="characterWeaponImg"
                      />
                      {{ characterDetails.equipment.weapon.name }}
                    </div>
                    <div class="col-sm-10 offset-sm-2 bold">Armor</div>
                    <div class="col-sm-8 offset-sm-4">
                      <img class="svg-icon svg-fill" :src="characterArmorImg" />
                      {{ characterDetails.equipment.armor.name }}
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 nopadding">
                  <div class="center bold">Skills</div>
                  <div
                    class="row nomargin"
                    v-for="(skill, i) in characterDetails.skills"
                    :key="i"
                  >
                    <div class="col-sm-2 offset-sm-2 nopadding right">
                      <img class="svg-icon svg-fill" :src="skillImg.skill1" />
                    </div>
                    <div class="col-sm-8">{{ skill.name }}</div>
                  </div>
                </div>
              </div>
              <div class="character-stats-action">
                <button class="btn-principal">Inventory</button>
                <button class="btn-principal">Skills</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import characterActions from "./../../configuration/actionNames/character-action";
import characters from "./../../scripts/characters.js";
import Menu from "../Menu"
export default {
  components: {
    appMenu: Menu
  },
  data() {
    return {
        characterDetails: {
            stats:{
                health: 0,
                mana: 0,
                off: 0,
                def: 0,
                int: 0,
                agi: 0,
                luk: 0
            },
            equipment:{
                weapon: {},
                armor: {}
            }
        },
        characterClass: '',
        characterImg: '',
        characterWeaponImg: '',
        characterArmorImg: '',
        skillImg: {
            skill1: '',
            skill2: '',
            skill3: '',
            skill4: ''
        },
        bonusStats: {
            health: 0,
            mana: 0,
            off: 0,
            def: 0,
            int: 0,
            agi: 0,
            luk: 0
        },
        totalStats: {
            health: 0,
            mana: 0,
            off: 0,
            def: 0,
            int: 0,
            agi: 0,
            luk: 0
        }
      }
    },
    created() {
        this.$store.dispatch(characterActions.getCharacter, this.$store.state.accountModule.player.accountId).then(res => {
            this.characterDetails = res.data;
            console.log(this.characterDetails);
            this.characterClass = characters.getCharacterClass(this.characterDetails.classType);
            this.characterImg = characters.getCharacterImage(this.characterDetails.classType);
            this.characterWeaponImg = characters.getEquipmentImg(this.characterDetails.equipment.weapon.name);
            this.characterArmorImg = characters.getEquipmentImg(this.characterDetails.equipment.armor.name);
            this.skillImg.skill1 = characters.getSkill(this.characterDetails.skills[0]._id);
            console.log(this.skillImg.skill1);
            this.computeBonusStats();
        });
    },
    methods:{
        computeBonusStats(){
            if(this.characterDetails.equipment.armor.bonus != null){
                this.bonusStats.health = this.characterDetails.equipment.armor.bonus.health;
                this.bonusStats.mana = this.characterDetails.equipment.armor.bonus.mana;
                this.bonusStats.agi = this.characterDetails.equipment.armor.bonus.agi;
                this.bonusStats.int = this.characterDetails.equipment.armor.bonus.int;
                this.bonusStats.off = this.characterDetails.equipment.armor.bonus.off;
                this.bonusStats.def = this.characterDetails.equipment.armor.bonus.def;
                this.bonusStats.luk = this.characterDetails.equipment.armor.bonus.luk;
                if(this.characterDetails.equipment.weapon.bonus != null){
                    this.bonusStats.health += this.characterDetails.equipment.weapon.bonus.health;
                    this.bonusStats.mana += this.characterDetails.equipment.weapon.bonus.mana;
                    this.bonusStats.agi += this.characterDetails.equipment.weapon.bonus.agi;
                    this.bonusStats.int += this.characterDetails.equipment.weapon.bonus.int;
                    this.bonusStats.off += this.characterDetails.equipment.weapon.bonus.off;
                    this.bonusStats.def += this.characterDetails.equipment.weapon.bonus.def;
                    this.bonusStats.luk += this.characterDetails.equipment.weapon.bonus.luk;
                }
            }
            this.computeTotalStats();
        },
        computeTotalStats(){
             this.totalStats.health = this.bonusStats.health + this.characterDetails.stats.health;
             this.totalStats.mana = this.bonusStats.mana + this.characterDetails.stats.mana;
             this.totalStats.agi = this.bonusStats.agi + this.characterDetails.stats.agi;
             this.totalStats.int = this.bonusStats.int + this.characterDetails.stats.int;
             this.totalStats.off = this.bonusStats.off + this.characterDetails.stats.off;
             this.totalStats.def = this.bonusStats.def + this.characterDetails.stats.def;
             this.totalStats.luk = this.bonusStats.luk + this.characterDetails.stats.luk;
        }
    }
}
</script>

<style scoped>
button {
  font-family: AtariClassic;
  cursor: pointer;
}

.logout-button {
  float: right;
}

.character-home-screen {
  height: 100%;
}

.character-details-container {
  height: 100%;
  border: 2px solid gold;
  margin: 3px;
  border-radius: 8px;
  padding: 2px;
  font-size: 14px;
}

.character-details .row-break {
  margin: 3px 0;
}

.character-stats-container {
  height: 100%;
  border: 2px solid gold;
  margin: 3px;
  border-radius: 8px;
  padding: 2px;
  font-size: 14px;
}

.character-stats-container .character-stats .character-img {
  max-width: 140%;
  max-height: 100%;
}

.character-stats-container .character-arsenal {
  margin-top: 25px;
  height: 150px;
}

.character-stats-container .character-stats-action {
  text-align: right;
  font-family: AtariClassic;
  padding-right: 20px;
  padding-top: 100px;
}
</style>
