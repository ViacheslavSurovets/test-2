import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.reducer'
import paymentReducer from './payment/payment.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'payment']
}

const rootReducer = combineReducers({
  payment: paymentReducer,
  user: userReducer
})

export default persistReducer(persistConfig, rootReducer)
