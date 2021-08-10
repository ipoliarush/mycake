export default {
  UPDATE_CARTCAKE(state, data) {
    state.cartcake = data
  },
  UPDATE_INGRIDIENT(state, data) {
    state.ingridient = data
  },
  UPDATE_COSTPRICE(state) {
    let costprice = 0
    
    //Чтобы обновить себестоимость перебираем все ингридиенты и проверяем на заполнение
    //после чего расчитываем новую себестоимость
    
    for(let item of state.ingridient) {
      if(item.weight && item.price && item.rweight && item.name) {
        costprice += (item.rweight / item.weight) * item.price
      }
    }

    state.costprice = costprice
  },
  SAVECAKE(state) {
    let savedcake = JSON.parse(localStorage.getItem('savedcake')) || []
    const cartcake = state.cartcake
    const ingridient = state.ingridient

    function isCake(arr) {
      for(let item of arr) {
        if(item.weight && item.price && item.rweight && item.name) {
          return true
        }
        else 
          return false
      }
    }

    if(isCake(ingridient)) {
      if(cartcake.name) {
        let update = false
        
        if(savedcake) {
          for(let item of savedcake) {
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

      localStorage.setItem('savedcake', JSON.stringify(savedcake))
    }
  },
  UPDATE_SAVEDCAKE(state) {
    state.savedcake = JSON.parse(localStorage.getItem('savedcake')) || []
  },
  ACTIVECAKE(state, index) {
    const savedcake = JSON.parse(localStorage.getItem('savedcake'))

    state.cartcake = savedcake[index].cartcake
    state.ingridient = savedcake[index].ingridient
  },
  CLEAR_INGRIDIENT(state) {
    state.cartcake = {
      name: '',
      weight: ''
    }
    state.ingridient = [{}]
  }
}
