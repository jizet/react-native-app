import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { ProductTypes } from '../Redux/ProductRedux'
import { OrderTypes } from '../Redux/OrderRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getProducts } from './ProductSagas'
import { submitOrder, fetchOrder } from './OrderSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = FixtureAPI

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(ProductTypes.GET_PRODUCT_REQUEST, getProducts, api),
    takeLatest(OrderTypes.ORDER_SUBMIT_REQUEST, submitOrder, api),
    takeLatest(OrderTypes.ORDER_FETCH_REQUEST, fetchOrder, api)
  ])
}
