<template>
  <div>
    <div class="panel">
      <button
        class="btn btn-success btn-sm btn-block"
        v-for="(skill, i) in skills"
        :key="i"
        @click="attack(skill._id)"
      >
        {{ skill.name }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["skills"],
  methods: {
    attack(skillId) {
      this.$emit("attack", skillId);
    }
  }
};
</script>
