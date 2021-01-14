import { useState, useContext, FC, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { TextContext } from '../../../../context'
import { googleSingInStart, emailSingInStart } from '../../../../redux/user/user.actions'

import { CustomButton, CustomForm, CustomInput } from '../../../../components'
import {
  LoginContainerButtonWrapper,
  LoginContainerTitle,
  LoginContentWrapper,
  LoginNewCustomerContainer,
  LoginNewCustomerLink,
  LoginNewCustomerText
} from '../../styles'

interface LoginForm {
  match: {
    path: string
  }
}

//eslint-disable-next-line
const LoginForm: FC<LoginForm> = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const { txt } = useContext(TextContext)

  const { match } = props

  const { email, password } = userCredentials

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    dispatch(emailSingInStart({ email, password }))
    setUserCredentials({ email: '', password: '' })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <>
      <LoginContainerTitle>{ txt && txt.pages.auth.titleLogin }</LoginContainerTitle>
      <LoginContentWrapper>
        <CustomForm onSubmit={ handleSubmit }>
          <CustomInput
            type='email'
            onChange={ handleChange }
            inlineBlock
            name='email'
            value={ email }
            autocomplete='on'
            label={ txt && txt.pages.auth.email }
            marginBottom={ '4rem' }
            required
            big
          />

          <CustomInput
            type='password'
            name='password'
            value={ password }
            onChange={ handleChange }
            inlineBlock
            autocomplete='current-password'
            marginBottom={ '4rem' }
            label={ txt && txt.pages.auth.password }
            required
            big
          >
          </CustomInput>


          <LoginContainerButtonWrapper>
            <CustomButton
              type='submit'
              orangeSoft
              marginTop={ .5 }
              width={ '40%' }
              mobile
            >
              { txt && txt.pages.auth.loginButton }
            </CustomButton>

            <CustomButton
              onClick={ () => dispatch(googleSingInStart()) }
              type='button'
              marginTop={ .5 }
              width={ '40%' }
              googleButton
              mobile
            >
              { txt && txt.pages.auth.googleButton }
            </CustomButton>
          </LoginContainerButtonWrapper>
        </CustomForm>
        <LoginNewCustomerContainer>
          <LoginNewCustomerText>{ txt && txt.pages.auth.loginQuestion }</LoginNewCustomerText>
          <LoginNewCustomerLink
            to={ `${ match.path }/registration` }
          >{ txt && txt.pages.auth.loginLink }</LoginNewCustomerLink>
        </LoginNewCustomerContainer>
      </LoginContentWrapper>
    </>
  )
}

export default LoginForm
