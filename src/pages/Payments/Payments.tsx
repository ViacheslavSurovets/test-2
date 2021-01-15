import { FC, useContext, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import { CardContainer, PaymentConfirm, PaymentDetails, PaymentsAmount, PaymentSuccess } from './internal'
import { PaymentsContent } from './styles'
import { getPaymentData } from '../../redux/payment/payment.actions'
import { BaseLayout } from '../../layout/BaseLayout'
import { TextContext } from '../../context'

import { useDispatch } from 'react-redux'


interface PaymentsProps {
  match: any
}

const Payments: FC<PaymentsProps> = ({ match }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPaymentData())
    //eslint-disable-next-line
  }, [])
  const { txt } = useContext(TextContext)

  return (
    <BaseLayout>
      <PaymentsContent>
        <h1>{ txt && txt.pages.payments.title }</h1>
        <Switch>
          <Route exact  path={ `/payments/amount` } component={ PaymentsAmount }/>
          <Route exact path={ `/payments/confirm` } component={ PaymentConfirm }/>
          <Route exact path={ `/payments/success` } component={ PaymentSuccess }/>
          <Route exact path={ `${ match.path }/:id` } component={ PaymentDetails }/>
          <Route exact path={ `${ match.path }` } component={ CardContainer }/>
        </Switch>
      </PaymentsContent>
    </BaseLayout>
  )
}

export default Payments
