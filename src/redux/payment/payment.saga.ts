import { takeLatest, put, all, call } from 'redux-saga/effects'

import { JSON } from '../../utils/axios'
import PaymentActionTypes from './payment.types'
import { getDataSuccess, getDataFailure } from './payment.actions'


function* getDataStart() {
  try {
    let { data } = yield JSON('/posts')
    data = yield data.slice(0, 10)
    yield put(getDataSuccess(data))
  } catch (error) {
    yield put(getDataFailure(error.message))
  }
}


function* onGetDataStart() {
  yield takeLatest(PaymentActionTypes.GET_DATA_START, getDataStart)
}

export function* paymentSagas() {
  yield all([
    call(onGetDataStart)
  ])
}
