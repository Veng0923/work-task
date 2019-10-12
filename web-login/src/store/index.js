import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        token:"",
    },
    mutations:{
        changeToken(state,token){
            state.token = token;
            sessionStorage.setItem("token",token);
        },
    },
    getters:{
      getToken(state){
          if (!state.token) {
              state.token = sessionStorage.getItem("token");
          }
          return state.token;
      }
    },
    actions:{
        changeToken(context,token){
            context.commit("changeToken",token);
        }
    }
});
export default store;