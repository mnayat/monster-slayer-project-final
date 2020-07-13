 export function character(id, inventoryId = '') {
   return {
            getCharacter: `/character/${id}`, //charcter id
            getCharacterInventory: `/character/${id}/inventory`,//charcter id
            updateCharacterEquipement: `/character/${id}/equipment`, //charcter id
            deleteCharacterInventory: `/character/${id}/inventory/${inventoryId}`, //charcter id, inventoryid
            getCharacterSkills : `/character/${id}/skills`,
            updateCharacterSkills: `/character/${id}/skills`, //skill id
            getCharacterDungeons: `/character/${id}/dungeons`
        }

  }

