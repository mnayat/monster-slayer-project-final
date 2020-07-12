<template>
  <div>
    <apploader :showLoader="showLoader"></apploader>
    <div class="text-center">Inventory</div>
    <div class="row box">
      <div class="col-sm-8">
        <div class="panel">
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
      </div>
      <div class="col-sm-4">
        <div class="item-panel">
          <div class="card" v-if="hasSelectedItem">
            <div class="card-body">
              <div>
                <p class="d-inline-block card-title text-center">
                  Selected Item
                </p>
                <button
                  class="btn btn-danger btn-xs float-right"
                  v-if="!isSameItem"
                  @click="deleteItem()"
                >
                  <fa-icon icon="trash"></fa-icon>
                </button>
              </div>

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
                      <p>{{ i }}</p>
                    </div>
                    <div class="col-md-5 text-right">
                      <p>{{ bonus }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-panel">
          <div class="card" v-if="hasSelectedItem">
            <div class="card-body">
              <p class="card-title">Current Item - Description</p>
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
                      <p>{{ i }}</p>
                    </div>
                    <div class="col-md-5 text-right">
                      <p>{{ bonus }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-panel-button">
          <br />
          <button
            class="btn btn-success btn-block btn-sm"
            :disabled="!isSameClass"
            @click="equipItem()"
            data-toggle="tooltip"
            data-placement="top"
            title="Tooltip on top"
          >
            <fa-icon icon="save"></fa-icon>
            Equip
          </button>
          <div class="text-center" v-show="!isSameClass && hasSelectedItem">
            <span class="badge badge-warning">
              <fa-icon icon="exclamation-triangle"></fa-icon>
              You cannot equip the item.
            </span>
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
  data() {
    return {
      characterId: "",
      hasSelectedItem: false,
      selectedItem: {},
      currentItem: {},
      isSameClass: false,
      updateInventoryPayload: {
        characterId: "",
        request: {
          weaponId: "",
          armorId: ""
        }
      },
      deleteInventoryPayload: {
        characterId: "",
        inventoryId: ""
      },
      showLoader: false
    };
  },
  created() {
    this.characterId = this.getSession(sessionKeys.character);
    this.updateInventoryPayload.characterId = this.characterId;
    this.deleteInventoryPayload.characterId = this.characterId;

    this.getCharacter();
    this.getInventory();
  },
  methods: {
    getInventory() {
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.getInventory, this.characterId)
        .then((res) => {
          if (res != true) this.showErrorToast();
          this.showLoader = false;
        });
    },
    getDescription(itemId) {
      this.hasSelectedItem = true;
      this.isSameClass = false;
      let inventory = this.inventory.find((x) => x._id == itemId);
      this.deleteInventoryPayload.inventoryId = inventory._id;
      this.selectedItem = inventory.item;
      if (this.selectedItem.type === "WPN") {
        this.currentItem = this.character.equipment.weapon;
        this.isSameClass =
          this.character.equipment.weapon.classId === this.selectedItem.classId;
      } else {
        this.currentItem = this.character.equipment.armor;
        this.isSameClass =
          this.character.equipment.armor.classId === this.selectedItem.classId;
      }
    },
    getCharacter() {
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.getCharacter, this.characterId)
        .then((res) => {
          if (res === true) {
            this.updateEquippedItem(
              this.character.equipment.armor.type,
              this.character.equipment.armor._id
            );
            this.updateEquippedItem(
              this.character.equipment.weapon.type,
              this.character.equipment.weapon._id
            );
          } else {
            this.showErrorToast();
          }

          this.showLoader = false;
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
      this.updateInventory();
    },
    updateInventory() {
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.updateInventory, this.updateInventoryPayload)
        .then((res) => {
          if (res === true) {
            this.showToast(
              "success",
              "Inventory has been updated successfully!"
            );
          } else {
            this.showErrorToast();
          }
          this.showLoader = false;
        });
    },
    deleteItem() {
      this.showLoader = true;
      this.$store
        .dispatch(characterActions.deleteInventory, this.deleteInventoryPayload)
        .then((res) => {
          if (res === true) {
            this.showToast(
              "success",
              "Selected Item has been deleted successfully!"
            );

            this.selectedItem = {};
            this.hasSelectedItem = false;
            this.isSameClass = false;
          } else {
            this.showErrorToast();
          }
          this.showLoader = false;
        });
    }
  },
  computed: {
    character() {
      return this.$store.getters["characterModule/getCharacter"];
    },
    inventory() {
      return this.$store.getters["characterModule/getInventory"];
    },
    inventoryPerCategory() {
      return this.inventory.item.name;
    },
    isSameItem() {
      return this.selectedItem.name === this.currentItem.name;
    }
  }
};
</script>
<style>
.card {
  background-color: #ffffff8a;
}
</style>
