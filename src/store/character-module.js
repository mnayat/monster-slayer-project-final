import { character } from '../configuration/services/character-service.js';
import { HTTP } from '../configuration/http-common.js';

const actions = {
    getCharacterAsync( {commit}, payload) {
        return HTTP.get(character("5ead2646e166ed0017e960be").getCharacter)
            .then(resp => {
                return resp;
            })
            .catch(err => {
              return  err.response
            });
    },
    getDungeonsAsync( {commit}, payload) {
        return HTTP.get(character("5ead2646e166ed0017e960be").getCharacterDungeons)
            .then(resp => {
                return resp;
            })
            .catch(err => {
              return  err.response
            });
    },
}


export const characterModule = {
    namespaced: true,
    actions,

}