export default {
  setDelivery (state, data) {
    state.delivery = data
  },

  acceptDelivery (state, data) {
    const index = state.order.findIndex((item) => {
      return item._id === data._id
    })
    state.order.splice(index, 1)
    state.order.push(data)
  },

  refuseDelivery (state, data) {
    const index = state.order.findIndex((item) => {
      return item._id === data._id
    })
    state.order.splice(index, 1)
    state.order.push(data)
  },

  takenDelivery (state, data) {
    const index = state.order.findIndex((item) => {
      return item._id === data._id
    })
    state.order.splice(index, 1)
    state.order.push(data)
  }
}
