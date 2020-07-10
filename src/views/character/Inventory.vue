<template>
  <div class="">
    <div class="app-base-layout">
      <app-menu></app-menu>
      <div class="app-header row nomargin">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">Inventory</div>
        <div class="col-sm-2"></div>
      </div>
      <div class="app-body">
        <div class="row">
          <div class="col-md-7">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div
                    class="col-md-6"
                    v-for="(item, i) in inventory"
                    :key="i"
                    style="padding-top:5px;"
                  >
                    <button
                      class="btn btn-primary btn-sm btn-block"
                      @click="getDescription(item._id)"
                    >
                      {{ item.item.name }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Selected Item</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {{ selectedItem.name }}
                </h6>
                <div class="row">
                  <div
                    class="col-md-6 text-uppercase"
                    v-for="(bonus, i) in selectedItem.bonus"
                    :key="i"
                  >
                    <div class="row">
                      <div class="col-md-7">
                        {{ i }}
                      </div>
                      <div class="col-md-5 text-right">
                        {{ bonus }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                Current Item - Description
                <h6 class="card-subtitle mb-2 text-muted">
                  {{ currentItem.name }}
                </h6>
                <div class="row">
                  <div
                    class="col-md-6 text-uppercase"
                    v-for="(bonus, i) in currentItem.bonus"
                    :key="i"
                  >
                    <div class="row">
                      <div class="col-md-7">
                        {{ i }}
                      </div>
                      <div class="col-md-5 text-right">
                        {{ bonus }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="btn btn-primary btn-block btn-sm"
              :disabled="!this.isSameClass"
              @click="equipItem()"
            >
              Equip
            </button>
            <button
              class="btn btn-primary btn-block btn-sm"
              @click="updateInventory()"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "../Menu";
import SessionMixin from "../../mixins/session-mixin";
import sessionKeys from "../../configuration/session/sessionKeys";
import characterActions from "./../../configuration/actionNames/character-action";
export default {
  mixins: [SessionMixin],
  components: {
    appMenu: Menu
  },
  data() {
    return {
      characterId: "",
      inventory: [],
      selectedItem: {},
      currentItem: {},
      //character: {},
      isSameClass: false,
      updateInventoryPayload: {
        characterId: "",
        request: {
          weaponId: "",
          armorId: ""
        }
      }
    };
  },
  created() {
    this.characterId = this.getSession(sessionKeys.character);
    this.updateInventoryPayload.characterId = this.characterId;
    this.getCharacter();
    this.getInventory();
  },
  methods: {
    getInventory() {
      this.$store
        .dispatch(characterActions.getInventory, this.characterId)
        .then((res) => {
          this.inventory = this.$store.getters["characterModule/getInventory"];
        });
    },
    getDescription(itemId) {
      this.isSameClass = false;
      this.selectedItem = this.inventory.find((x) => x._id == itemId).item;
      if (this.selectedItem.type === "WPN") {
        this.currentItem = this.character.equipment.weapon;
        this.isSameClass =
          this.character.equipment.weapon.classId === this.selectedItem.classId;
      } else {
        this.currentItem = this.character.equipment.armor;
        this.isSameClass =
          this.character.equipment.weapon.classId === this.selectedItem.classId;
      }
    },
    getCharacter() {
      this.$store
        .dispatch(characterActions.getCharacter, this.characterId)
        .then((res) => {
          //this.character =
          this.updateEquippedItem(
            this.character.equipment.armor.type,
            this.character.equipment.armor._id
          );
          this.updateEquippedItem(
            this.character.equipment.weapon.type,
            this.character.equipment.weapon._id
          );
        });
    },
    updateEquippedItem(type, value) {
      if (type === "WPN") {
        this.updateInventoryPayload.request.weaponId = value;
      } else {
        this.updateInventoryPayload.request.armorId = value;
      }
    },
    equipItem() {
      this.updateEquippedItem(this.selectedItem.type, this.selectedItem._id);
    },
    updateInventory() {
      this.$store
        .dispatch(characterActions.updateInventory, this.updateInventoryPayload)
        .then((res) => {
          console.log(this.character);
        });
    }
  },
  computed: {
    character() {
      return this.$store.getters["characterModule/getCharacter"];
    }
  }
};
</script>
<style>
.card {
  background-color: #ffffff8a;
}
</style>
