<template>
  <div>
    <div class="item-panel">
      <div class="card">
        <div class="card-body">
          <div>
            <p class="d-inline-block card-title text-center">
              Selected Skill Details
            </p>
            <button
              class="btn btn-danger btn-xs float-right"
              @click="equipSkill(selectedSkill.skillSet)"
            >
              <fa-icon icon="hand-pointer"></fa-icon>
              Equip
            </button>
          </div>

          <div class="card-subtitle mb-2 text-muted">
            {{ selectedSkill.skillName }}
          </div>
          <div class="row" v-for="(skill, i) in selectedSkill.skills" :key="i">
            <p class="col-sm-4 text-uppercase">{{ skill.type }}</p>
            <p class="col-sm-6 text-uppercase">
              {{ skill.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="item-panel">
      <div class="card">
        <div class="card-body">
          <div>
            <p class="d-inline-block card-title text-center">
              Current Skills
            </p>
          </div>
          <div
            class="alert alert-success alert-dismissible fade show"
            v-for="(currentSkill, i) in currentSkills"
            :key="i"
          >
            {{ currentSkill.name }}
            <button
              type="button"
              class="close"
              @click="deleteSkill(currentSkill._id)"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="item-panel-button">
      <br />
      <button class="btn btn-success btn-block btn-sm" @click="updateSkills()">
        <fa-icon icon="save"></fa-icon>
        Save
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selectedSkill", "currentSkills"],
  methods: {
    equipSkill(skillSet) {
      this.$emit("equipSkill", skillSet);
    },
    deleteSkill(skillId) {
      this.$emit("deleteSkill", skillId);
    },
    updateSkills() {
      this.$emit("updateSkills");
    }
  }
};
</script>
