import { FC } from 'react'

import { ContentWrapper } from './styles'
import { CustomText } from '../../../../components'
import { selectCurrentItem } from '../../../../redux/payment/payment.selector'
import { ButtonContainer } from '../../internal'
import { DetailsContainer } from '../../../../styles/commonStylesAndStyledComponents'
import { shallowEqual, useSelector } from 'react-redux'

const PaymentConfirm: FC = () => {
  const { title, body } = useSelector(selectCurrentItem, shallowEqual)
  return (
    <DetailsContainer>
      <ContentWrapper>
        <CustomText fontSize={'3rem'} fontWeight={'bold'}>{title}</CustomText>
        <CustomText fontSize={'2rem'} marginTop={'2rem'}>{body}</CustomText>
        <CustomText fontSize={'2rem'} marginTop={'2rem'}>$9.99</CustomText>
        <ButtonContainer label marginTop={'2rem'} width={ '25rem' } path={ `/payments/success` } />
      </ContentWrapper>
    </DetailsContainer>
  )
}

export default PaymentConfirm
