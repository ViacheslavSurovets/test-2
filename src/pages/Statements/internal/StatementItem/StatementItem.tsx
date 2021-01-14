import { FC, useState } from 'react'

import { Hr } from '../../../../styles/commonStylesAndStyledComponents'
import { CustomText, IconWrapper } from '../../../../components'
import { Line } from '../StatementDetails/styles'
import { ArrowIcon } from '../../../../components/icons'
import { DetailsComponent } from '../DetailsComponent'

type Row = {
  period: string;
  balance: string;
  remaining: string;
  status: string;
  paidOn?: any;
}

interface StatementItemProps {
  row: Row;
  data?: any [];
}

const StatementItem: FC<StatementItemProps> = ({ row, data }) => {
  const [isHidden, setHidden] = useState(false)
  const { period, balance, remaining, status, paidOn } = row

  const handleClick = () => {
    setHidden(!isHidden)
  }

  return (
    <>
      <Line>
        <CustomText width={ '17rem' }>
          <div style={{display: 'flex'}}>
            <IconWrapper onClick={handleClick} isHidden={isHidden} component={ ArrowIcon } marginRight={'1rem'}/>
            { period }
          </div>
        </CustomText>
        <CustomText width={ '17rem' }>{ balance } </CustomText>
        <CustomText width={ '17rem' }>{ remaining } </CustomText>
        <CustomText width={ '17rem' } status={ status }>{ status } </CustomText>
        <CustomText width={ '17rem' }>{ paidOn } </CustomText>
      </Line>

      <DetailsComponent hide={isHidden} data={data} />
      <Hr marginTop={'5rem'} marginBottom={'5rem'} />
    </>

  )
}

export default StatementItem
