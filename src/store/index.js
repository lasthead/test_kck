import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    modal: {
      active: false,
      params: {},
      options: [
        'RUED',
        'UED',
        'MAPPED',
        'OIK',
        'CRUD',
      ],
    },
    cards: [
      {
        id: '1',
        invoiceNumber: '223',
        type: 'RUED',
        createdAt: Date.now(),
      },
      {
        id: '2',
        invoiceNumber: '1223',
        type: 'CUED',
        createdAt: Date.now(),
      },
      {
        id: '3',
        invoiceNumber: 'string 123',
        type: 'MAPPED',
        createdAt: Date.now(),
      },
    ],
  },
  getters: {
    getCardsList: (state) => state.cards,
    getModalOptions: (state) => state.modal.options,
    getModalParams: (state) => state.modal.params,
    isModalActive: (state) => state.modal.active,
  },
  mutations: {
    CREATE_CARD: (state, payload) => {
      if (!payload.id) {
        const params = {
          ...payload,
          id: Math.floor(Math.random() * 1000),
          createdAt: Date.now(),
        };
        state.cards.push(params);
      } else {
        const index = state.cards.findIndex((o) => o.id === payload.id);
        Vue.set(state.cards, index, payload);
      }
    },
    DELETE_CARD: (state, payload) => {
      const index = state.cards.findIndex((o) => o.id === payload.id);
      if (index !== -1) {
        state.cards.splice(index, 1);
      }
    },
    SHOW_MODAL: (state, payload = null) => {
      console.log(payload);
      if (payload?.id) {
        state.modal.params = { ...payload };
      }

      state.modal.active = true;
    },
    HIDE_MODAL: (state) => {
      state.modal.params = {};
      state.modal.active = false;
    },
  },
  actions: {},
});

export default store;
