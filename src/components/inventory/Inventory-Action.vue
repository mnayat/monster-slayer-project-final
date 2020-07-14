<template>
  <div>
    <div class="item-panel">
      <div class="card" v-if="hasSelectedItem">
        <div class="card-body">
          <div>
            <p class="d-inline-block card-title text-center">
              Selected Item
            </p>
            <button
              class="btn btn-danger btn-xs float-right"
              v-if="!isSameItem"
              @click="deleteItem()"
            >
              <fa-icon icon="trash"></fa-icon>
            </button>
          </div>

          <h6 class="card-subtitle mb-2 text-muted">
            {{ selectedItem.name }}
          </h6>
          <div class="row">
            <div
              class="col-md-6 text-uppercase"
              v-for="(bonus, i) in selectedItem.bonus"
              :key="i"
            >
              <div class="row">
                <div class="col-md-7">
                  <p>{{ i }}</p>
                </div>
                <div class="col-md-5 text-right">
                  <p>{{ bonus }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item-panel">
      <div class="card" v-if="hasSelectedItem">
        <div class="card-body">
          <p class="card-title">Current Item - Description</p>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ currentItem.name }}
          </h6>
          <div class="row">
            <div
              class="col-md-6 text-uppercase"
              v-for="(bonus, i) in currentItem.bonus"
              :key="i"
            >
              <div class="row">
                <div class="col-md-7">
                  <p>{{ i }}</p>
                </div>
                <div class="col-md-5 text-right">
                  <p>{{ bonus }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item-panel-button">
      <br />
      <button
        class="btn btn-success btn-block btn-sm"
        :disabled="!isSameClass"
        @click="equipItem()"
      >
        <fa-icon icon="save"></fa-icon>
        Equip
      </button>
      <div class="text-center" v-show="!isSameClass && hasSelectedItem">
        <span class="badge badge-warning">
          <fa-icon icon="exclamation-triangle"></fa-icon>
          You cannot equip the item.
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "isSameItem",
    "isSameClass",
    "hasSelectedItem",
    "selectedItem",
    "currentItem"
  ],
  methods: {
    deleteItem() {
        this.$emit("deleteItem");
    },
    equipItem() {
        this.$emit("equipItem");
    }
  }
};
</script>
