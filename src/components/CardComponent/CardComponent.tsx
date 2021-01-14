import { FC, useContext, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { CustomButton, Spinner, CustomText } from '../../components'
import { CardContainer, ButtonSpinner } from './styles'
import { TextContext } from '../../context'

type Item = {
  id: number;
  userId: number;
  body: string;
  title: string
}

interface CardComponentProps {
  item: Item,

}

const CardComponent: FC<CardComponentProps> = ({ item }) => {
  const [isHiddenSpinner, setIsHiddenSpinner] = useState(false)
  const { txt } = useContext(TextContext)
  const history = useHistory()

  const toItem =  (id: number) => {
    setIsHiddenSpinner(!isHiddenSpinner)
    setTimeout(() =>history.push(`/payments/${id}`),1000)
  }

  return (
    <CardContainer>
      <CustomText>{ item.title }</CustomText>
      <CustomText>$9.99</CustomText>
      <CustomButton block onClick={() => toItem(item.id)}>
        <ButtonSpinner>
          { txt && txt.pages.payments.cardContainer.button }
          <Spinner isHidden={isHiddenSpinner} size={3}  bottom={8} left={10} position='absolute' />
        </ButtonSpinner>
      </CustomButton>
    </CardContainer>
  )
}

export default CardComponent
