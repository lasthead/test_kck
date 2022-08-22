import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    modal: {
      active: false,
      params: {
        options: [
          'RUED',
          'UED',
        ],
      },
    },
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
    getModalParams: (state) => state.modal,
    isModalActive: (state) => state.modal.active,
  },
  mutations: {
    CREATE_CARD: (state, card) => {
      state.cards.push(card);
    },
    SHOW_MODAL: (state, params) => {
      state.modal.active = true;

      if (params) {
        state.modal.params = params;
      }
    },
    HIDE_MODAL: (state) => {
      state.modal.active = false;
    },
  },
  actions: {},
});

export default store;
