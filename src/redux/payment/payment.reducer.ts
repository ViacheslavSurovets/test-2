import PaymentActionTypes from './payment.types'

const INITIAL_STATE = {
  data: undefined,
  currentItem: undefined,
  error: '',
  paymentDetails: undefined
}

const paymentReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case PaymentActionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      }

    case PaymentActionTypes.SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      }

    case PaymentActionTypes.GET_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case PaymentActionTypes.SET_PAYMENT_DETAILS:
      return {
        ...state,
        paymentDetails: action.payload
      }

    default:
      return state
  }
}

export default paymentReducer
