import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: [
      {
        id: '1',
        type: 'RUED',
      },
      {
        id: '2',
        type: 'RUED',
      },
      {
        id: '3',
        type: 'RUED',
      },
    ],
  },
  getters: {
    getCardsList: (state) => state.cards,
  },
  mutations: {
    CREATE_CARD: (state, card) => {
      state.cards.push(card);
    },
  },
  actions: {},
});

export default store;
