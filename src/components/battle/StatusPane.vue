<template>
    <div class="pane row nomargin">
        <div class="col-sm-3 nopadding">
            <div class="status-pane dark-bg">
                <div class="tile-container white border">
                    <div class="status row nomargin">
                        <div class="col-sm-12 nopadding">Health:</div>
                        <div class="col-sm-12 right nopadding">100/100</div>
                        <div class="col-sm-12 nopadding">Mana:</div>
                        <div class="col-sm-12 right nopadding">100/100</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-9 nopadding">
            <div class="battle-notification dark-bg">
                <div class="tile-container white-border">
                    <div class="message">asdasdasdadsad</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.status-pane {
    height: 120px;
}

.battle-notification .message{
    margin: 10px;
}

.battle-notification {
    height: 120px;
    color: #fff;
    font-family: AtariClassic;
    font-size: 18px;
}

.status-pane .status {
    color: #fff;
    font-size: 12px;
    font-family: AtariClassic;
    margin-top: 15px;
    padding: 3px;
}
</style>