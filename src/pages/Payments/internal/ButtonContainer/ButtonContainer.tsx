import { FC, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'
import { CustomButton } from '../../../../components'
import { TextContext } from '../../../../context'

interface ButtonContainerProps {
  path?: any;
  block?: boolean;
  width?: string;
  marginTop?: string;
  label?: boolean;
}


const ButtonContainer: FC<ButtonContainerProps> = ({ path, width, label, ...rest }) => {
  const history = useHistory()
  const { txt } = useContext(TextContext)
  const [isHiddenSpinner, setIsHiddenSpinner] = useState(false)

  const handleClick = () => {
    setIsHiddenSpinner(!isHiddenSpinner)
    setTimeout(() => history.push(path), 1000)
  }

  return (
    <Container>
      <CustomButton { ...rest } spinner={isHiddenSpinner} onClick={ handleClick }
                    width={ width }>{ label ? txt!.pages.payments.cardContainer.pay : txt!.pages.payments.cardContainer.button }</CustomButton>
      <CustomButton { ...rest } onClick={ () => history.goBack() } whiteBlue marginTop={ '2rem' }
                    width={ width }>{ txt && txt.pages.payments.cardContainer.buttonBack }</CustomButton>
    </Container>
  )
}

export default ButtonContainer
