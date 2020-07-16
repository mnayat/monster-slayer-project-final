<template>
  <div>
    <div class="panel">
      <button
        class="btn btn-success btn-sm btn-block"
        v-for="(skill, i) in skills"
        :key="i"
        @click="attack(skill._id)"
        :disabled="mana < skill.cost ? true : false"
      >
        {{ skill.name }}
        <div>{{ skill.cost }}</div>
      </button> 
    </div>
  </div>
</template>
<script>
export default {
  props: ["skills", "mana"],
  methods: {
    attack(skillId) {
      this.$emit("attack", skillId);
    }
  }
};
</script>
