import { dungeons } from '../configuration/services/dungeon-service.js';
import { HTTP } from '../configuration/http-common.js';

const state = {
    dungeonDetails: {}
};

const mutations = {
    setDungeonDetails(state, dungeonDetails) {
        state.dungeonDetails = dungeonDetails;
    }
};

const getters = {
    getDungeonDetails: state => {
        return state.dungeonDetails;
    }
};

const actions = {
    enterDungeonAsync({ commit }, payload) {
        return HTTP.post(dungeons.enter, payload)
            .then(resp => {
                commit('setDungeonDetails', resp.data);
                return true;
            })
            .catch(err => {
                return err.response
            });
    },
}

export const dungeonModule = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
