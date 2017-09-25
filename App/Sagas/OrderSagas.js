import { call, put, select } from 'redux-saga/effects'
import OrderActions from '../Redux/OrderRedux'


export const getOrderList = (state) => state.order.orderData
export const getOrderAmount = (state) => state.order.amount
export const getSubmittedOrderId = (state) => state.order.orderId

export function * submitOrder(api, action) {
  const order = yield select(getOrderList)
  const amount = yield select(getOrderAmount)
  const data = {
    "type": "orders",
    "attributes": {
      "products": order,
      "amount": amount
    }
  }
  const response = yield call(api.submitOrder, data)

  if (response.ok) {
    return yield put(OrderActions.orderSubmitSuccess(response.data.data.attributes.status, response.data.data.id))
  }
  return yield put(OrderActions.orderSubmitFailure(response.data))
}

export function * fetchOrder(api, action) {
  const orderId = yield select(getSubmittedOrderId)
  const response = yield call(api.fetchOrder, orderId)

  if (response.ok) {
    return yield put(OrderActions.orderFetchSuccess(response.data.data.attributes.status, response.data.data.included))
  }
  return yield put(OrderActions.orderFetchFailure(response.data))
}
