export default {
  RESIZE (state) {
    let width = window.innerWidth;
    
    if (width >= 992) 
    {
      if (width >= 992 && width <= 1200) 
      {
        state.goodsShow = 3;
        state.saleShow = 2;
      }

      else 
      {
        state.goodsShow = 4;
        state.saleShow = 3;
      }

      document.body.style = "";
      
      state.producerShow = 6;
      state.goodsRow = 2;
      state.hitShow = state.hitScroll = state.saleRow = 1;

    }

    else if (width >= 768) 
    {
      state.producerShow  = 4;
      state.goodsShow = state.goodsRow = state.saleShow = state.saleRow = 2;
      state.hitShow = state.hitScroll = 1;
    }

    else 
    {
      state.producerShow = state.hitScroll = 2;
      state.goodsShow = state.hitShow = state.saleShow = 3;
      state.goodsRow = state.saleRow = 1;
    }
  },
  SET_ITEMSHIT_TO_STATE: (state, products) => state.itemsHit = products,
  SET_PRODUCER: (state, producer) => state.itemsProducer = producer
}