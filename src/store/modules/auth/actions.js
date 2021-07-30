import axios from 'axios'

export default {
  LOGIN({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      axios({
        url: '/login', 
        data: user, 
        method: 'POST' 
      })
      .then(resp => {
        if(resp.data.success) {

          const data = {
            token: resp.data.token,
            user: resp.data.user
          }

          localStorage.setItem('token', JSON.stringify(data.token))
          localStorage.setItem('user', JSON.stringify(data.user))

          axios.defaults.headers.common['Authorization'] = data.token
          commit('AUTH_SUCCESS', data)
          resolve(resp)
        }
        else resolve(resp)
      })
      .catch(err => {
        commit('AUTH_ERROR', err)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        reject(err)
      })
    })
  },

  REGISTER({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('REGISTER_REQUEST')
      axios({
        url: '/register', 
        data: user, 
        method: 'POST' 
      })
      .then(resp => {
        if(resp.data.success) {

          commit('REGISTER_SUCCESS')
          resolve(resp)

        } else resolve(resp)
      })
      .catch(err => {
        commit('REGISTER_ERROR')
        reject(err)
      })
    })
  },

  RECOVERY({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('RECOVERY_REQUEST')
      axios({
        url: '/recovery', 
        data: user, 
        method: 'POST' 
      })
      .then(resp => {
        if(resp.data.success) {

          const data = {
            user: resp.data.user
          }

          commit('RECOVERY_SUCCESS', data)
          resolve(resp)
        }
        else resolve(resp)
      })
      .catch(err => {
        commit('RECOVERY_ERROR', err)
        reject(err)
      })
    })
  },

  LOGOUT({commit}) {
    return new Promise((resolve) => {
      commit('LOGOUT')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}