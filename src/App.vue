<template>
  <div id="app" >
    <router-view style="padding-top:20px;" />
  </div>
</template>

<style>
div {
  display: block;
}
.nomargin {
  margin: 0;
}

.nopadding {
  padding: 0;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}

.bold {
  font-weight: 700;
}

.btn-principal {
    color: gold;
    background: transparent;
    padding: 5px 10px;
    margin: 5px;
    border: 3px solid gold;
}

.app-container {
    min-width: 800px;
    background-image: url('../src/assets/backgrounds/character-bg.jpg');
    background-position: 80%;
    overflow: auto;
}
.app-base-layout{
    width: 800px;
    min-height: 610px;
    color: gold;
    margin: auto;
}

.app-base-layout .app-header{
      height: 30px;
      text-align: center;
      font-family: Target3D;
      font-size: 24px;
}

.app-base-layout .app-body{
      height: 448px;
}
</style>
