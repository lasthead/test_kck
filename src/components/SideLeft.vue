<template>
  <div class="side-left">
    <button
      @click="$emit('onAdd')"
      @keydown="$emit('onAdd')"
      type="button"
      class="button__add">
      <img class="button__add_icon" src="../assets/icons/plus.svg" alt="" />
      <span> добавить </span>
    </button>
    <AppFilters v-model="computedValue" class="filters" />
  </div>
</template>

<script>
import AppFilters from './AppFilters';

export default {
  name: 'SideLeft',
  components: { AppFilters },
  props: ['value'],
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  .filters {
    margin-top: 20px;
  }

  .button__add {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #4943CD;
    box-shadow: 0px 4px 4px #EBEBEB;
    padding: 27px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 2px;

    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
      opacity: 0.9;
    }

    &_icon {
      margin-right: 16px;
    }
  }
</style>
