<template>
  <div class="card">
    <div class="card__header">
      <div class="title">{{ name }}</div>
      <div tabindex="0" @blur="showSubmenu = false" class="options">
        <img
          @click="handleSubmenu"
          @keydown="handleSubmenu"
          src="../assets/icons/icon-dottes.svg"
          alt=""
        >
        <ul v-show="showSubmenu" class="submenu submenu__list">
          <li
            class="submenu__item"
            @click="handleEdit"
            @keydown="handleEdit"
          >
            <img class="submenu__icon" src="../assets/icons/edit.svg" alt="">
            редактировать
          </li>
          <li
            class="submenu__item"
            @click="handleDelete"
            @keydown="handleDelete"
          >
            <img class="submenu__icon" src="../assets/icons/remove.svg" alt="">
            удалить
          </li>
        </ul>
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
  data() {
    return {
      showSubmenu: false,
    };
  },
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
  methods: {
    handleSubmenu() {
      this.showSubmenu = !this.showSubmenu;
    },
    handleEdit() {},
    handleDelete() {},
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
      position: relative;
      font-weight: bolder;
      font-size: 26px;
      cursor: pointer;
    }
  }
  .submenu {
    right: 0;
    position: absolute;
    z-index: 1;

    background: white;
    padding: 10px 10px 2px;
    box-shadow: 0 4px 4px rgba(182, 182, 182, 0.25);

    font-size: 14px;

    &__list {
      list-style: none;
    }

    &__item {
      display: flex;
      align-items: center;
      padding-bottom: 8px;

      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }
    }

    &__icon {
      width: 20px;
      padding-right: 8px;
    }
  }
</style>
