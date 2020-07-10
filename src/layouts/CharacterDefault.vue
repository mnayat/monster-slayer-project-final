<template>
  <div class="app-container">
  
    <div class="container-fluid app-base-layout">
        <app-menu></app-menu>
        <div class="box">
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
    appMenu: Menu
  },
};
</script>
<style scoped>
p{
  font-size:12px;
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
    width: 800px;
    min-height: 500px;
    height: 30%;
    background: rgba(216, 214, 214, 0.5);
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 10px 50px;

}
</style>
