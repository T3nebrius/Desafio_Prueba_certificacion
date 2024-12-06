import { obtenerTodo, obtenerFaunaPorId } from '@/services/faunaService';
import { createStore } from 'vuex'

export default createStore({
  state: {
    fauna: []
  },
  getters: {
  },
  mutations: {
    setFauna(state, payload){
      state.fauna = payload;
    },
  },
  actions: {
    async fetchTodaFauna(context, ){
      const data = await obtenerTodo();
      if(data){
        context.commit("setFauna", data)
      }
    },
    async fetchFaunaDetalle(context, id){
      const data = await obtenerFaunaPorId(id);
      return data;
    }
  },
  modules: {
  }
})
