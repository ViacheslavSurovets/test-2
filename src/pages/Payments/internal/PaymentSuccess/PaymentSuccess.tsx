import { FC, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { ContentWrapper } from './styles'
import { CustomButton } from '../../../../components'
import { DetailsContainer } from '../../../../styles/commonStylesAndStyledComponents'
import { TextContext } from '../../../../context'
import { SuccessIcon } from '../../../../components/icons'

const PaymentSuccess: FC = (props) => {
  const { txt } = useContext(TextContext)
const history = useHistory()

  return (
    <DetailsContainer>
      <ContentWrapper>
        <SuccessIcon />
        <CustomButton onClick={() => history.push('/payments') } width={'20rem'} marginTop={'5rem'}>{txt && txt.pages.payments.cardContainer.done}</CustomButton>
      </ContentWrapper>
    </DetailsContainer>
  )
}

export default PaymentSuccess
