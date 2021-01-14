import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { DetailsContainer } from '../../../../styles/commonStylesAndStyledComponents'
import { ButtonContainer } from '../ButtonContainer'
import { CustomInput, CustomForm } from '../../../../components'
import { TextContext } from '../../../../context'

const PaymentsAmount: FC = (props) => {
  const [count, setCount] = useState({
    amount: ''
  })
  const history = useHistory()
  const { txt } = useContext(TextContext)
  const { amount } = count

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setCount({ amount: '' })
    history.push('/payments/confirm')
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
        <ButtonContainer width={'25rem'}/>
      </CustomForm>
    </DetailsContainer>
  )
}

export default PaymentsAmount
