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
<style scope>
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
.flex-container {
  display: inline-flex;
  flex-wrap: nowrap;
}

.flex-container .tile {
  margin: 20px;
  height: 150px;
  width: 300px;
  margin: 15px auto 30px;
  background-size: cover;
  cursor: pointer;
}

.flex-container .tile .locked-overlay {
  height: 150px;
  width: 300px;
}
.panel-container {
  padding: 15px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  height: 230px;
  overflow-x: auto;
}
</style>
