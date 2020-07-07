import { account, characterAccountUrl } from '../configuration/services/account-service.js';
import { HTTP } from '../configuration/http-common.js';

const state = {
    player: {
        accountId: '',
        characterId: ''
    },
    status: {
        loggedIn: true
    }
};

const mutations = {
    loginSuccess(state, player) {
        state.player.characterId = player;
    },
    setCharacter(state, character) {
        state.player.accountId = character;
    },
};

const getters = {
    getAccountIdStores: state => {
        return state.player.accountId;
    },
    getSetCharacteStore: state => {
        return state.player.characterId;
    }
    
};

const actions = {
    loginAsync({ commit }, payload) {
        return HTTP.post(account.login, payload)
            .then(resp => {
                commit('loginSuccess', resp.data.accountId);
                return resp;
            })
            .catch(err => {
                return err.response
            });
    },
    registerAsync({ commit }, payload) {
        return HTTP.post(account.registration, payload)
            .then(resp => {
                //commit('loginSuccess', resp.data.accountId);
                return resp;
            })
            .catch(err => {
                return err.response;
            })
    },
    characterAsync({ commit }, payload) {
        return HTTP.get(characterAccountUrl(payload))
            .then(resp => {
                console.log( "charcater asynx"+  resp)
               commit('setCharacter', resp.data.accountId);
                return resp;
            })
            .catch(err => {
                return err.response;
            })
    }
}

export const accountModule = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}