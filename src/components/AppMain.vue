<template>
  <div id="main" class="main">
    <saved-cake></saved-cake>
    <cart-cake></cart-cake>
    <ingredient-cake></ingredient-cake>
    <save-cake></save-cake>
    <cost-price-cake></cost-price-cake>
  </div>
</template>

<script>
import SavedCake from './SavedCake.vue'
import CartCake from './CartCake.vue'
import IngredientCake from './IngredientCake.vue'
import CostPriceCake from './CostPriceCake.vue'
import SaveCake from './SaveCake.vue'

export default {
  name: 'AppMain',
  components: { CartCake, IngredientCake, CostPriceCake, SavedCake, SaveCake },
  data:() => ({})
}

</script>

<style lang="scss">
.main {
  background: #f5f5f5;
}
</style>
