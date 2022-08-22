<template>
  <div class="wrapper">
    <SideLeft v-model="searchInvoice" @onAdd="showAddDialog" class="left-content" />
    <div class="right-content">
      <div class="content-header">
        <div class="select-wrapper">
          <vue-select
            v-model="computedSort"
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
            @onEdit="handleEdit"
            @onDelete="handleDelete"
            :key="card.id"
            :params="card"
            v-for="(card) in sortedList"
          />
        </template>
        <template v-else>
          <TableViewCards
            @onEdit="handleEdit"
            @onDelete="handleDelete"
            :items="sortedList"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from 'vue-select';
import { mapGetters, mapMutations } from 'vuex';
import SideLeft from '@/components/SideLeft';
import AppCard from '@/components/AppCard';
import HeaderButtonsGroup from '@/components/HeaderButtonsGroup';
import TableViewCards from '@/components/TableViewCards';

export default {
  name: 'MainView',
  components: {
    TableViewCards,
    HeaderButtonsGroup,
    AppCard,
    SideLeft,
    VueSelect,
  },
  data() {
    return {
      sortVal: '',
      searchInvoice: '',
      sort: [
        { code: 'asc', label: 'Sort by Invoice number: asc' },
        { code: 'desc', label: 'Sort by Invoice number: desc' },
      ],
    };
  },
  computed: {
    ...mapGetters(['getCardsList']),
    computedSort: {
      get() {
        return this.sortVal?.code || '';
      },
      set(newValue) {
        this.sortVal = newValue;
      },
    },
    viewAsList() {
      return this.$route.query?.mode === 'list';
    },
    sortedList() {
      let list = this.getCardsList;

      if (this.searchInvoice) {
        list = list.filter((o) => o.invoiceNumber.includes(this.searchInvoice));
      }

      if (this.sortVal?.code === 'desc') {
        return list.sort((a, b) => (a.invoiceNumber > b.invoiceNumber ? -1 : 1));
      }
      if (this.sortVal?.code === 'asc') {
        return list.sort((a, b) => (b.invoiceNumber < a.invoiceNumber ? 1 : -1));
      }

      return list;
    },
  },
  methods: {
    ...mapMutations(['SHOW_MODAL', 'DELETE_CARD']),
    showAddDialog() {
      this.SHOW_MODAL();
    },
    handleEdit(e) {
      this.SHOW_MODAL(e);
    },
    handleDelete(e) {
      this.DELETE_CARD(e);
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
