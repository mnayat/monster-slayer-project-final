import { character } from '../configuration/services/character-service.js';
import { HTTP } from '../configuration/http-common.js';

const state = {
    inventory: [],
    character: {},
    dungeons: [],
    skills: []
};

const mutations = {
    setCharacter(state, character) {
        state.character = character
    },
    setDungeons(state, dungeons) {
        state.dungeons = dungeons
    },
    setInventory(state, inventory) {
        state.inventory = inventory;
    },
    setSkills(state, skills) {
        state.skills = skills;
    }
}

const getters = {
    getCharacter(state) {
        return state.character;
    },
    getDungeons(state) {
        return state.dungeons;
    },
    getInventory(state) {
        return state.inventory;
    },
    getSkills(state) {
        return state.skills;
    }
}

const actions = {
    getCharacterAsync({ commit }, payload) {
        return HTTP.get(character(payload).getCharacter)
            .then(resp => {
                commit('setCharacter', resp.data);
                return true;
            })
            .catch(err => {
                return err.response
            });
    },
    getDungeonsAsync({ commit }, payload) {
        return HTTP.get(character(payload).getCharacterDungeons)
            .then(resp => {
                commit('setDungeons', resp.data);
                return true;
            })
            .catch(err => {
                return err.response
            });
    },
    getInventoryAsync({ commit }, payload) {
        return HTTP.get(character(payload).getCharacterInventory)
            .then(resp => {
                commit('setInventory', resp.data);
                return true;
            })
            .catch(err => {
                return err.response
            });
    },
    updateInventoryAsync({ dispatch }, payload) {
        return HTTP.put(character(payload.characterId).updateCharacterEquipement, payload.request)
            .then(resp => {
                //dispatch("getInventoryAsync", payload.characterId);
                dispatch("getCharacterAsync", payload.characterId);
                return true;
            })
            .catch(err => {
                return err.response;
            });
    },
    deleteInventoryAsync({ dispatch }, payload) {
        return HTTP.delete(character(payload.characterId, payload.inventoryId).deleteCharacterInventory)
            .then(resp => {
                dispatch("getInventoryAsync", payload.characterId);
                return true;
            })
            .catch(err => {
                return err.response;
            });
    },
    getSkillsAsync({ commit }, payload) {
        return HTTP.get(character(payload).getCharacterSkills)
            .then(resp => {
                commit('setSkills', resp.data);
                return true;
            })
            .catch(err => {
                return err.response
            });
    },
    updateSkillsAsync({ dispatch }, payload) {
        console.log(payload);
        return HTTP.put(character(payload.characterId).updateCharacterSkills, payload.request)
            .then(resp => {
                dispatch('getSkillsAsync', payload.characterId);
                return true;
            })
            .catch(err => {
                return err.response
            })
    }
}

export const characterModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}