import { FC } from 'react'

import { CustomText, IconWrapperTooleTip } from '../../../../components'
import { Hr } from '../../../../styles/commonStylesAndStyledComponents'
import { AttentionIcon } from '../../../../components/icons'
import { FieldContent } from './styles'

interface DetailsField {
  item: object
}

//eslint-disable-next-line
const DetailsField: FC<DetailsField> = ({ item }) => {
  const DATA = Object.entries(item)

  const checkAttention = (key: string) => {
    if (key.includes('Past Credits')) {
      return (
      <>
        {key}
        <IconWrapperTooleTip component={AttentionIcon} content={key} />
      </>
      )
    }

    return key
  }

  return (
    <>
      {
        DATA && DATA.map(([key, value], idx) => {
            return (
              <FieldContent key={idx}>
                <CustomText width={'17rem'} justify={'flex-start'} >{ checkAttention(key) }</CustomText>
                <CustomText width={'10rem'} justify={'flex-start'}>{ value }</CustomText>
              </FieldContent>
            )
          }
        )
      }
      <Hr />
      <FieldContent>
        <CustomText width={'17rem'} justify={'flex-start'} >Total</CustomText>
        <CustomText width={'10rem'} justify={'flex-start'}>$900</CustomText>
      </FieldContent>
    </>
  )
}

export default DetailsField
