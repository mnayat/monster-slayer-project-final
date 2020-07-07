import { account, characterAccountUrl } from '../configuration/services/account-service.js';
import { HTTP } from '../configuration/http-common.js';


const state = {
    player: {
        accountId: '',

    },
    status: {
        loggedIn: true
    }
};
const mutations = {
    loginSuccess(state, player) {
        state.player.accountId = player;
    },
};
const getters = {
       getAccountIdStores: (state) => {
           return state.player.accountId;
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
              return  err.response
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
    }

}


export const accountModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}