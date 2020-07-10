import { character } from '../configuration/services/character-service.js';
import { HTTP } from '../configuration/http-common.js';

const state = {
    inventory: [],
    character: {},
    dungeons: []
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
    }
}

const actions = {
    getCharacterAsync({ commit }, payload) {
        return HTTP.get(character(payload).getCharacter)
            .then(resp => {
                commit('setCharacter', resp.data);
                console.log(resp.data);
                return resp;
            })
            .catch(err => {
                return err.response
            });
    },
    getDungeonsAsync({ commit }, payload) {
        return HTTP.get(character(payload).getCharacterDungeons)
            .then(resp => {
                commit('setDungeons', resp.data);
                return resp;
            })
            .catch(err => {
                return err.response
            });
    },
    getInventoryAsync({ commit }, payload) {
        return HTTP.get(character(payload).getCharacterInventory)
            .then(resp => {
                commit('setInventory', resp.data);
                return resp;
            })
            .catch(err => {
                return err.response
            })
    },
    updateInventoryAsync({ dispatch }, payload) {
        return HTTP.put(character(payload.characterId).updateCharacterEquipement, payload.request)
            .then(resp => {
                dispatch("getInventoryAsync", payload.characterId);
                console.log(resp);
                return true;
            })
            .catch(err => {
                return err.response;
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