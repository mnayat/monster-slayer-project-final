<template>
  <!-- Characterdefault Component -->
  <div class="panel-container" v-if="selectedDungeon != undefined">
    <div class="bold center">
      <div class="col-sm-12 nopadding">
        {{ selectedDungeon.name }}
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3"><b>Recommended Level:</b></div>
      <div class="col-sm-2 text-center">
        {{ selectedDungeon.recommendedLevel }}
      </div>
      <div class="col-md-3">
        <router-link class="btn btn-success btn-block" to="/battle">
          <fa-icon icon="gamepad"></fa-icon>
          Enter
        </router-link>
      </div>
    </div>

    <div class="row" v-show="selectedDungeon.locked">
      <div class="col-sm-12 text-center">Requirements:</div>
      <div class="col-sm-12 row">
        Defeat
        <label class="font-weight-bold">
          {{
            selectedDungeon.bossReq != null ? `&nbsp;${selectedDungeon.bossReq.name}&nbsp;` : ""
          }}
        </label>
        from the previous dungeon.
      </div>
    </div>
    <div class="flex-container" v-show="!selectedDungeon.locked">
      <div class="row nomargin">
        <div class="col-sm-12 font-weight-bold">Encounters/Drops:</div>
        <div
          class="encounter-list col-sm-12 row"
          v-for="enemy in enemies"
          :key="enemy._id"
          v-bind:value="{ id: enemy._id, text: enemy.name }"
        >
          <div v-if="!enemy.boss" class="col-sm-3 offset-sm-1 font-weight-bold">
            {{ enemy.name }}
          </div>
          <div v-if="!enemy.boss" class="col-sm-8">
            <div
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
              class="col-sm-7 offset-sm-1"
            >
              None
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 font-weight-bold">Boss/Drops:</div>
        <div
          class="col-sm-12 row"
          v-for="enemy in enemies"
          :key="enemy._id"
          v-bind:value="{ id: enemy._id, text: enemy.name }"
        >
          <div v-if="enemy.boss" class="col-sm-3 offset-sm-1 font-weight-bold">
            {{ enemy.name }}
          </div>
          <div v-if="enemy.boss" class="col-sm-8">
            <div
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
              class="col-sm-7 offset-sm-1"
            >
              None
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { selectedDungeon: Object },
  data() {
    return {
      enemies: []
    };
  },
  methods: {
    getEquipmentImage(name) {}
  },
  watch: {
    selectedDungeon: function(value) {
      this.enemies = value.enemies;
    }
  }
};
</script>
