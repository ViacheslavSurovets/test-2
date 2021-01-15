import { FC, useContext } from 'react'

import { UserInfoContainer } from './styles'
import { CustomText } from '../../components/CustomText'
import { BaseLayout } from '../../layout/BaseLayout'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { TextContext } from '../../context'


const Dashboard: FC = (props: any) => {
  const { lastName, firstName, displayName } = useSelector(selectCurrentUser)
  const { txt } = useContext(TextContext)

  return (
    <BaseLayout>
      <UserInfoContainer>
        <CustomText fontSize={ '3rem' } fontWeight='bold' >
          { txt && txt.pages.dashboard.userInfo.fullName }:
          { firstName ? firstName + ' ' + lastName : displayName  }</CustomText>
      </UserInfoContainer>
    </BaseLayout>
  )
}

export default Dashboard
