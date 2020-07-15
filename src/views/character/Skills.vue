<template>
  <div>
    <apploader :showLoader="showLoader"></apploader>
    <div class="text-center">Skills</div>
    <div class="row box">
      <div class="col-sm-8">
        <app-skill-item
          :skills="skills"
          @getSkillsDescription="getSkillsDescription"
        ></app-skill-item>
      </div>
      <div class="col-sm-4">
        <app-skill-action
          :selectedSkill="selectedSkill"
          :currentSkills="currentSkills"
          @equipSkill="equipSkill"
          @deleteSkill="deleteSkill"
          @updateSkills="updateSkills"
        ></app-skill-action>
      </div>
    </div>
  </div>
</template>
<script>
import characterActions from "./../../configuration/actionNames/character-action";
import SkillItem from "../../components/skills/Skill-Item";
import SkillAction from "../../components/skills/Skill-Action";
export default {
  components: {
    appSkillItem: SkillItem,
    appSkillAction: SkillAction
  },
  data() {
    return {
      characterId: "",
      showLoader: false,
      selectedSkill: {},
      currentSkills: []
    };
  },
  created() {
    this.characterId = this.getSession(this.sessionKeys.character);
    this.getSkills();
    this.getCharacter();
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
      let skill = this.skills.find((i) => i._id == skillsId);
      this.selectedSkill = {
        skillName: skill.name,
        skillId: skill._id,
        skillSet: skill,
        skills: [
          { type: "level", value: skill.lvlReq },
          { type: "target", value: skill.target },
          {
            type: "type",
            value: `${skill.type === "P" ? "Physical" : "Magical"}`
          },
          { type: "cost", value: `${skill.cost} Mana` },
          {
            type: `${skill.type === "P" ? "Damage" : "Heal"}`,
            value: `${Math.abs(skill.damage)} %`
          }
        ]
      };
    },
    getCharacter() {
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.getCharacter, this.characterId)
        .then((res) => {
          if (res !== true) {
            this.showErrorToast();
          }
          this.currentSkills = this.character.skills;
          this.showLoader = false;
        });
    },
    equipSkill(skill) {
<<<<<<< HEAD
      if (skill !== undefined) {
        var isSkillExisting = this.currentSkills.some(
          (x) => x._id === skill._id
        );
        if (this.currentSkills.length < 5) {
          if (isSkillExisting) {
            this.showToast("warning", "Skill is already equipped.");
          } else {
            this.showToast("success", "Successfully added in current skills");
            this.currentSkills.push(skill);
          }
        } else {
          this.showToast("warning", "The maximum skill you can equip is 5.");
        }
      } else {
        this.showToast("warning", "Please select first a skill you want to equip.");
      }
    },
    deleteSkill(skillId) {
      if (this.currentSkills.length === 1) {
        this.showToast("warning", "Sorry but you cannot delete all skills.");
      } else {
        this.currentSkills = this.currentSkills.filter((x) => x._id != skillId);
      }
=======
      var isSkillExisting = this.currentSkills.some((x) => x._id === skill._id);
      if (isSkillExisting) {
        this.showToast("warning", "Skill is already equipped.");
      } else {
        this.showToast("success", "Successfully added in current skills");
        this.currentSkills.push(skill);
      }
    },
    deleteSkill(skillId) {
      this.currentSkills = this.currentSkills.filter((x) => x._id != skillId);
>>>>>>> e1d75d90e0ee8a324c9a327dab601187a4c55bdf
    },
    updateSkills() {
      const skillIds = this.currentSkills.map((x) => {
        return x._id;
      });
      var payload = {
        characterId: this.characterId,
        request: skillIds
      };
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.updateSkills, payload)
        .then((res) => {
          if (res === true) {
            this.showToast("success", "Skills have been updated successfully");
          } else {
            this.showErrorToast();
          }
          this.showLoader = false;
        });
    }
  },
  computed: {
    character() {
      return this.$store.getters["characterModule/getCharacter"];
    },
    skills() {
      return this.$store.getters["characterModule/getSkills"];
    }
  },
  watch: {}
};
</script>
<style>
.card {
  background-color: #ffffff8a;
}
.alert {
  padding: 0.1rem 0.25rem;
  margin-bottom: 0.25rem;
}
.close {
  padding: 0rem 0rem !important;
}
</style>
