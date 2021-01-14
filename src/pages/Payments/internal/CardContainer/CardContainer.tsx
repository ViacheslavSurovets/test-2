import { FC } from 'react'

import { Container } from './styles'
import { CardComponent } from '../../../../components'
import { useSelector } from 'react-redux'
import { selectPayment } from '../../../../redux/payment/payment.selector'

const CardContainer: FC = (props) => {
  let data = useSelector(selectPayment)

  return (
    <Container>
      {
        data && data.map((item:any,idx:any) =>
          <CardComponent key={idx} item={item} />
        )
      }
    </Container>
  )
}

export default CardContainer
