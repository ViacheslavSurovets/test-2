import PaymentActionTypes from './payment.types'

export const getPaymentData = () => ({
  type: PaymentActionTypes.GET_DATA_START
})

export const getDataSuccess = (data:any []) => ({
  type: PaymentActionTypes.GET_DATA_SUCCESS,
  payload: data
})

export const getDataFailure= (data:string) => ({
  type: PaymentActionTypes.GET_DATA_FAILURE,
  payload: data
})

export const currentItemToStore = (data:any) => ({
  type: PaymentActionTypes.SET_CURRENT_ITEM,
  payload: data
})
