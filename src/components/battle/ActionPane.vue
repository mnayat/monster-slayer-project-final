<template>
  <div class="action-pane-container dark-bg">
    <div class="tile-container white-border">
      <div class="actions row nomargin">
        <div class="col-sm-6 nopadding">
          <button class="btn-principal">Attack</button>
        </div>
        <div class="col-sm-6 nopadding">
          <button class="btn-principal">Focus</button>
        </div>
        <div class="col-sm-12 row nopadding nomargin">
          <div class="col-sm-10 nopadding">
            <button class="btn-principal">Starfall</button>
          </div>
          <div class="col-sm-2 nopadding skill-cost">0</div>
        </div>
        <div class="col-sm-6 nopadding">
          <button class="btn-principal">Run Away</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.action-pane-container {
  position: absolute;
  min-width: 230px;
  max-width: 295px;
  right: calc(50vw + 300px);
  top: 220px;
  border-radius: 8px;
}

.action-pane-container .actions .skill-cost {
  padding-top: 15px;
}
.white-border {
  height: 100%;
  border: 2px solid #fff;
  margin: 3px;
  border-radius: 8px;
  padding: 2px;
}

.action-pane-container .actions {
  font-family: AtariClassic;
  font-size: 10px;
}
</style>
