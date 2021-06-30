import { FC, useContext } from 'react'

import './styles.scss'
import { TextContext, UiContext } from '../../context'
import { signOutStart } from '../../redux/user/user.actions'
import { useDispatch } from 'react-redux'

const CustomPopup:FC = (props) => {
  const { txt } = useContext(TextContext)
  const { closeCustomPopUpAction } = useContext(UiContext)
  const dispatch = useDispatch()

  const onSignOut = () => {
    dispatch(signOutStart())
    closeCustomPopUpAction && closeCustomPopUpAction()
  }

  //@ts-ignore
  return (
    //@ts-ignore
    <div className="custom-popup-container">
      <div className="custom-popup-container_padding">
        <div className="custom-popup-container__button-container">
          <button onClick={closeCustomPopUpAction} className="custom-popup__button blue">{txt && txt.customPopup.close}</button>
          <button onClick={onSignOut} className="custom-popup__button orange">{txt && txt.customPopup.logout}</button>
        </div>
      </div>
    </div>
  )
}

export default CustomPopup
