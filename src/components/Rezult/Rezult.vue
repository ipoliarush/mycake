<template>
  <div id="rezult" class="rezult">
    <div class="wrapp">
      <div class="head">
        <h2 class="title">Себестоимость — {{ costprice.toFixed(2) }} грн</h2>
        <p class="subtitle">Не забудьте заложить в стоимость расходы на упаковку, работу кондитера, электроэнергию и амортизацию оборудования.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rezult',
  data: () => ({}),
  methods: {
    
  },
  props: {
    costprice: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="scss">
.rezult {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #303030;

  .wrapp {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    text-align: center;
    
  }
  .head {
    min-height: 200px;
    background: #fff;
    padding: 20px 15px;
    border-radius: 15px;
  }
  .title {
    margin-bottom: 10px;
  }

}
</style>
