<template>
  <div class="wrapper">
    <SideLeft @onAdd="showAddDialog" class="left-content" />
    <div class="right-content">
      <div class="content-header">
        <div class="select-wrapper">
          <vue-select
            :options="sort"
            label-by="label"
            class="select-component"
            placeholder="Sorting"
          />
        </div>
        <HeaderButtonsGroup :value="this.$route.query?.mode" />
      </div>
      <div class="page-content">
        <template v-if="viewAsList">
          <AppCard
            :key="card.id"
            :name="'Card ' + (index + 1)"
            :type="card.type"
            v-for="(card, index) in getCardsList"
          />
        </template>
        <template v-else />
      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from 'vue-select';
import { mapGetters, mapMutations } from 'vuex';
import SideLeft from '../components/SideLeft.vue';
import AppCard from '../components/AppCard.vue';
import HeaderButtonsGroup from '../components/HeaderButtonsGroup.vue';

export default {
  name: 'MainView',
  components: {
    HeaderButtonsGroup, AppCard, SideLeft, VueSelect,
  },
  data() {
    return {
      value: 'asc',
      sort: [
        { code: 'asc', label: 'Sort by Invoice number: asc' },
        { code: 'desc', label: 'Sort by Invoice number: desc' },
      ],
    };
  },
  computed: {
    ...mapGetters(['getCardsList']),
    viewAsList() {
      return this.$route.query?.mode === 'list';
    },
  },
  methods: {
    ...mapMutations(['SHOW_MODAL']),
    showAddDialog() {
      this.SHOW_MODAL();
    },
  },
};
</script>

<style lang="scss">
.page-content {
  display: grid;
  grid-template-columns: repeat(auto-fit,30%);
  grid-gap: 0;
  gap: 44px;
  margin-top: 20px;
}

.left-content {
  width: 23%;
  min-width: 200px;
}

.right-content {
  width: 75%;
  margin-left: 10px;
  padding-left: 18px;
}

.wrapper {
  display: flex;
  width: 100%;
  padding: 30px 110px;
}

.select-component {
  width: 300px;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;

  .select-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0px 4px 12px #E7E7E7;
    padding: 0 18px;
    margin-right: 20px;
  }
}
</style>
