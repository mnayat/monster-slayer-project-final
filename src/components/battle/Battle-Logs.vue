<template>
  <div v-if="message !== ''" class="alert alert-success" role="alert">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>
<style>

</style>
