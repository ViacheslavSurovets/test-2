import { FC, useContext } from 'react'

import './styles.scss'
import { BaseLayout } from '../../layout/BaseLayout'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { TextContext } from '../../context'


const Dashboard: FC = (props: any) => {
  const { lastName, firstName, displayName } = useSelector(selectCurrentUser)
  const { txt } = useContext(TextContext)

  return (
    <BaseLayout>
      <div className="dashboard-container">
        <span className="dashboard-container__info" >
          { txt && txt.pages.dashboard.userInfo.fullName }:
          { firstName ? firstName + ' ' + lastName : displayName  }</span>
      </div>
    </BaseLayout>
  )
}

export default Dashboard
