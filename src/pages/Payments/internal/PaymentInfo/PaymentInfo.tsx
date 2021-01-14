import { FC } from 'react'
import { Column } from '../PaymentDetails/styles'
import { CustomText } from '../../../../components'

interface PaymentInfoProp {
  item?: any
}

const PaymentInfo: FC<PaymentInfoProp> = ({ item }) => {
  const data = Object.values(item)
  return (
    <>
      { data && data.map((item: any, idx) =>
        (
          <Column key={ idx }>
            {
              item && item.map(({ fontSize, fontWeight, context }: any, index: any) =>
                <CustomText key={ index } marginTop={ '3rem' } fontSize={ fontSize }
                            fontWeight={ fontWeight }>{ context }</CustomText>
              )
            }
          </Column>
        )
      ) }
    </>

  )
}

export default PaymentInfo
