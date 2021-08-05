export default {
  UPDATE_CARTCAKE_NAME(state, data) {
    state.cartcake.name = data
  },
  UPDATE_CARTCAKE(state, data) {
    state.cartcake = data
  },
  UPDATE_INGRIDIENT(state, data) {
    state.ingridient = data
  },
  UPDATE_COSTPRICE(state) {
    state.costprice = 0

    /*
    Чтобы обновить себестоимость перебираем все ингридиенты и проверяем на заполнение
    после чего расчитываем новую себестоимость
    */
    for(const item of state.ingridient) {
      if(item.weight && item.price && item.rweight) {
        state.costprice += (item.rweight / item.weight) * item.price
      }
    }
  },
  SAVECAKE(state) {

    let savedcake = JSON.parse(localStorage.getItem('savedcake')) || []
    const cartcake = state.cartcake
    const ingridient = state.ingridient

    function isCake(arr) {
      for(const item of arr) {
        if(item.weight && item.price && item.rweight && item.name) {
          return true
        }
        else return false
      }
    }

    if(isCake(ingridient)) {
      if(cartcake.name) {
        let update = false
        
        if(savedcake) {
          for(const item of savedcake) {
            if(item.cartcake.name === cartcake.name) {
              item.cartcake = cartcake
              item.ingridient = ingridient
              update = true
            }
          }
        }

        if(!update) {
          savedcake = [...savedcake, { cartcake, ingridient }]
        }
      }
    }

    localStorage.setItem('savedcake', JSON.stringify(savedcake))
    state.savedcake = JSON.parse(localStorage.getItem('savedcake'))
  },
  REMOVECAKE(state, index) {
    let savedcake = JSON.parse(localStorage.getItem('savedcake'))
    savedcake.splice(index, 1)

    localStorage.setItem('savedcake', JSON.stringify(savedcake))
    state.savedcake = savedcake
  },
  ACTIVECAKE(state, index) {
    state.cartcake = state.savedcake[index].cartcake
    state.ingridient = state.savedcake[index].ingridient
  }
}
