<template>
  <div class="card">
    <div class="card__header">
      <div class="title">{{ name }}</div>
      <div class="options">
        <img src="../assets/icons/icon-dottes.svg" alt="">
      </div>
    </div>
    <div class="card__content">
      <div class="row">{{ name }}</div>
      <div class="row" />
      <div class="row" />
      <div class="row" />
      <div class="row" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    width: 290px;
    box-shadow: 0 4px 12px #EBEBEB;

    &__header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(237, 232, 245, 0.5);
      padding: 5px 20px;
      color: var(--black);
      font-size: 18px;
      font-weight: 700;
    }

    &__content {
      padding: 7px 20px 20px;
    }

    .row {
      height: 25px;
      width: 100%;
      border-bottom: 1px solid var(--row-border);
      font-size: 14px;
      font-weight: 400;
    }

    .options {
      font-weight: bolder;
      font-size: 26px;
    }
  }
</style>
