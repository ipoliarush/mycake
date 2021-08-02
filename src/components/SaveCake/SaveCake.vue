<template>
  <div id="save-cake" class="save-cake">
    <div class="save">
      <ul class="save__list">
        <li class="save__item">
          <p class="save__text">Слоеное тесто</p>
          <button type="button" class="save__button"></button>
        </li>
        <li class="save__item">
          <p class="save__text">Слоеное тесто</p>
        </li>
        <li class="save__item">
          <p class="save__text">Слоеное тесто</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaveCake'
}
</script>

<style scoped lang="scss">
.save-cake {
  background: #00b557;
  width: 100%;
  padding: 50px 0;
  .save {
    margin: 0 auto;
    max-width: 1000px;
  }

  .save__list {
    display: flex;
    margin: 0 15px;
    justify-content: start;
  }

  .save__item {
    background: #fff;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    margin-right: 15px;
  }

  .save__text {
    padding: 3px 10px;
    cursor: pointer;
  }

  .save__button {
    border: 0;
    width: 20px;
    height: 20px;
    padding: 5px;
    margin: 5px 5px 0 0;
    background: url('~@/assets/img/remove-mini.svg') no-repeat 50%;
    cursor: pointer;
    color: #fff;
  }

  
}
</style>
