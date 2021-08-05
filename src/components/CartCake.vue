<template>
  <div id="cart-cake" class="cart-cake">
    <div class="line-green"></div>
    <div class="wrapp">
      <form class="form">
        <h3 class="form__title">
          Карточка десерта
        </h3>
        <div class="form__head head">
          <div class="head__item">
            <label class="head__label" for="namecake">Название десерта</label>
            <input
              v-model="upcartcake.name"
              class="head__input"
              type="text"
              name="namecake"
              id="namecake"
              autocomplete="off"
            />
          </div>
          <div class="head__item">
            <label class="head__label" for="weightcake">Вес готового десерта в гр.</label>
            <input
              v-model.number="upcartcake.weight"
              class="head__input"
              type="number"
              min="0"
              name="weightcake"
              id="weightcake"
              autocomplete="off"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CartCake',
  data:() => ({}),
  methods: {
    ...mapMutations([
      'UPDATE_CARTCAKE'
    ])
  },
  computed: {
    ...mapGetters([
      'CARTCAKE'
    ]),
    upcartcake: {
      get() {
        return this.CARTCAKE
      },
      set(value) {
        this.UPDATE_CARTCAKE(value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cart-cake {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  margin-bottom: 25px;
    
  @include respond-to('small') {
    margin-bottom: 50px;
  }

  .line-green {
    background: #00b557;
    width: 100%;
    height: 100px;
  }

  .wrapp {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    margin-top: -80px;
    display: flex;
    flex-direction: column;
  }
  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .form__title {
    margin-left: 20px;
    margin-bottom: 10px;
    font-size: 21px;

    @include respond-to('small') {
      font-size: 25px;
    }
  }
  .head {
    flex: 1 1 auto;
    background: #fff;
    border-radius: 15px;
  }
  .head__item {
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    color: #808080;
    font-size: 14px;

    @include respond-to('small') {
      font-size: 16px;
    }

    &:first-child {
      border-bottom: 1px solid #f5f5f5;
    }
  }
  .head__label {
    flex: 1 1 50%;
    margin: 20px 5px 20px 20px;
    cursor: text;
  }
  .head__input {
    flex: 1 1 50%;
    margin: 20px 20px 20px 5px;
    border: none;
  }
}
</style>
