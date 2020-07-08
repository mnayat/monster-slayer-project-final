import { account, characterAccountUrl } from '../configuration/services/account-service.js';
import { HTTP } from '../configuration/http-common.js';

const state = {
    player: {
        accountId: '',
        characterId: ''
    }
};

const mutations = {
    setCharacterId(state, characterId) {
        state.player.characterId = characterId;
    },
    setAccountId(state, accountId) {
        state.player.accountId = accountId;
    },
};

const getters = {
    getAccountIdStores: state => {
        return state.player.accountId;
    },
    getCharacteStore: state => {
        return state.player.characterId;
    }

};

const actions = {
    loginAsync({ commit }, payload) {
        return HTTP.post(account.login, payload)
            .then(resp => {
                console.log(resp.data.accountId);
                commit('setCharacterId', resp.data.accountId);
                return resp;
            })
            .catch(err => {
                return err.response
            });
    },
    registerAsync({ commit }, payload) {
        return HTTP.post(account.registration, payload)
            .then(resp => {
                return resp;
            })
            .catch(err => {
                return err.response;
            })
    },
    characterAsync({ commit }, payload) {
        return HTTP.get(characterAccountUrl(payload))
            .then(resp => {
                console.log("charcater asynx" + resp)
                commit('setAccountId', resp.data.accountId);
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