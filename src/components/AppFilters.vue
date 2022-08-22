<template>
  <div class="filters">
    <div class="filters__title">Filters</div>
    <div class="filters__border" />
    <label class="filter-input__wrapper">
      <span class="filter-input__label">Invoice number</span>
      <input
        class="filter-input"
        placeholder="Enter value"
        type="text"
        @input="$emit('input', $event.target.value)"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppFilters',
};
</script>

<style lang="scss" scoped>
  .filters {
    padding: 20px 0;

    box-shadow: (0px 4px 8px rgba(179, 178, 178, 0.25));

    &__title {
      color: var(--black);
      font-weight: 700;
      font-size: 16px;
      padding: 0 38px 5px;
    }

    &__border {
      border-bottom: 1px solid var(--border);
    }
  }

  .filter-input {
    border: 1px solid var(--input-border);
    height: 30px;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 500;
    margin-top: 11px;

    &__wrapper {
      padding: 15px 30px 0;
      display: flex;
      flex-direction: column;
    }
    &__label {
      font-size: 14px;
      font-weight: 500;
      color: var(--black);
    }
  }
</style>
