<template>
  <div id="saved-cake" class="saved-cake">
    <div class="saved">
      <ul class="saved__list">
        <li v-for="(item, index) in SAVEDCAKE" :key="index" class="saved__item">
          <button v-on:click="ACTIVECAKE(index)" type="button" class="saved__button">{{ item.cartcake.name }}</button>
          <button v-on:click="REMOVECAKE(index)" type="button" class="saved__remove"></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'SavedCake',
  data: () => ({}),
  computed: {
    ...mapGetters([
      'SAVEDCAKE'
    ])
  },
  methods: {
    ...mapMutations([
      'REMOVECAKE',
      'ACTIVECAKE'
    ])
  }
}
</script>

<style scoped lang="scss">
.saved-cake {
  background: #00b557;
  width: 100%;
  padding: 50px 0;

  .saved {
    margin: 0 auto;
    max-width: 1000px;
  }
  .saved__list {
    display: flex;
    margin: 0 15px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .saved__item {
    background: #fff;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    margin-right: 15px;
    margin-bottom: 15px;
    transition: .5s ease;

    &:hover {
      background: rgb(241, 241, 241);
    }

    &:active {
      background: rgb(224, 224, 224);
    }
  }
  .saved__button {
    padding: 3px 8px 3px 12px;
    cursor: pointer;
    color: #303030;
    border: 0;
    background: transparent;
  }
  .saved__remove {
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