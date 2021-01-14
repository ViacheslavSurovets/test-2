import  { FC, useContext, useMemo } from 'react'
import {  StatementsIconContainer } from '../../styles'
import { BalanceIcon, BellIcon, CalendarIcon } from '../../../../components/icons'
import { TextContext } from '../../../../context'
import IconComponent from '../IconComponent/IconComponent'

const IconsContainer: FC = (props) => {
  const {txt} = useContext(TextContext)

  const ITEM_DATA = useMemo(()=> [
    {
      component: BalanceIcon,
      textExplain: txt && txt.pages.statements.iconTextExplain.statementBalance,
      info: '$900'
    },
    {
      component: BellIcon,
      textExplain: txt && txt.pages.statements.iconTextExplain.billingPeriod,
      info: 'December 1 - December 31'
    },
    {
      component: CalendarIcon,
      textExplain: txt && txt.pages.statements.iconTextExplain.dueDate,
      info: 'January 10th'
    }
  ],[txt])

  return (
    <StatementsIconContainer>
      {
        ITEM_DATA.map(({...rest},key)=>
          <IconComponent key={key} {...rest}/>
        )
      }
    </StatementsIconContainer>
  )
}

export default IconsContainer
