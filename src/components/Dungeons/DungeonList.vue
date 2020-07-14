<template>
  <div class="panel-container" v-if="dungeons != undefined">
    <div class="flex-container">
      <div
        class="tile"
        v-for="dungeon in dungeons"
        :key="dungeon._id"
        v-bind:value="{ id: dungeon._id, text: dungeon.name }"
        :style="{
          'background-image': 'url(' + getDungeonImg(dungeon.image) + ')',
        }"
        @click="setSelectedDungeon(dungeon._id)"
      >
        <img
          v-show="dungeon.locked"
          class="locked-overlay"
          :src="getDungeonImg('locked')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import baseDungeon from "./../../scripts/dungeons";
export default {
  props: {
    dungeons: Array,
  },
  data() {
    return {
      baseDungeon: baseDungeon
    };
  },
  methods: {
    getDungeonImg(name) {
      return this.baseDungeon.find((x) => x.name === name).img;
    },
    setSelectedDungeon(id) {
      this.$emit("setSelectedDungeon", id);
    },
  },
  watch: {
    dungeons: function(value) {
      this.$emit("setSelectedDungeon", value[0]._id);
    },
  },
};
</script>
