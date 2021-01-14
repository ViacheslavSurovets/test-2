import { FC } from 'react'
import { Spinner, SuspenseComponentWrapper, Text } from './styled'
import { numOrString } from '../../types'

export interface SpinnerProps {
  position?: string;
  size?: numOrString;
  top?: numOrString;
  bottom?: numOrString;
  fullSize?: boolean;
  text?: string;
  right?: numOrString;
  left?: numOrString;
  isHidden?: boolean;
}

const SuspenseComponent: FC<SpinnerProps> = ({ ...rest }) => {
  let iterableWord = 'Loading...'
  let iterableArray = iterableWord.split('')

  return (
    <SuspenseComponentWrapper { ...rest }>
      {
        iterableArray.map((item, idx) =>
          <Text { ...rest } key={ idx }>{ item }</Text>
        )
      }

      <Spinner { ...rest }>
        <div/>
        <div/>
        <div/>
        <div/>
      </Spinner>
    </SuspenseComponentWrapper>
  )
}

export default SuspenseComponent

