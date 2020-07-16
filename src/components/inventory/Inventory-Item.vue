<template>
  <div>
    <div class="panel">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div
              class="col-md-6 btnPadding"
              v-for="(item, i) in inventory"
              :key="i"
            >
              <button
                class="btn btn-primary btn-sm btn-block"
                @click="getDescription(item._id)"
              >
                {{ item.item.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["inventory"],
  methods: {
    getDescription(itemId) {
      this.$emit("getDescription", itemId);
    }
  }
};
</script>
