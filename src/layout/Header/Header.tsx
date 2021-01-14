import { FC, BaseSyntheticEvent, useContext } from 'react'

import {
  HeaderContentWrapper,
  HeaderContainer,
  UserContextMenu,
  UserContextMenuItem,
  Text,
  Wrapper,
  NameText,
  HeaderTitle,
  HeaderTitleContainer
} from './styles'
import { useHistory } from 'react-router-dom'
import { TextContext } from '../../context/text'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { ImageContainer } from '../../components'
import { signOutStart } from '../../redux/user/user.actions'
import { UiContext } from '../../context'


const Header: FC = () => {
  const { displayName, photoURL, firstName } = useSelector(selectCurrentUser, shallowEqual)
  const { txt } = useContext(TextContext)
  const { leftMenuToggle, showHeaderMenu, toggleHeaderMenu } = useContext(UiContext)
  const dispatch = useDispatch()

  const history = useHistory();


  const handleRightClick = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    return toggleHeaderMenu && toggleHeaderMenu()
  }

  const handleClick = () => {
    dispatch(signOutStart())
  }

  const titlePicker = () => {
    const { location:{pathname} } = history;
    if(pathname.includes('dashboard')) {
      return txt && txt.pages.dashboard.header
    }
    if(pathname.includes('payments')){
      const regex = new RegExp(/\d{1,3}$/)
      let test = regex.test(pathname)
      return test ? txt!.pages.payments.paymentsDetailsHeader : txt!.pages.payments.header
    }
    if(pathname.includes('statements')){
      return txt && txt.pages.statements.header
    }

    return 'Default Header'
  }

  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <Wrapper>
          <ImageContainer
            shape='circle'
            imageUrl={ photoURL }
            height={ 5 }
            width={ 5 }
            onContextMenu={ handleRightClick }
            onClick={ leftMenuToggle }
          />

          <UserContextMenu visible={ !showHeaderMenu }>
            <UserContextMenuItem onClick={ handleClick }>
              <Text>{ txt && txt.header.logout }</Text>
            </UserContextMenuItem>
          </UserContextMenu>
        </Wrapper>

        <NameText>{ displayName ? displayName : firstName }</NameText>

        <HeaderTitleContainer>
          <HeaderTitle>{titlePicker()}</HeaderTitle>
        </HeaderTitleContainer>

      </HeaderContentWrapper>
    </HeaderContainer>
  )
}

export default Header
