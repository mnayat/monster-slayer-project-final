<template>
  <div>
    <router-view />
    <div class="text-center">Character Status</div>
    <div class="row box">
      <div class="col-sm-3">
        <div class="panel">
          Character Name
          <div class="row">
            <div class="col-sm-6"> Level </div>
             <div class="col-sm-6"> {{level }}</div>
          </div>
        </div>
      </div>
      <div class="col-sm-9">
        <div class="item-panel">
          test panel  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
