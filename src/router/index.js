import Router from 'vue-router';
import Vue from 'vue';
import MainView from '../views/MainView';

Vue.use(Router);

const router = new Router({
  // mode: 'hash',
  routes: [
    {
      path: '/*',
      name: 'Main',
      component: MainView,
    },
  ],
});

export default router;
