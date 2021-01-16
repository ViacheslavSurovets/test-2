import React, { useReducer } from 'react'

import UiReducer from './ui.reducer'
import UiContext from './ui.context'
import UiActionTypes from './ui.types'


const UiState = (props: any) => {
  const initialState = {
    showLeftMenu: false,
    showHeaderMenu: false,
    showCustomPopUp: false
  }

  const [state, dispatch] = useReducer(UiReducer, initialState)


  const leftMenuToggle = () => dispatch({
    type: UiActionTypes.LEFT_MENU_TOGGLE
  })

  const closeHeaderMenu = () => dispatch({
    type: UiActionTypes.CLOSE_HEADER_MENU
  })

  const toggleHeaderMenu = () => dispatch({
    type: UiActionTypes.TOGGLE_HEADER_MENU
  })

  const showCustomPopUpAction = () => dispatch({
    type: UiActionTypes.SHOW_CUSTOM_POPUP
  })

  const closeCustomPopUpAction = () => dispatch({
    type: UiActionTypes.CLOSE_CUSTOM_POPUP
  })



  return (
    <UiContext.Provider
      value={ {
        leftMenuToggle,
        toggleHeaderMenu,
        closeHeaderMenu,
        showCustomPopUpAction,
        closeCustomPopUpAction,
        showLeftMenu: state.showLeftMenu,
        showHeaderMenu: state.showHeaderMenu,
        showCustomPopUp: state.showCustomPopUp
      } }
    >
      { props.children }
    </UiContext.Provider>
  )
}

export default UiState
