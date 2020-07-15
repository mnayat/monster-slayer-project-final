<template>
  <div>
    <apploader :showLoader="showLoader"></apploader>
    <div class="text-center">Inventory</div>
    <div class="row box">
      <div class="col-sm-8">
        <app-inventory-item
          :inventory="inventory"
          @getDescription="getDescription"
        ></app-inventory-item>
      </div>
      <div class="col-sm-4">
        <app-inventory-action
          :isSameItem="isSameItem"
          :isSameClass="isSameClass"
          :hasSelectedItem="hasSelectedItem"
          :selectedItem="selectedItem"
          :currentItem="currentItem"
          @deleteItem="deleteItem"
          @equipItem="equipItem"
        ></app-inventory-action>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "../Menu";
import characterActions from "./../../configuration/actionNames/character-action";
import InventoryItem from "./../../components/inventory/Inventory-Item";
import InventoryAction from "./../../components/inventory/Inventory-Action";

export default {
  components: {
    appInventoryItem: InventoryItem,
    appInventoryAction: InventoryAction
  },
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
    this.characterId = this.getSession(this.sessionKeys.character);
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
