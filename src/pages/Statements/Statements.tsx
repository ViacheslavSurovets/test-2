import { FC, useContext } from 'react'

import {
  StatementsContent
} from './styles'
import { BaseLayout } from '../../layout/BaseLayout'
import { TextContext } from '../../context'
import { MainStat, StatementsDetails } from './internal'

const Statements: FC = (props) => {
  const { txt } = useContext(TextContext)

  return (
    <BaseLayout>
      <StatementsContent>
        <h2>{ txt && txt.pages.statements.title }</h2>
        <MainStat/>
        <StatementsDetails/>
      </StatementsContent>
    </BaseLayout>
  )
}

export default Statements
