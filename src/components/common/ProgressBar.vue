<template>
  <div>
    <div class="progress" :style="{ height: height + 'px' }">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        :class="[color]"
        role="progressbar"
        :style="{ width: getPercentage + '%' }"
      >
      {{ currentValue }}
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
    currentValue: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      default: 15
    },
    maxValue: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      minValue: 0
    }
  },
  computed: {
    getPercentage() {
      return (this.currentValue - this.minValue) * 100 / (this.maxValue - this.minValue);
    }
  }
};
</script>
