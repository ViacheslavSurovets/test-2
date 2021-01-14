import { BaseSyntheticEvent, FC, useContext } from 'react'

import { Text, UserContextMenu, UserContextMenuItem, Wrapper } from '../../styles'
import { ImageContainer } from '../../../../components'
import { signOutStart } from '../../../../redux/user/user.actions'
import { TextContext, UiContext } from '../../../../context'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../redux/user/user.selectors'

const HeaderCircle: FC = (props) => {
  const { photoURL } = useSelector(selectCurrentUser, shallowEqual)
  const { leftMenuToggle, showHeaderMenu, toggleHeaderMenu } = useContext(UiContext)
  const dispatch = useDispatch()
  const { txt } = useContext(TextContext)

  const handleRightClick = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    return toggleHeaderMenu && toggleHeaderMenu()
  }

  const handleClick = () => {
    dispatch(signOutStart())
  }


  return (
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
  )
}

export default HeaderCircle
