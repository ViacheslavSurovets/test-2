import { FC, useContext, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { CustomButton, CustomText } from '../../components'
import { CardContainer } from './styles'
import { TextContext } from '../../context'

type Item = {
  id: number;
  userId: number;
  body: string;
  title: string
}

interface CardComponentProps {
  item: Item
}

const CardComponent: FC<CardComponentProps> = ({ item }) => {
  const [isHiddenSpinner, setIsHiddenSpinner] = useState(false)
  const { txt } = useContext(TextContext)
  const history = useHistory()


  const toItem = async (id: number) => {
    setIsHiddenSpinner(!isHiddenSpinner)
    setTimeout(() => history.push(`/payments/${ id }`), 1000)
  }

  return (
    <>
      <CardContainer onClick={ () => toItem(item.id) }>
        <CustomText>{ item.title }</CustomText>
        <CustomText>$9.99</CustomText>
        <CustomButton spinner={isHiddenSpinner} block onClick={ () => toItem(item.id) }>
            { txt && txt.pages.payments.cardContainer.button }
        </CustomButton>
      </CardContainer>
    </>
  )
}

export default CardComponent
