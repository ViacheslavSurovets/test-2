import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { DetailsContainer } from '../../../../styles/commonStylesAndStyledComponents'
import { ButtonContainer } from '../ButtonContainer'
import { CustomInput, CustomForm } from '../../../../components'
import { TextContext } from '../../../../context'
import { setPaymentDetails } from '../../../../redux/payment/payment.actions'


const PaymentsAmount: FC = (props) => {
  const [count, setCount] = useState({
    amount: ''
  })
  const history = useHistory()
  const { txt } = useContext(TextContext)
  const dispatch = useDispatch()

  const { amount } = count

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(setPaymentDetails({ amount: amount }))
    setTimeout(() => {
      history.push('/payments/confirm')
      setCount({ amount: '' })
    }, 1000)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCount({ ...count, [name]: value })
  }

  return (
    <DetailsContainer>
      <CustomForm onSubmit={ handleSubmit }>
        <CustomInput
          type='text'
          onChange={ handleChange }
          name='amount'
          value={ amount }
          autocomplete='on'
          label={ txt && txt.pages.payments.amount.amount }
          marginBottom={ '4rem' }
          required
          big
        />
        <ButtonContainer type={ 'submit' } width={ '25rem' }/>
      </CustomForm>
    </DetailsContainer>
  )
}

export default PaymentsAmount
