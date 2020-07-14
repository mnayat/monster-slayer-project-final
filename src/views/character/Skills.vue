<template>
  <div>
    <apploader :showLoader="showLoader"></apploader>
    <div class="text-center">Skills</div>
    <div class="row box">
      <div class="col-sm-8">
        <div class="panel">
          <div class="row">
            <div class="col-md-6" v-for="(item, i) in skills" :key="i">
              <div>
                <button
                  class="btn btn-success btn-outline"
                  @click.prevent="getSkillsDescription(item._id)"
                >
                  {{ item.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="item-panel">
            <div class="text-center">Details</div>
            <div class="text-center">{{skillName}}</div>
          <div class="row" v-for="(items, i) in selectedSkillItem" :key="i">
            <div class="col-sm-3 offset-1 bold text-uppercase">{{ i }}</div>
            <div class="col-sm-3 offset-1 bold text-uppercase">{{ items }}</div>
          </div>
        </div>
        <div class="item-panel">Current Skills</div>
        <div class="item-panel-button">Button</div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "../Menu";
import SessionMixin from "../../mixins/session-mixin";
import characterActions from "./../../configuration/actionNames/character-action";

export default {
  mixins: [SessionMixin],

  data() {
    return {
      characterId: "",
      showLoader: false,
      selectedSkillItem:{},
      skillName: ""
    };
  },
  created() {
    this.characterId = this.getSession(sessionKeys.character);
    // this.updateInventoryPayload.characterId = this.characterId;
    // this.deleteInventoryPayload.characterId = this.characterId;

    this.getSkills();
  },
  methods: {
    getSkills() {
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.getSkills, this.characterId)
        .then((res) => {
          if (res != true) this.showErrorToast();
          this.showLoader = false;
        });
    },
    getSkillsDescription(skillsId) {
      debugger;
   ;
      let skill = this.skills.find((i) => i._id == skillsId);
      this.skillName = skill.name;
      this.selectedSkillItem ={
        level : skill.lvlReq,
        target: skill.target,
        type: skill.type,
        cost: skill.cost,
        damage : skill.damage
      };
    },
  },
  computed: {
    character() {
      return this.$store.getters["characterModule/getCharacter"];
    },
    skills() {
      return this.$store.getters["characterModule/getSkills"];
    },
  },
};
</script>
<style>
.card {
  background-color: #ffffff8a;
}
</style>
