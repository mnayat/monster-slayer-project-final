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
                <div class="col-sm-3 offset-1 bold ">Attrib</div>
                <div class="col-sm-2 bold">Base</div>
                <div class="col-sm-2 bold">Bonus</div>
                <div class="col-sm-2 bold">Total</div>
              </div>
              <div class="row" v-for="(stats, i) in character.stats" :key="i">
                <div class="col-sm-3 offset-1 bold text-uppercase">{{ i }}</div>
                <div class="col-sm-2 bold text-right">{{ stats }}</div>
                <div class="col-sm-2 bold text-right">
                  {{
                    character.equipment.armor.bonus[i] +
                      character.equipment.weapon.bonus[i]
                  }}
                </div>
                <div class="col-sm-2 bold text-right">
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
            <div class="col-sm-4 offset-3">
              <p>Equipment</p>
              <div
                class="row"
                v-for="(equipments, i) in character.equipment"
                :key="i"
              >
                <div class="col-sm-6  bold text-uppercase">{{ i }}</div>
                <div class="col-sm-6 bold text-right">
                  {{ equipments.name }}
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <p>Skills</p>
              <div class="row" v-for="(skills, i) in character.skills" :key="i">
                <div class="col-sm-6 bold text-right">{{ skills.name }}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-9"></div>
            <div class="col-sm-3">
              <router-link
                class="btn btn-success btn-block"
                to="/character/Inventory"
              >
                <fa-icon icon="gamepad"></fa-icon>
                Inventory
              </router-link>
              <router-link
                class="btn btn-success btn-block"
                to="/character/Skills"
              >
                <fa-icon icon="gamepad"></fa-icon>
                Skills
              </router-link>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  props: {
    character: Object,
    defaultInfo: Object,
  },
};
</script>
