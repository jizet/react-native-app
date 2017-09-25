import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

remove_item = (index, array) => {
  return array.slice(0, index).concat(array.slice(index + 1))
}

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  addProduct: ['id'],
  removeProduct: ['id'],
  changeAmount: ['amount'],
  orderSubmitRequest: ['orderData'],
  orderSubmitSuccess: ['orderStatus', 'orderId'],
  orderSubmitFailure: ['error'],
  orderFetchRequest: ['id'],
  orderFetchSuccess: ['orderStatus', 'submittedOrder'],
  orderFetchFailure: ['error'],
  clearOrder: []
}, {prefix: 'ORDER_'})

export const OrderTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: false,
  orderData: [],
  amount: 0,
  orderStatus: 'creating',
  orderId: undefined,
  submittedOrder: []
})

/* ------------- Reducers ------------- */

export const clearOrder = (state) => {
  return state.set('amount', 1).set('orderData', [])
}

export const addProduct = (state, {id}) => {
  return state.merge({orderData: state.orderData.concat([id])})
}

export const removeProduct = (state, {id}) => {
  const index = state.orderData.indexOf(id)
  if (index === -1) {
    return state
  }
  return state.merge({orderData: remove_item(index, state.orderData)})
}

export const changeAmount = (state, {amount}) => {
  return state.set('amount', amount)
}

export const orderSubmitRequest = (state) => {
  return state.set('fetching', true).set('error', false)
}

export const orderSubmitSuccess = (state, {orderStatus, orderId}) => {

  return state.set('orderStatus', orderStatus).set('orderId', orderId).set('fetching', false)
}

export const orderSubmitFailure = (state, {error}) => {
  return state.set('error', error).set('fetching', false)
}

export const orderFetchRequest = (state) => {
  return state.set('fetching', true).set('error', false)
}

export const orderFetchSuccess = (state, {orderStatus, submittedOrder}) => {
  return state.set('orderStatus', orderStatus).set('submittedOrder', submittedOrder).set('fetching', false)
}

export const orderFetchFailure = (state, {error}) => {
  return state.set('error', error).set('fetching', false)
} 



/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT]: addProduct,
  [Types.REMOVE_PRODUCT]: removeProduct,
  [Types.CHANGE_AMOUNT]: changeAmount,
  [Types.ORDER_SUBMIT_REQUEST]: orderSubmitRequest,
  [Types.ORDER_SUBMIT_SUCCESS]: orderSubmitSuccess,
  [Types.ORDER_SUBMIT_FAILURE]: orderSubmitFailure,
  [Types.ORDER_FETCH_REQUEST]: orderFetchRequest,
  [Types.ORDER_FETCH_SUCCESS]: orderFetchSuccess,
  [Types.ORDER_FETCH_FAILURE]: orderFetchFailure,
  [Types.CLEAR_ORDER]: clearOrder
})
