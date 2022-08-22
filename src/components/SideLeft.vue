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
    <AppFilters class="filters" />
  </div>
</template>

<script>
import AppFilters from './AppFilters.vue';

export default {
  name: 'SideLeft',
  components: { AppFilters },
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

    &_icon {
      margin-right: 16px;
    }
  }
</style>
