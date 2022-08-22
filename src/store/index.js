import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cards: [
      {
        id: '1',
        type: 'RUED'
      },
      {
        id: '2',
        type: 'RUED'
      },
      {
        id: '3',
        type: 'RUED'
      }
    ]
  },
  getters,
  mutations,
  actions: {},
})

export default store;
