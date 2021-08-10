<template>
  <div id="ingredient" class="ingredient">
    <div class="wrapp">
      <form class="form">
        <div class="form__top">
          <h3 class="form__title">
            Ингредиенты
          </h3>
          <a v-on:click.prevent="CLEAR_INGRIDIENT(), count()" href="" class="form__clear">
            Очистить
          </a>
        </div>
        <div class="form__head head">
          <div class="head__item">
            Название
          </div>
          <div class="head__item">
            В упаковке гр/мл/шт
          </div>
          <div class="head__item">
            Стоимость упаковки
          </div>
          <div class="head__item">
            В рецепте гр/мл/шт
          </div>
        </div>
        <div class="form__body body">
          <div v-for="(item, index) in uping" :key="index" class="body__line">
            <div class="body__item">
              <input @input="addline(index), count()" v-model="item.name" autocomplete="off" :name="'iname' + index" type="text" class="body__input">
            </div> 
            <div class="body__item">
              <input @input="addline(index), count()" v-model.number="item.weight" autocomplete="off" :name="'iweight' + index" type="number" min="0" class="body__input">
            </div> 
            <div class="body__item">
              <input @input="addline(index), count()" v-model.number="item.price" autocomplete="off" :name="'iprice' + index" type="number" min="0" step="0.1" class="body__input">
            </div> 
            <div class="body__item">
              <input @input="addline(index), count()" v-model.number="item.rweight" autocomplete="off" :name="'irweigt' + index" type="number" min="0" class="body__input">
            </div> 
            <div class="body__remove">
              <button v-on:click="remove(index)" type="button" class="body__button"></button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'IngredientCake',
  data: () => ({}),
  computed: {
    ...mapGetters([
      'INGRIDIENT'
    ]),
    uping: {
      get() {
        return this.INGRIDIENT
      },
      set(value) {
        this.UPDATE_INGRIDIENT(value)
      }
    },
  },
  methods: {
    ...mapMutations([
      'UPDATE_INGRIDIENT',
      'CLEAR_INGRIDIENT'
    ]),
    ...mapMutations({
      count: 'UPDATE_COSTPRICE'
    }),
    remove(n) {
      if(this.uping.length > 1) {
        this.uping.splice(n, 1)
      }
      else {
        this.uping = [{}]
      }
      this.count()
    },
    addline(index) {
      if((this.uping.length - 1) === index) {
        this.uping.push({})
      }
    }
  }
}
</script>

<style scoped lang="scss">
.ingredient {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #303030;
  margin-bottom: 25px;
    
  @include respond-to('small') {
    margin-bottom: 50px;
  }

  .wrapp {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
  .form__top {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .form__title {
    margin-left: 20px;
    font-size: 21px;

    @include respond-to('small') {
      font-size: 25px;
    }
  }
  .form__clear {
    color: #303030;
    margin-right: 20px;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 1px dashed #303030;
    transition: .5s ease;

    &:hover {
      border-bottom: 1px transparent;
    }

    &:focus {
      color: #00b557;
      border-bottom: 1px transparent;
    }
  }
  .head {
    display: flex;
    background: #fff;
    flex-direction: row;
    padding-right: 50px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-size: 14px;

    @include respond-to('small') {
      font-size: 16px;
    }
  }
  .head__item {
    flex: 1 1 25%;
    text-align: left;
    margin: 15px 1px 15px 15px;

    @include respond-to('small') {
      margin: 20px;
    }
  }
  .body {
    display: flex;
    flex-direction: column;
  }
  .body__line {
    flex-direction: row;
    display: flex;
    padding-right: 50px;
    background: #fff;
    position: relative;
    border-top: 1px solid #f5f5f5;
    font-size: 14px;

    @include respond-to('small') {
      font-size: 16px;
    }

    &:last-child {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
  .body__item {
    flex: 1 1 25%;
    margin: 15px 1px 15px 15px;

    @include respond-to('small') {
      margin: 20px;
    }
  }
  .body__input {
    width: 100%;
    border: none;
  }
  .body__remove {
    position: absolute;
    right: 15px;
    top: 17px;

    @include respond-to('small') {
      top: 22px;
    }

    .body__button {
      border: 0;
      width: 20px;
      height: 20px;
      padding: 5px;
      background: url('~@/assets/img/remove.svg') no-repeat 50%;
      cursor: pointer;
    }
  }
}
</style>
