import { accountService } from '../configuration/services/account-service.js';
import { HTTP } from '../configuration/http-common.js';
import router from '@/router'

const state = {
    player:{
        accountId: '',

    },
    status:{
        loggedIn: true
    }
};
const mutations = {
    loginSuccess(state, player){
        state.player.accountId = player;
      
    },
};
 const actions = {
        login( { commit }, payload){
           return HTTP.post(accountService.account.url.login, payload)
            .then(resp =>
                 {
                   
                     commit('loginSuccess',resp.data.accountId);
                     return resp;
                 }
            )
          .catch(err => {
            err.response
            });
        }
        
}


export const accountModule = {
    namespaced: true,
    state,
    mutations,
    actions,
  
}