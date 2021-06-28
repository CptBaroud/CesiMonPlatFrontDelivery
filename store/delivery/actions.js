import axios from 'axios'

export default {
  fetch (context, token) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.api_url + '/delivery', {
        headers: {
          authorization: token
        }
      })
        .then((response) => {
          context.commit('setDelivery', response.data)
          resolve(response)
        }).catch((e) => {
        // eslint-disable-next-line no-console
          console.error(e)
          reject(e)
        })
    })
  },

  open (context, data) {
    const token = data.token
    delete data.token

    return new Promise((resolve, reject) => {
      axios.put(process.env.api_url + '/delivery/open', data, {
        headers: {
          authorization: token
        }
      })
        .then((response) => {
          context.commit('acceptDelivery', response.data)
          resolve(response)
        }).catch((e) => {
        // eslint-disable-next-line no-console
          console.error(e)
          reject(onerror)
        })
    })
  },

  close (context, data) {
    const token = data.token
    delete data.token

    return new Promise((resolve, reject) => {
      axios.put(process.env.api_url + '/delivery/close', data, {
        headers: {
          authorization: token
        }
      })
        .then((response) => {
          context.commit('refuseDelivery', response.data)
          resolve(response)
        }).catch((e) => {
        // eslint-disable-next-line no-console
          console.error(e)
          reject(onerror)
        })
    })
  },

  taken (context, data) {
    const token = data.token
    delete data.token

    return new Promise((resolve, reject) => {
      axios.put(process.env.api_url + '/delivery/taken', data, {
        headers: {
          authorization: token
        }
      })
        .then((response) => {
          context.commit('takenDelivery', response.data)
          resolve(response)
        }).catch((e) => {
        // eslint-disable-next-line no-console
          console.error(e)
          reject(onerror)
        })
    })
  }
}
