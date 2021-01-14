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
      console.log(action.type, state)
      return {
        ...state,
        showHeaderMenu: !state.showHeaderMenu
      }
    default:
      return state
  }
}
