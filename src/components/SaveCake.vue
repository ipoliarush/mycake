<template>
  <div id="save-cake" class="save-cake">
    <div class="save">
      <button v-on:click="save()" type="button" class="save__button">Сохранить рецепт</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'SaveCake',
  data: () => ({}),
  methods: {
    ...mapMutations({
      save: 'SAVECAKE'
    })
  }
}
</script>

<style scoped lang="scss">
.save-cake {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  .save {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;

    @include respond-to('small') {
      margin-bottom: 50px;
    }
  }
  .save__button {
    color: #fff;
    padding: 5px 20px;
    background: #00b557;
    border-radius: 15px;
    font-size: 16px;
    border: 0;
    cursor: pointer;
    transition: .5s ease;
    margin-right: 15px;

    @include respond-to('small') {
      margin-right: 0;
      font-size: 18px;
    }

    &:hover {
      background: #00cc63;
    }

    &:active {
      background: #00a14e;
    }
  }
  
}
</style>