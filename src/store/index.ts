import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    variableList: ["id", "name", "image", "gender", "mailAddress", "errorMessage"]
  },
  actions: {
  },
  mutations: {
    addVariables(state){
      return (newVariable: string) => {
        state.variableList.push(newVariable);
      }
    }
  },
  getters: {
    getVariableArray(state): Array<string>{
      return state.variableList;
    },
  },
  modules: {
  }
})
