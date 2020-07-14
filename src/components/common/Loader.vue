
<template>
  <div id="overlay" v-if="showLoader">
    <div class="image-container">
      <img :src="require('../../assets/loader/loading-black-bg.gif')" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props:{
    showLoader : Boolean
  }
};
</script>
<style scoped>
#overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
    cursor: pointer;
}

.image-container {

    height: 170px;
    width: 400px;
    margin-left: calc(50vw - 200px);
    margin-top: calc(50vh - 85px);
}

img {
    width: 150px;
    display: block;
    margin: auto;
}
</style>
