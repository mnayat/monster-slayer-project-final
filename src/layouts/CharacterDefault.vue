<template>
  <div class="app-container">
    <div class="container-fluid app-base-layout">
      <app-menu></app-menu>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../views/Menu";
export default {
  name: "LayoutDefault",
  components: {
    appMenu: Menu,
  },
};
</script>
<style>
p {
  font-size: 12px;
}
.app-container {
  background: url("../assets/backgrounds/character-bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-width: 800px;
  min-height: 620px;
  height: 100%;
}
.app-base-layout {
  width: 800px;
  min-height: 610px;
  color: gold;
  margin: auto;
}
.box {
    margin-top: 30px;
    width: 1000px;
    min-height: 500px;
    height: 30%;
    background: rgba(216, 214, 214, 0.5);
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 24px 50px;
}
.panel {
  padding: 15px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  height: 450px;
  overflow-x:auto;
}
.item-panel {
  border: 1px solid #ffffff;
  border-radius: 8px;
  height: 150px;
  overflow-x:auto;
  color: black;
 margin-bottom: 20px;
}
.item-panel p{
  font-size: 10px;
  font-weight: bold;
}

.item-panel-button {
    border: 1px solid #ffffff;
    border-radius: 8px;
    height: 100px;
    color: black;
    margin-bottom: 20px;
    padding: 10px;
}
</style>
