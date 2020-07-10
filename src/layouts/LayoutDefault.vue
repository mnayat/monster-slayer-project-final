<template>
  <div class="imgbackground">
    <div class="container-fluid">
         <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault"
};
</script>
<style>
p{
  font-size:12px;
}
.imgbackground {
  background: url("../assets/backgrounds/splash-screen.gif");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 1280px;
  min-height: 620px;
  height: 100%;
}
.custom-margin {
  margin-top: 10vh;
}
.custom-border {
  border: 5px solid rgba(255, 255, 255, 0.3);
}

.login-box {
  width: 300px;
  min-height: 400px;
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
.startgame-box {
  width: 300px;
  height: 400px;
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
