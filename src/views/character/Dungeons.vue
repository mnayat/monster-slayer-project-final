<template>
  <div>
    <apploader :showLoader="showLoader"></apploader>
    <div class="text-center">Dungeons</div>

    <div class="column box">
      <div class="col-sm-12">
        <appDungeonList
          :dungeons="dungeons"
          @setSelectedDungeon="setSelectedDungeon"
        ></appDungeonList>
      </div>
      <div class="col-sm-12">
        <appDungeonDetails
          :selectedDungeon="selectedDungeon"
        ></appDungeonDetails>
      </div>
    </div>
  </div>
</template>

<script>
import DungeonList from "../../components/dungeons/Dungeon-List.vue";
import DungeonDetails from "../../components/dungeons/Dungeon-Details.vue";
import baseDungeon from "./../../data/dungeons-data";
import characterActions from "./../../configuration/actionNames/character-action";
export default {
  components: {
    appDungeonList: DungeonList,
    appDungeonDetails: DungeonDetails
  },
  data() {
    return {
      showLoader: false,
      characterId: "",
      baseDungeon,
      selectedDungeon: {}
    };
  },
  created() {
    this.characterId = this.getSession(this.sessionKeys.character);
    this.getDungeonList();
  },
  methods: {
    getDungeonList() {
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.getDungeons, this.characterId)
        .then((res) => {
          if (res == true) {
            this.showLoader = false;
          }
        });
    },
    setSelectedDungeon(id) {
      this.selectedDungeon = this.dungeons.find((x) => x._id === id);
    }
  },
  computed: {
    dungeons() {
      return this.$store.getters["characterModule/getDungeons"];
    }
  }
};
</script>
