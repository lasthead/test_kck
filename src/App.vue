<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <router-link to="/">Тестовое задание</router-link>
      </div>
    </header>

    <router-view />
    <modal v-show="isModalActive" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Modal from './components/AppModal.vue';

export default {
  name: 'App',
  components: { Modal },
  computed: {
    ...mapGetters(['isModalActive']),
  },
};
</script>

<style lang="scss">
header {
  min-height: 261px;
  width: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(267.21deg, #900793 0.16%,
  rgba(134, 4, 137, 0.785707) 0.16%, rgba(159, 12, 162, 0.762269) 43.22%,
  rgba(5, 1, 190, 0.734375) 98.12%, rgba(0, 28, 126, 0.619792) 100.15%,
  rgba(6, 77, 142, 0.447917) 102.03%, rgba(1, 0, 60, 0) 102.73%);

  .wrapper {
    line-height: 1.5;
    max-height: 100vh;
    color: white;
    font-weight: 700;
    font-size: 36px;
  }
}
</style>
