import Axios from 'axios'

export default {
  GET_ITEMSHIT_FROM_API({commit}) {
    return Axios('http://localhost:3000/products', {
      method: "GET"
    })
    .then(products => {
      commit('SET_ITEMSHIT_TO_STATE', products.data);
    })
  },
  GET_ITEMSPRODUCER_FROM_API({commit}) {
    return Axios('http://localhost:3000/producer', {
      method: "GET"
    })
    .then(producer => {
      commit('SET_PRODUCER', producer.data);
    })
  },
  RESIZE({commit}) {
    commit('RESIZE')
  }
}