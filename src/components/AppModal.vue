<template>
  <div class="modal__overlay">
    <div tabindex="-10" class="modal__wrapper" @blur="HIDE_MODAL">
      <div @click="HIDE_MODAL" @keydown="HIDE_MODAL" class="modal-close">
        <img src="../assets/icons/remove.svg" alt="">
      </div>
      <div class="modal__title">Добавление</div>
      <div class="modal__content">
        <div class="modal__content-row">
          <label class="modal__input-wrapper">
            <span class="modal__content-label-name">Номер накладной</span>
            <input class="modal__input" placeholder="Введите значение" type="text">
          </label>
        </div>
        <div class="modal__content-row">
          <div class="modal__input-wrapper">
            <label for="cardOpts" class="modal__content-label">
              <span class="modal__content-label-name">Тип заказа</span>
            </label>
            <vue-select
              id="cardOpts"
              :options="options"
              label-by="label"
              class="select-component"
              placeholder="RUED"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from 'vue-select';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'AppModal',
  components: { VueSelect },
  computed: {
    ...mapGetters(['getModalParams']),
    options() {
      return ['RUED', 'UVED'];
    },
  },
  methods: {
    ...mapMutations(['HIDE_MODAL']),
  },
};
</script>

<style lang="scss" scoped>
  .modal {
    &__overlay {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100vh;
      background: rgba(43, 40, 57, 0.2);
    }

    &__wrapper {
      background: white;
      width: 400px;
      min-height: 200px;
      border-radius: 2px;

      padding: 25px 20px;
    }

    &__title {
      text-align: center;
    }

    &__content {
      margin-top: 20px;

      &-label {
        padding-bottom: 10px;
      }

      &-label-name {
        padding-bottom: 8px;
      }
    }

    &__input {
      border: 1px solid #D9D9D9;
      height: 30px;
      padding-left: 10px;
      border-radius: 2px;

      &-wrapper {
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
      }
    }
  }

  .modal-close {
    position: absolute;
    right: 5px;
    top: 10px;
    width: 20px;

    cursor: pointer;
  }
</style>
