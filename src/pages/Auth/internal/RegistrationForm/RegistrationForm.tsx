import { useState, useMemo, FormEvent, ChangeEvent, FC, useContext } from 'react'

import { TextContext } from '../../../../context'
import { CustomButton, CustomForm, CustomInput } from '../../../../components'
import {
  LoginContainerButtonWrapper,
  LoginContainerTitle,
  LoginContentWrapper,
  LoginNewCustomerContainer,
  LoginNewCustomerLink,
  LoginNewCustomerText
} from '../../styles'

import { signUpStart } from '../../../../redux/user/user.actions'
import { useDispatch } from 'react-redux'


const RegistrationForm: FC = () => {

  const [userCredentials, setUserCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { txt } = useContext(TextContext)

  const dispatch = useDispatch()

  const { firstName, lastName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert(txt && txt.pages.auth.checkPasswords)
      return
    }

    await dispatch( signUpStart({ firstName, lastName, email, password }))

    setUserCredentials({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const dataRegistrationForm = useMemo(() => {
    return [
      {
        type: 'text',
        name: 'firstName',
        value: firstName,
        autocomplete: 'on',
        label: txt && txt.pages.auth.firstName
      },
      {
        type: 'text',
        name: 'lastName',
        value: lastName,
        autocomplete: 'on',
        label: txt && txt.pages.auth.lastName
      },
      {
        type: 'email',
        name: 'email',
        value: email,
        autocomplete: 'on',
        label: txt && txt.pages.auth.email
      },
      {
        type: 'password',
        name: 'password',
        value: password,
        autocomplete: 'current-password',
        label: txt && txt.pages.auth.password
      },
      {
        type: 'password',
        name: 'confirmPassword',
        value: confirmPassword,
        label: txt && txt.pages.auth.confirmPassword
      }
    ]
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <LoginContainerTitle>{ txt && txt.pages.auth.titleRegister }</LoginContainerTitle>
      <LoginContentWrapper>
        <CustomForm onSubmit={ handleSubmit }>
          {
            dataRegistrationForm.map((item, idx) =>
              <CustomInput
                key={ idx }
                type={ item.type }
                name={ item.name }
                value={ item.value }
                label={ item.label }
                autocomplete={ item.autocomplete }
                onChange={ handleChange }
                marginBottom={ '4rem' }
                inlineBlock
                required
                big
              />
            )
          }
          <LoginContainerButtonWrapper>
            <CustomButton
              type='submit'
              orangeSoft
              marginTop={ .5 }
              width={ '40%' }
              mobile
            >
              { txt && txt.pages.auth.registerButton }
            </CustomButton>
          </LoginContainerButtonWrapper>
        </CustomForm>
        <LoginNewCustomerContainer>
          <LoginNewCustomerText>{ txt && txt.pages.auth.registerQuestion }</LoginNewCustomerText>
          <LoginNewCustomerLink
            to='/auth'
          >{ txt && txt.pages.auth.registerLink }</LoginNewCustomerLink>
        </LoginNewCustomerContainer>
      </LoginContentWrapper>
    </>
  )
}

export default RegistrationForm
