import { FC, useEffect, useMemo } from 'react'

import { currentItemToStore } from '../../../../redux/payment/payment.actions'
import { DetailsContainer } from '../../../../styles/commonStylesAndStyledComponents'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectPaymentItem } from '../../../../redux/payment/payment.selector'
import { ButtonContainer } from '../ButtonContainer'
import { PaymentInfo } from '../PaymentInfo'



const PaymentDetails: FC = () => {
  const { params } = useRouteMatch()
  const dispatch = useDispatch()
  const history = useHistory()
  console.log(history)
  let itemData = useSelector(selectPaymentItem(params))
  useEffect(()=>{
    dispatch(currentItemToStore(itemData))
    //eslint-disable-next-line
  },[])

  const { id, body, title } = itemData
  const DATA = useMemo(() => ([
    {
      dataOne: [
        {
          fontSize: '2rem',
          fontWeight: 'bold',
          context: title
        },
        {
          fontSize: '',
          fontWeight: 'bold',
          context: body
        },
        {
          fontSize: '',
          fontWeight: 'bold',
          context: '$9.99'
        },
        {
          fontSize: '',
          fontWeight: 'bold',
          context: id
        }],
      dataTwo: [
        {
          fontSize: '2rem',
          fontWeight: 'bold',
          context: title
        },
        {
          fontSize: '',
          fontWeight: 'bold',
          context: body
        },
        {
          fontSize: '',
          fontWeight: 'bold',
          context: '$9.99'
        },
        {
          fontSize: '',
          fontWeight: 'bold',
          context:  id
        }]
    }
    //eslint-disable-next-line
  ]), [])

  return (
    <DetailsContainer>
      {
        DATA && DATA.map((item, key) =>
          <PaymentInfo key={key} item={item} />
        )
      }

      <ButtonContainer path={ '/payments/amount' } width={ '20rem' }/>
    </DetailsContainer>
  )
}

export default PaymentDetails
