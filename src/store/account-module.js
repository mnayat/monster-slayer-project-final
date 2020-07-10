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
    getAccountId: state => {
        return state.player.accountId;
    },
    getCharacterId: state => {
        return state.player.characterId;
    }

};

const actions = {
    loginAsync({ commit }, payload) {
        return HTTP.post(account.login, payload)
            .then(resp => resp.data.accountId
            ).then((resp) => {
                commit('setAccountId', resp);
                return true;
            })
            .catch(err => {
                console.log(err.response)
               return  err.response 
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
    
        return HTTP.get(characterAccountUrl(payload).character)
            .then(resp => {
                console.log( resp)
                commit('setCharacterId', resp.data._id);
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