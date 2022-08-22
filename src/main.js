import Vue from 'vue';
import Dayjs from 'vue-dayjs';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import './assets/main.css';
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false;

Vue.use(Dayjs);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
