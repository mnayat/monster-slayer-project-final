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
<<<<<<< HEAD
       getAccountIdStores: (state) => {
=======
       getAccountIdStores(state) {
>>>>>>> e8929a06568e7c6f11b16c7928b1b704e6477641
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