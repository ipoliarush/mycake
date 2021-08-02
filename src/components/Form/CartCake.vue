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
              placeholder=" "
              class="head__input"
              type="text"
              name="namecake"
              id="namecake"
            />
          </div>
          <div class="head__item">
            <label class="head__label" for="weightcake">Вес готового десерта в гр.</label>
            <input
              placeholder=" "
              class="head__input"
              type="number"
              min="0"
              name="weightcake"
              id="weightcake"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCake'
}
</script>

<style scoped lang="scss">
.cart-cake {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  margin-bottom: 50px;

  .line-green {
    background: #00b557;
    width: 100%;
    height: 150px;
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
