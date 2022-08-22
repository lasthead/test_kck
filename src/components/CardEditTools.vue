<template>
  <div tabindex="0" @blur="showSubmenu = false" class="options">
    <img
      @click="handleSubmenu"
      @keydown="handleSubmenu"
      src="../assets/icons/icon-dottes.svg"
      alt=""
    >
    <div
      v-show="showSubmenu"
      :class="[
        'submenu submenu__list',
        { submenu__inline: inline },
      ]"
    >
      <div
        class="submenu__item"
        @click="itemClick('edit')"
        @keydown="itemClick('edit')"
      >
        <img class="submenu__icon" src="../assets/icons/edit.svg" alt="">
        <span class="submenu__icon-label"> редактировать </span>
      </div>
      <div
        class="submenu__item"
        @click="itemClick()"
        @keydown="itemClick()"
      >
        <img class="submenu__icon" src="../assets/icons/remove.svg" alt="">
        <span class="submenu__icon-label">удалить</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardEditTools',
  data() {
    return {
      showSubmenu: false,
    };
  },
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSubmenu() {
      this.showSubmenu = !this.showSubmenu;
    },
    itemClick(mode) {
      if (mode === 'edit') {
        this.$emit('onEdit', this.params);
        this.handleSubmenu();
      } else {
        this.$emit('onDelete', this.params);
      }
    },
    handleDelete() {},
  },
};
</script>

<style lang="scss" scoped>
  .options {
    position: relative;
    font-weight: bolder;
    font-size: 26px;
    cursor: pointer;
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

    &__inline {
      position: absolute;
      display: flex;
      right: auto;
      left: -60px;
      top: 0;

      .submenu__item:first-child {
        margin-right: 5px;
      }

      .submenu__icon-label {
        display: none;
      }
    }
  }
</style>
