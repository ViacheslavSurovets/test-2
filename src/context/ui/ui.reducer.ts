import UiActionTypes from './ui.types'

//eslint-disable-next-line
export default (state: any, action: any) => {
  switch (action.type) {
    case UiActionTypes.LEFT_MENU_TOGGLE:
      return {
        ...state,
        showLeftMenu: !state.showLeftMenu
      }
    case UiActionTypes.CLOSE_HEADER_MENU:
      return {
        ...state,
        showHeaderMenu: false
      }
    case UiActionTypes.TOGGLE_HEADER_MENU:
      return {
        ...state,
        showHeaderMenu: !state.showHeaderMenu
      }
    case UiActionTypes.SHOW_CUSTOM_POPUP:
      return {
        ...state,
        showCustomPopUp: true
      }
    case UiActionTypes.CLOSE_CUSTOM_POPUP:
      return {
        ...state,
        showCustomPopUp: false
      }

    default:
      return state
  }
}
