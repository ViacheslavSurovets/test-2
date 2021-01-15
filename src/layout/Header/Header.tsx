import { FC, useContext } from 'react'

import {
  HeaderContentWrapper,
  HeaderContainer,
  NameText,
  HeaderTitle,
  HeaderTitleContainer
} from './styles'
import { Logo } from './internal'
import { useHistory } from 'react-router-dom'
import { TextContext } from '../../context/text'
import { shallowEqual, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { HeaderCircle } from './internal'


const Header: FC = () => {
  const { displayName, firstName } = useSelector(selectCurrentUser, shallowEqual)
  const { txt } = useContext(TextContext)
  const history = useHistory()

  const titlePicker = () => {
    const { location: { pathname } } = history
    if (pathname.includes('dashboard')) {
      return txt && txt.pages.dashboard.header
    }
    if (pathname.includes('payments')) {
      const regex = new RegExp(/\d{1,3}$/)
      let test = regex.test(pathname)
      return test ? txt!.pages.payments.paymentsDetailsHeader : txt!.pages.payments.header
    }
    if (pathname.includes('statements')) {
      return txt && txt.pages.statements.header
    }

    return 'Default Header'
  }

  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <Logo />
        <HeaderCircle/>
        <NameText>{ displayName ? displayName : firstName }</NameText>
        <HeaderTitleContainer>
          <HeaderTitle>{ titlePicker() }</HeaderTitle>
        </HeaderTitleContainer>
      </HeaderContentWrapper>
    </HeaderContainer>
  )
}

export default Header
