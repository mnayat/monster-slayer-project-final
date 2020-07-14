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
import loader from "../../components/common/Loader";
import SessionMixin from "../../mixins/session-mixin";
import sessionKeys from "../../configuration/session/sessionKeys";
import DungeonList from "../../components/dungeons/Dungeon-List";
import DungeonDetails from "../../components/dungeons/Dungeon-Details";
import baseDungeon from "./../../scripts/dungeons";
import characterActions from "./../../configuration/actionNames/character-action";

export default {
  mixins: [SessionMixin],
  components: {
    appLoader: loader,
    appDungeonList: DungeonList,
    appDungeonDetails: DungeonDetails
  },
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
        this.getSession(sessionKeys.character)
      )
      .then((res) => {
        this.dungeons = res.data;
        this.selectedDungeon = this.dungeons[0];
        this.enemies = this.selectedDungeon.enemies;
        this.showLoader = false;
      });
  },
  methods: {
    getDungeonList() {
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.getDungeons, this.characterId)
        .then((res) => {
          if (res !== true) {
            this.showErrorToast();
          }
          this.showLoader = false;
        });
    },
    setSelectedDungeon(id) {
      this.selectedDungeon = this.dungeons.find((x) => x._id === id);
    }
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
