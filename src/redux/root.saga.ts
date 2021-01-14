import { all, call } from 'redux-saga/effects'
import { userSagas } from './user/user.sagas'
import { paymentSagas } from './payment/payment.saga'


export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(paymentSagas)
  ])
}
