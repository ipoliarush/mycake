<template>
  <div id="desert" class="desert">
    <div class="wrapp">
      <form class="form">
        <h3 class="form__title">
          Ингредиенты
        </h3>
        <div class="form__head head">
          <div class="head__item">
            Наименование
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
          <div v-for="(item, index) in ing" :key="index" class="body__line">
            <div class="body__item">
              <input @input="addline(index), sum()" v-model="item.name" :name="'iname' + index" type="text" class="body__input">
            </div> 
            <div class="body__item">
              <input @input="addline(index), sum()" v-model.number="item.weight" :name="'iweight' + index" type="number" min="0" class="body__input">
            </div> 
            <div class="body__item">
              <input @input="addline(index), sum()" v-model.number="item.price" :name="'iprice' + index" type="number" min="0" step="0.1" class="body__input">
            </div> 
            <div class="body__item">
              <input @input="addline(index), sum()" v-model.number="item.rweight" :name="'irweigt' + index" type="number" min="0" class="body__input">
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
export default {
  name: 'Desert',
  data: () => ({
    ing: [{},{},{}],
    costprice: 0
  }),
  methods: {
    remove: function(n) {
      if(this.ing.length > 1) {
        this.ing.splice(n, 1)
      }
      else {
        this.ing = [{}]
      }

      this.costprice = 0

      for(const item of this.ing) {
        if(item.weight && item.price && item.rweight) {
          this.costprice += (item.rweight / item.weight) * item.price
        }
      }

      this.$emit('costprice', this.costprice)
    },
    addline: function(n) {
      if((this.ing.length - 1) === n) {
        this.ing.push({})
      }
    },
    sum: function() {
      this.costprice = 0

      for(const item of this.ing) {
        if(item.weight && item.price && item.rweight) {
          this.costprice += (item.rweight / item.weight) * item.price
        }
      }

      this.$emit('costprice', this.costprice)
    }
  }
}
</script>

<style scoped lang="scss">
.desert {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #303030;
  margin-bottom: 50px;

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
  }
  .form__title {
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .head {
    display: flex;
    background: #fff;
    flex-direction: row;
    padding-right: 50px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .head__item {
    flex: 1 1 25%;
    text-align: left;
    margin: 20px;
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

    &:last-child {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
  .body__item {
    flex: 1 1 25%;
    margin: 20px;
  }
  .body__input {
    width: 100%;
    border: none;
  }
  .body__remove {
    position: absolute;
    right: 15px;
    top: 22px;


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
