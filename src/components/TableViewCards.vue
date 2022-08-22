<template>
  <div>
    <table class="table">
      <tr>
        <th>ID</th>
        <th>Номер накладной</th>
        <th>Тип заказа</th>
        <th>Дата создания</th>
        <th />
      </tr>
      <tr :key="item.id" v-for="item in items">
        <td>{{ item.id }}</td>
        <td>{{ item.invoiceNumber }}</td>
        <td>{{ item.type }}</td>
        <td>{{ formatDate(item.createdAt) }}</td>
        <td>
          <CardEditTools
            inline
            @onEdit="$emit('onEdit', item)"
            @onDelete="$emit('onDelete', item)"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import CardEditTools from './CardEditTools';

export default {
  name: 'TableViewCards',
  components: { CardEditTools },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate(timestamp) {
      return this.$dayjs(timestamp).format('DD.MM.YYYY HH:mm');
    },
  },
};
</script>

<style lang="scss" scoped>
  .table {
    width: 100%;
    border-collapse: collapse;

    th {
      border-right: 3px solid white;
      padding: 15px 28px;
      background: #E6E6E6;
      min-width: 200px;

      &:last-child {
        min-width: 10px;
      }
    }

    tr {
      border-bottom: 1px solid #E6E6E6;
    }
    td {
      padding: 0 10px;
    }
  }
</style>
