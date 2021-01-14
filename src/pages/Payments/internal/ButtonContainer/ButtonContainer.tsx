import { FC, useContext } from 'react'
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

  return (
    <Container>
      <CustomButton { ...rest } onClick={ () => history.push(path) }
                    width={ width }>{ label ? txt!.pages.payments.cardContainer.pay : txt!.pages.payments.cardContainer.button }</CustomButton>
      <CustomButton { ...rest } onClick={ () => history.goBack() } whiteBlue marginTop={ '2rem' }
                    width={ width }>{ txt && txt.pages.payments.cardContainer.buttonBack }</CustomButton>
    </Container>
  )
}

export default ButtonContainer
