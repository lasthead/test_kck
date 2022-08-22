import Router from 'vue-router'
import MainView from '../views/MainView.vue'
import Vue from "vue";

Vue.use(Router);

const router = new Router({
  // mode: 'hash',
  routes: [
    {
      path: '/*',
      name: 'Main',
      component: MainView
    },
  ]
})

export default router
