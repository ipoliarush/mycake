<template>
  <div id="main" class="main">
    <save-cake></save-cake>
    <cart-cake></cart-cake>
    <desert @costprice="onPrice"></desert>
    <rezult v-bind:costprice="costprice"></rezult>
  </div>
</template>

<script>
import SaveCake from './SaveCake/SaveCake.vue'
import CartCake from './Form/CartCake.vue'
import Desert from './Form/Desert.vue'
import Rezult from './Rezult/Rezult.vue'

export default {
  name: 'AppMain',
  components: { CartCake, Desert, Rezult, SaveCake },
  data:() => ({
    costprice: 0
  }),
  methods: {
    onPrice(data) {
      this.costprice = data
    }
  }
}

</script>

<style lang="scss">
.main {
  background: #f5f5f5;
  padding-bottom: 250px;
}
</style>
