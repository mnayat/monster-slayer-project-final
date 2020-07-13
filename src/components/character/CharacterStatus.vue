<template>
  <!-- CharacerStatus Component -->
  <div class="panel" >
    <div class="row">
      <div class="col-sm-4">
        <img :src="defaultInfo.img" />
      </div>
      <div class="col-sm-8">
        <p class="text-center">Character Status</p>
        <div class="row">
          <div class="col-sm-3 offset-1 bold ">Attrib</div>
          <div class="col-sm-2 bold">Base</div>
          <div class="col-sm-2 bold">Bonus</div>
          <div class="col-sm-2 bold">Total</div>
        </div>
        <div class="row">
          <div class="col-sm-3 offset-1 bold">HEALTH</div>
         <div class="col-sm-3 bold ">{{characterApiInfo.stats.health}}</div>
         <div class="col-sm-3 bold ">{{characterApiInfo }}</div>
         <div class="col-sm-3 bold ">{{ TotalHealth }}</div>
        </div>
        <div class="row">
          <div class="col-sm-3 offset-1 bold ">MANA</div>
        </div>  
        <div class="row">
          <div class="col-sm-3 offset-1 bold ">OFF</div>
      
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
export default {
  props: {
    characterApiInfo: Object,
    defaultInfo: Object,
  },
  data() {
    return {
        stats :{}
    };
  },
 computed :{
   TotalHealth(){
    return characterApiInfo.stats.health += characterApiInfo.equipment.weapon.bonus.health;
   }
 }
}
</script>
