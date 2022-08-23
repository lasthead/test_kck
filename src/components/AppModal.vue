<template>
  <div class="modal">
    <form class="modal__wrapper">
      <div @click="HIDE_MODAL" @keydown="HIDE_MODAL" class="modal-close">
        <img src="../assets/icons/remove.svg" alt="">
      </div>
      <div class="modal__title">Добавление</div>
      <div class="modal__content">
        <div class="modal__content-row">
          <label for="invoiceNum" class="modal__input-wrapper">
            <span class="modal__content-label-name">Номер накладной</span>
            <input
              id="invoiceNum"
              v-model="form.invoiceNumber"
              class="modal__input"
              placeholder="Введите значение"
              type="text"
            >
          </label>
        </div>
        <div class="modal__content-row">
          <div class="modal__input-wrapper">
            <label for="cardOpts" class="modal__content-label">
              <span class="modal__content-label-name">Тип заказа</span>
            </label>
            <vue-select
              id="cardOpts"
              v-model="form.type"
              :options="options"
              label-by="label"
              class="select-component"
            />
          </div>
        </div>
      </div>
      <div class="modal__footer">
        <button
          :disabled="!form.invoiceNumber || !form.type"
          @click="onSave"
          @keydown="onSave"
          type="button"
          class="button__save"
        >
          Сохранить
        </button>
      </div>
    </form>
    <div tabindex="-10" @click="HIDE_MODAL" @keydown="HIDE_MODAL" class="modal__overlay" />
  </div>
</template>

<script>
import VueSelect from 'vue-select';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'AppModal',
  data() {
    return {
      form: {
        invoiceNumber: '',
        type: 'RUED',
      },
    };
  },
  components: { VueSelect },
  computed: {
    ...mapGetters(['getModalOptions', 'getModalParams']),
    options() {
      return this.getModalOptions;
    },
  },
  methods: {
    ...mapMutations(['HIDE_MODAL', 'CREATE_CARD']),
    onSave() {
      this.CREATE_CARD(this.form);
      this.HIDE_MODAL();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.form = this.getModalParams;
    });
  },
};
</script>

<style lang="scss" scoped>
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;

    &__overlay {
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
      z-index: 2;
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

  .button__save {
    background: #4943CD;
    box-shadow: 0 4px 4px #EBEBEB;
    border: none;
    color: white;
    text-transform: uppercase;
    padding: 10px;
    cursor: pointer;
    border-radius: 2px;

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      background: gray;
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
</style>
