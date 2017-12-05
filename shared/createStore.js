import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function createStore(){
  const LOADING_TEXT = 'loading...';

  return new Vuex.Store({
    state: {
      renderedName: LOADING_TEXT
    },
    mutations: {
      changeRenderedName: function(state, payload){
        state.renderedName = payload;
      },
      showLoading: function(state){
        state.renderedName = LOADING_TEXT
      }
    }
  });
};