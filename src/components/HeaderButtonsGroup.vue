<template>
  <div class="buttons-group">
    <button
      type="button"
      @click="goToView('list')"
      :class="[
        'buttons-group__button buttons-group__button--left',
        { active: value === 'list' },
      ]">
      <img src="../assets/icons/icon-mode-1.svg" alt="">
    </button>
    <button
      type="button"
      @click="goToView('table')"
      :class="[
        'buttons-group__button buttons-group__button--right',
        { active: value !== 'list' },
      ]">
      <img src="../assets/icons/icon-mode-2.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: 'HeaderButtonsGroup',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    goToView(mode) {
      if (mode === 'table') {
        this.$router.push({ name: 'Main' });
      } else {
        this.$router.push({ name: 'Main', query: { mode: 'list' } });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons-group {
  display: flex;

  &__button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: 1px solid var(--button-group-border);

    background: white;

    &:hover, &:active, &.active {
      background: #E5E9EC;
    }

    &--left {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border-right-width: 0;
    }

    &--right {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
}
</style>
