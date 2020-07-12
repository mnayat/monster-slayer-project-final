const moduleName = 'characterModule'

const characterActions = {
    getCharacter: `${moduleName}/getCharacterAsync`,
    getDungeons: `${moduleName}/getDungeonsAsync`,
    getInventory: `${moduleName}/getInventoryAsync`,
    updateInventory: `${moduleName}/updateInventoryAsync`,
    deleteInventory: `${moduleName}/deleteInventoryAsync`
}

export default characterActions;