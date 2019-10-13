import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        token:"",
        contentTitle:"",
    },
    mutations:{
        changeToken(state,token){
            state.token = token;
            sessionStorage.setItem("token",token);
        },
        changeTitle(state,title){
            state.contentTitle = title;
        }
    },
    getters:{
      getToken:(state)=> {
          if (!state.token) {
              state.token = sessionStorage.getItem("token");
          }
          return state.token;
      },
      getTitle: state => {
          return state.contentTitle;
      }
    },
    actions:{
        changeToken(context,token){
            context.commit("changeToken",token);
        },
        changeTitle(context,title){
            context.commit("changeTitle",title);
        }
    }
});
export default store;