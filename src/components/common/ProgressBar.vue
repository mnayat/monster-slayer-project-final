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
