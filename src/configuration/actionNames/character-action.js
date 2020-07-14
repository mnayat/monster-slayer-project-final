const moduleName = 'characterModule'

const characterActions = {
    getCharacter: `${moduleName}/getCharacterAsync`,
    getDungeons: `${moduleName}/getDungeonsAsync`,
    getInventory: `${moduleName}/getInventoryAsync`,
    updateInventory: `${moduleName}/updateInventoryAsync`,
    deleteInventory: `${moduleName}/deleteInventoryAsync`,
    getSkills: `${moduleName}/getSkillsAsync`,
}

export default characterActions;