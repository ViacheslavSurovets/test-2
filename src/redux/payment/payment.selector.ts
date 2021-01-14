import { createSelector } from 'reselect'

const selectPaymentData = (state:any) => state.payment

export const selectPayment = createSelector(
  [ selectPaymentData ],
  payment => payment.data
)

export const selectPaymentItem = (urlParam:any) => createSelector(
  [selectPayment],
  data => data.find( (item:any) => {
    //eslint-disable-next-line
    return item.id == urlParam.id
  } )
)

export const selectCurrentItem = createSelector(
  [selectPaymentData],
  payment => payment.currentItem
)
