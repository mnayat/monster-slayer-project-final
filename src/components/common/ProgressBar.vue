<template>
  <div>
    <div class="progress" :style="{ height: height + 'px' }">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        :class="[color]"
        role="progressbar"
        :style="{ width: percentage + '%' }"
      >
      {{ percentage }}
      </div>
      <!-- aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style="width: 75%"-->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "bg-success"
    },
    percentage: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      default: 15
    }
  }
};
</script>
