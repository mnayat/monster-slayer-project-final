<template>
  <div>
    <div class="panel">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div
              class="col-md-6 btnPadding"
              v-for="(item, i) in skills"
              :key="i"
            >
              <div>
                <button
                  class="btn btn-primary btn-sm btn-block"
                  @click.prevent="getSkillsDescription(item._id)"
                >
                <img :src="require('../../assets/icons/skills/' + item.type + '.png')" />
                  {{ item.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["skills"],
  methods: {
    getSkillsDescription(skillId) {
      this.$emit("getSkillsDescription", skillId);
    }
  }
};
</script>
