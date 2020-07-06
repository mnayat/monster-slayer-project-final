import { accountService } from '../configuration/services/account-service.js';
import { HTTP } from '../configuration/http-common.js';
import router from '@/router'

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
const actions = {
    loginAsync({ commit }, payload) {
        return HTTP.post(accountService.account.url.login, payload)
            .then(resp => {

                commit('loginSuccess', resp.data.accountId);
                return resp;
            })
            .catch(err => {
              return  err.response
            });
    },
    registerAsync({ commit }, payload) {
        return HTTP.post(accountService.account.url.registration, payload)
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

}