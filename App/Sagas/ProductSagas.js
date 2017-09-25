import { call, put } from 'redux-saga/effects'
import ProductActions from '../Redux/ProductRedux'

export function * getProducts (api, action) {
  const response = yield call(api.getProducts)

  if (response.ok) {
    return yield put(ProductActions.getProductSuccess(response.data.data))
  }
  return yield put(ProductActions.getProductFailure(response.data))
}
