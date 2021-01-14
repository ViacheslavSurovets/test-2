import { createContext } from 'react'

interface ContextProps {
  leftMenuToggle: () => any,
  showLeftMenu: boolean,
  closeHeaderMenu: () => any,
  toggleHeaderMenu: () => any,
  showHeaderMenu: boolean
}

const UiContext = createContext<Partial<ContextProps>>({})

export default UiContext
