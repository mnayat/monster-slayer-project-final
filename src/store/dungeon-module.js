import { dungeons } from '../configuration/services/dungeon-service.js';
import { HTTP } from '../configuration/http-common.js';

const state = {
    dungeonDetails: {},
    dungeonResult: {}
};

const mutations = {
    setDungeonDetails(state, dungeonDetails) {
        state.dungeonDetails = dungeonDetails;
    },
    setDungeonResult(state, dungeonResult) {
        state.dungeonResult = dungeonResult;
    },

};

const getters = {
    getDungeonDetails: state => {
        return state.dungeonDetails;
    },
    getDungeonResult: state => {
        return state.dungeonResult;
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
    resultDungeonAsync({ commit }, payload) {
        return HTTP.post(dungeons.result, payload)
            .then(resp => {
                commit("setDungeonResult", resp.data);
                return true
            })
            .catch(err => {
                return err.response
            });
    }
}

export const dungeonModule = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
