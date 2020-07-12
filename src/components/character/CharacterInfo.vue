<template>
  <!-- Characterdefault Component -->
  <div class="panel">
    <div>
      <p class="text-center">{{ characterApiInfo.name }}</p>
    </div>
    <div class="row">
      <div class="col-sm-6">Level</div>
      <div class="col-sm-6">{{ characterApiInfo.level }}</div>
      <div class="col-sm-6">Class</div>
      <div class="col-sm-6">{{ defaultInfo.name }}</div>
      <div class="col-sm-6">Total Exp</div>
      <div class="col-sm-6">{{ characterApiInfo.totalExp }}</div>
      <div class="col-sm-6">Next lvl</div>
      <div class="col-sm-6">{{ characterApiInfo.nextLevelExp }}</div>
      <div class="col-sm-4">Char Id</div>
      <div class="col-sm-6 offset-2">
        <p>{{ characterApiInfo._id }}</p>
      </div>
      <div class="col-sm-6">Dungeon</div>
      <div class="col-sm-6">{{ characterApiInfo.dungeonAccess[0].name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    characterApiInfo: Object,
    defaultInfo: Object,
  },
};
</script>
