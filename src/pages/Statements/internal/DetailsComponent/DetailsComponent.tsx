import { FC } from 'react'

import { mainStat as MAIN_STAT } from '../../../../data'
import { DetailsField } from '../../internal'
import { DetailsContent } from './styles'

export interface DetailsComponentProps {
  hide?: boolean;
  data?: any [];
}

const DetailsComponent: FC<DetailsComponentProps> = ({ hide }) => {
  return (
    <DetailsContent hide={hide}>
      {
        MAIN_STAT.map((item, key) =>
          <DetailsField item={ item } key={ key }/>
        )
      }

    </DetailsContent>
  )
}

export default DetailsComponent
