<template>
  <div class="battle-container">
    <div class="app-base-layout">
      <app-menu></app-menu>
      <appLoader v-if="showLoader" />
      <div class="app-header">
        <div>Battlefield</div>
      </div>
      <div class="app-body">
          <div class="battlefield-container">
              <div class="main-battle-container">
                  <div class="battle-stage" :style="{
                          'background-image':
                            'url(' + dungeonImg + ')',
                        }">
                        <div class="dungeon-field row nomargin">
                            <div class="col-sm-6 nopadding">
                                <div class="combatant-container">
                                    <statusbar></statusbar>
                                    <div class="character-image-container">
                                        <img :src="characterImg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 nopadding">
                                <div class="combatant-container">
                                    <statusbar></statusbar>
                                    <div class="character-image-container">
                                        <img :src="enemyImg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
                  <action></action>
                  <statuspane></statuspane>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import characterActions from "./../../configuration/actionNames/dungeon-action";
import StatusBar from "../../components/battle/StatusBar";
import ActionPane from "../../components/battle/ActionPane";
import StatusPane from "../../components/battle/StatusPane";
import Menu from "../Menu";
import loader from "../../components/common/Loader";
import characters from "./../../scripts/characters.js";
import dungeons from "./../../scripts/dungeons.js";
export default {
  components: {
    appMenu: Menu,
    appLoader: loader,
    statusbar: StatusBar,
    action: ActionPane,
    statuspane: StatusPane
  },
  data() {
    return {
        showLoader: false,
        dungeonImg: '',
        characterImg: '',
        enemyImg: ''
    };
  },
  created(){
      this.dungeonImg = characters.getDungeonImage('dessert');
      this.characterImg = characters.getCharacterImage(1);
      this.enemyImg = dungeons.getEnemyImage('amon');
      console.log(this.enemyImg);
  }
};
</script>


<style>
.battlefield-container {
    height: 520px;
}
.main-battle-container {
    height: 100%;
}
.main-battle-container .dungeon-field {
    width: 100%;
    height: 400px;
}
.battle-stage {
    height: 400px;
    width: 800px;
}
.character-image-container {
    text-align: center;
    height: 327px;
}
</style>
