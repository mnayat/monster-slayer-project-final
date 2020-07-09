<template>
  <div class="app-container">
    <div class="app-base-layout">
      <app-menu></app-menu>
      <appLoader v-if="showLoader" />
      <div class="app-header row nomargin">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">Dungeons</div>
        <div class="col-sm-2"></div>
      </div>
      <div class="app-body">
        <div class="dungeon-home-screen row nomargin">
          <div class="col-sm-6 nopadding">
            <div class="dungeon-list">
              <div class="container">
                <div class="scrollbar">
                  <vue-scrollbar class="dungeons-scrollbar" ref="ScrollBar">
                    <div class="dungeon-tiles-container center">
                      <div
                        class="dungeon-tile"
                        v-for="dungeon in dungeons"
                        :key="dungeon._id"
                        v-bind:value="{ id: dungeon._id, text: dungeon.name }"
                        :style="{
                          'background-image':
                            'url(' + getDungeonImg(dungeon.image) + ')',
                        }"
                        @click="getDungeonDetails(dungeon._id)"
                      >
                        <img
                          v-show="dungeon.locked"
                          class="locked-overlay"
                          :src="getDungeonImg('locked')"
                        />
                      </div>
                    </div>
                  </vue-scrollbar>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 nopadding">
            <div class="dungeon-details-container">
              <div class="container">
                <div class="header bold row center nomargin">
                  <div class="col-sm-8 nopadding">
                    {{ selectedDungeon.name }}
                  </div>
                  <div class="col-sm-4 nopadding">
                    <button class="dungeon-enter btn-principal">Enter</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 bold">Recommended Level:</div>
                  <div class="col-sm-6 center">
                    {{ selectedDungeon.recommendedLevel }}
                  </div>
                </div>
                <div class="row nomargin" v-show="selectedDungeon.locked">
                  <div class="col-sm-12 bold nopadding">Requirements:</div>
                  <div class="encouter-list col-sm-12 row nomargin nopadding">
                    Defeat <span class="bold"> {{ selectedDungeon.bossReq != null ? selectedDungeon.bossReq.name : '' }} </span> from the previous
                    dungeon.
                  </div>
                </div>
                <div v-show="!selectedDungeon.locked">
                  <div class="row nomargin">
                    <div class="col-sm-12 bold">Encounters/Drops:</div>
                    <div
                      class="encounter-list col-sm-12 row nomargin nopadding"
                      v-for="enemy in enemies"
                      :key="enemy._id"
                      v-bind:value="{ id: enemy._id, text: enemy.name }"
                    >
                      <div
                        v-if="!enemy.boss"
                        class="col-sm-3 offset-sm-1 nopadding bold"
                      >
                        {{ enemy.name }}
                      </div>
                      <div v-if="!enemy.boss" class="col-sm-8 nopadding">
                        <div
                          class="dungeon-item"
                          v-for="drop in enemy.drops"
                          :key="drop._id"
                          v-bind:value="{ id: drop._id, text: drop.name }"
                          v-show="enemy.drops.length != 0"
                        >
                          <img
                            class="svg-icon svg-fill"
                            :src="getEquipmentImage(drop.name)"
                          />
                          {{ drop.name }}
                        </div>
                        <div
                          v-show="enemy.drops.length == 0"
                          class="dungeon-item col-sm-7 nopadding offset-sm-1"
                        >
                          None
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row nomargin">
                    <div class="col-sm-12 bold">Boss/Drops:</div>
                    <div
                      class="encounter-list col-sm-12 row nomargin nopadding"
                      v-for="enemy in enemies"
                      :key="enemy._id"
                      v-bind:value="{ id: enemy._id, text: enemy.name }"
                    >
                      <div
                        v-if="enemy.boss"
                        class="col-sm-3 offset-sm-1 nopadding bold"
                      >
                        {{ enemy.name }}
                      </div>
                      <div v-if="enemy.boss" class="col-sm-8 nopadding">
                        <div
                          class="dungeon-item"
                          v-for="drop in enemy.drops"
                          :key="drop._id"
                          v-bind:value="{ id: drop._id, text: drop.name }"
                          v-show="enemy.drops.length != 0"
                        >
                          <img
                            class="svg-icon svg-fill"
                            :src="getEquipmentImage(drop.name)"
                          />
                          {{ drop.name }}
                        </div>
                        <div
                          v-show="enemy.drops.length == 0"
                          class="dungeon-item col-sm-7 nopadding offset-sm-1"
                        >
                          None
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
import VueScrollbar from "vue2-scrollbar";
import characters from "./../../scripts/characters.js";
import Menu from "../Menu";
import loader from "../../components/common/Loader";

export default {
  components: { VueScrollbar, appMenu: Menu, appLoader: loader },
  data() {
    return {
      showLoader: false,
      dungeons: [
        {
          _id: "",
          image: "",
        },
      ],
      selectedDungeon: {
      },
      enemies: [
        {
          _id: "",
          name: "",
          drops: [
            {
              _id: "",
              name: "",
            },
          ],
        },
      ],
      boss: [
        {
          _id: "",
          name: "",
          drops: [
            {
              _id: "",
              name: "",
            },
          ],
        },
      ],
    };
  },
  created() {
    this.showLoader = true;
    this.$store
      .dispatch(
        characterActions.getDungeons,
        this.$store.state.accountModule.player.accountId
      )
      .then((res) => {
        this.dungeons = res.data;
        this.selectedDungeon = this.dungeons[0];
        this.enemies = this.selectedDungeon.enemies;
        this.showLoader = false;
      });
  },
  methods: {
    getDungeonImg(name) {
      return characters.getDungeonImage(name);
    },
    getDungeonDetails(id) {
      this.selectedDungeon = this.dungeons.filter(function(d) {
        return d._id == id;
      })[0];
      this.enemies = this.selectedDungeon.enemies;
    },
    getEquipmentImage(name) {
      return characters.getEquipmentImg(name);
    },
  },
};
</script>

<style>
.dungeon-home-screen {
  height: 450px;
}

.dungeon-details-container {
  height: 450px;
}

.dungeon-details-container .header {
    margin: 15px 0;
    font-size: 25px;
}

.dungeon-details-container .dungeon-details .encounter-list {
  margin-bottom: 15px;
}

.dungeon-details-container .dungeon-details {
  width: 350px;
  margin: auto;
  font-size: 14px;
}

.dungeon-tile .locked-overlay {
  height: 150px;
  width: 300px;
}

.container {
  height: 100%;
  border: 2px solid #fff;
  margin: 3px;
  border-radius: 8px;
  padding: 2px;
}

.dungeon-item {
  float: left;
}

.dungeon-tile {
  height: 150px;
  width: 300px;
  margin: 15px auto 30px;
  background-size: cover;
  cursor: pointer;
}

.scrollbar {
  scroll-behavior: auto;
}
</style>
