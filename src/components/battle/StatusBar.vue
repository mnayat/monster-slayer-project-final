<template>
    <div class="status-bar-container">
        <div class="status-bar">
            <div class="health-bar">
                <div class="total-health"></div>
            </div>
            <div class="mana-bar">
                <div class="total-mana"></div>
            </div>
            <div class="name-bar row nomargin">
                <div class="col-sm-2 nppadding right-border transparent-border"></div>
                <div class="col-sm-8 nppadding dark-bg"></div>
                <div class="col-sm-2 nppadding left-border transparent-border"></div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.status-bar {
    margin: 5px;
    border: 3px solid #01091e;
    border-radius: 5px;
    padding: 3px;
}

.dark-bg {
    background-image: linear-gradient(90deg,#000,#00008b);
}

.status-bar .health-bar {
    width: 100%;
    border: 1px solid #fff;
    height: 25px;
}

.status-bar .health-bar .total-health {
    height: 23px;
    background-color: green;
}

.status-bar .mana-bar .total-mana{
    width: 100%;
    height: 4px;
    background-color: blue;
}
.status-bar .mana-bar {
    margin-top: 2px;
    width: 100%;
    border: 1px solid #fff;
    height: 6px;
}
.status-bar .name-bar {
    text-align: center;
    font-size: 12px;
    margin-top: 2px!important;
    color: #fff;
}

.status-bar .name-bar .right-border {
    border-right: 12px solid #000;
}
.status-bar .name-bar .left-border {
    border-left: 12px solid #00008b;
}

.status-bar .name-bar .transparent-border {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
</style>