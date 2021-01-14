import React, { useReducer } from 'react'
import AlertReducer from './ui.reducer'
import UiContext from './ui.context'

import UiActionTypes from './ui.types'

const UiState = (props: any) => {
  const initialState = {
    showLeftMenu: false,
    showHeaderMenu: false
  }

  const [state, dispatch] = useReducer(AlertReducer, initialState)


  const leftMenuToggle = () => dispatch({
    type: UiActionTypes.LEFT_MENU_TOGGLE
  })

  const closeHeaderMenu = () => dispatch({
    type: UiActionTypes.CLOSE_HEADER_MENU
  })

  const toggleHeaderMenu = () => dispatch({
    type: UiActionTypes.TOGGLE_HEADER_MENU
  })


  return (
    <UiContext.Provider
      value={ {
        leftMenuToggle,
        toggleHeaderMenu,
        closeHeaderMenu,
        showLeftMenu: state.showLeftMenu,
        showHeaderMenu: state.showHeaderMenu
      } }
    >
      { props.children }
    </UiContext.Provider>
  )
}

export default UiState
