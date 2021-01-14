import { FC, useContext } from 'react'

import { StatementItem } from '../../internal'
import { statements } from '../../../../data'
import { CustomText } from '../../../../components'
import { Title, Line, Aside } from './styles'
import { TextContext } from '../../../../context'

const StatementsDetails: FC = (props) => {
  const { txt } = useContext(TextContext)

  return (
    <Aside>
      <Title>{ txt && txt.pages.statements.statementsDetails.title }</Title>
      <Line>
        <CustomText width={ '17rem' }>{ txt && txt.pages.statements.statementItem.period } </CustomText>
        <CustomText width={ '17rem' }>{ txt && txt.pages.statements.statementItem.balance } </CustomText>
        <CustomText width={ '17rem' }>{ txt && txt.pages.statements.statementItem.remaining } </CustomText>
        <CustomText width={ '17rem' }>{ txt && txt.pages.statements.statementItem.status } </CustomText>
        <CustomText width={ '17rem' }>{ txt && txt.pages.statements.statementItem.paidOn } </CustomText>
      </Line>

      { statements && statements.map(({ row, data }, idx) =>
        <StatementItem key={ idx } row={ row } data={ data }/>
      )
      }

    </Aside>

  )
}

export default StatementsDetails
