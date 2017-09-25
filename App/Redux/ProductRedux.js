import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getProductRequest: [],
  getProductSuccess: ['result'],
  getProductFailure: ['error']
}, {prefix: 'PRODUCT_'})

export const ProductTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: false,
  productData: []
})

/* ------------- Reducers ------------- */

export const getProductSuccess = (state, {result}) => {
  return state
    .setIn(['productData'], result).set('fetching', false)
}

export const getProductRequest = (state) => {
  return state
    .set('fetching', true).set('error', false)
}

export const getProductFailure = (state, {error}) => {
  return state
    .set('fetching', false).set('error', error)
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCT_SUCCESS]: getProductSuccess,
  [Types.GET_PRODUCT_FAILURE]: getProductFailure,
  [Types.GET_PRODUCT_REQUEST]: getProductRequest
})
