
<template>
  <div id="overlay" v-if="showLoader">
    <div class="image-container">
      <img src="../../assets/loader/loading-black-bg.gif" alt="" />
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
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    z-index: 10; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
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
