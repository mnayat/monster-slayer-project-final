<template>
  <!-- Characterdefault Component -->
  <div class="panel">
    <div class="row">
      <div class="col-sm-4">
        <img :src="defaultInfo.img" />
      </div>
      <div class="col-sm-8" v-if="character !== undefined">
        <p class="text-center">Character Status</p>
        <div class="row">
          <div class="col-sm-3 offset-1">
            <b>Attrib</b>
          </div>
          <div class="col-sm-2"><b>Base</b></div>
          <div class="col-sm-2"><b>Bonus</b></div>
          <div class="col-sm-2"><b>Total</b></div>
        </div>
        <div class="row" v-for="(stats, i) in character.stats" :key="i">
          <div class="col-sm-3 offset-1 text-uppercase">
            <b>{{ i }}</b>
          </div>
          <div class="col-sm-2 text-right">
            <b>{{ stats }}</b>
          </div>
          <div class="col-sm-2 text-right">
            <b>
              {{
                character.equipment.armor.bonus[i] +
                  character.equipment.weapon.bonus[i]
              }}
            </b>
          </div>
          <div class="col-sm-2 text-right">
            {{
              character.equipment.armor.bonus[i] +
                character.equipment.weapon.bonus[i] +
                stats
            }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <router-link
          class="btn btn-success btn-block"
          to="/character/Inventory"
        >
          <fa-icon icon="gamepad"></fa-icon>
          Inventory
        </router-link>
        <router-link class="btn btn-success btn-block" to="/character/Skills">
          <fa-icon icon="gamepad"></fa-icon>
          Skills
        </router-link>
      </div>
      <div class="offset-1 col-sm-6">
        <p>Equipment</p>
        <div
          class="row"
          v-for="(equipments, i) in character.equipment"
          :key="i"
        >
          <div class="col-sm-3  bold text-uppercase">{{ i }}</div>
          <div class="col-sm-9 bold text-right">
            <!-- <img :src="require('../../assets/icons/inventory/classId/' + equipments.classId + '/' + equipments.name + '.png')" /> -->
            {{ equipments.name }}
          </div>
        </div>
      </div>
      <div class="offset-4 col-sm-6">
        <p>Skills</p>
        <div class="row" v-for="(skills, i) in character.skills" :key="i">
          <div class="col-sm-6 bold">
            <!-- <img :src="require('../../assets/icons/skills/' + skills.type + '.png')" /> -->
            {{ skills.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    character: Object,
    defaultInfo: Object
  }
};
</script>
