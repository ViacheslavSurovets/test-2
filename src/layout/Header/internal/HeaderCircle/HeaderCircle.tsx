import { BaseSyntheticEvent, FC, useContext } from 'react'

import { Text, UserContextMenu, UserContextMenuItem, Wrapper } from '../../styles'
import { ImageContainer, Portal, CustomPopup } from '../../../../components'
import { signOutStart } from '../../../../redux/user/user.actions'
import { TextContext, UiContext } from '../../../../context'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../redux/user/user.selectors'

const HeaderCircle: FC = (props) => {
  const { photoURL } = useSelector(selectCurrentUser, shallowEqual)
  const { showHeaderMenu, showCustomPopUp, showCustomPopUpAction } = useContext(UiContext)
  const { lastName, firstName } = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  const { txt } = useContext(TextContext)

  const handleClick = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    showCustomPopUpAction && showCustomPopUpAction()
    // return toggleHeaderMenu && toggleHeaderMenu()
  }

  const onSignOut = () => {
    dispatch(signOutStart())
  }

  const getInitials = () => {
    if (lastName && firstName) {
      return `${ firstName[0] }${ lastName[0] }`.toUpperCase()
    }
    return
  }

  return (
    <>
      { showCustomPopUp && <Portal component={ CustomPopup } nameOfClass={ 'js_custom-popup' }  /> }
      <Wrapper>
        <ImageContainer
          shape='circle'
          imageUrl={ photoURL }
          height={ 5 }
          width={ 5 }
          onClick={ handleClick }
        >{ getInitials() }</ImageContainer>

        <UserContextMenu visible={ !showHeaderMenu }>
          <UserContextMenuItem onClick={ onSignOut }>
            <Text>{ txt && txt.header.logout }</Text>
          </UserContextMenuItem>
        </UserContextMenu>
      </Wrapper>
    </>

  )
}

export default HeaderCircle
