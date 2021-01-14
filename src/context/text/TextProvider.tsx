import { FC } from 'react'

import { TEXT_DATA } from '../../locales'
import TextContext from './TextContext'

const TextProvider: FC = ({ children }) => {
  return (
    // @ts-ignore
    <TextContext.Provider value={ { txt: TEXT_DATA } }>
      { children }
    </TextContext.Provider>
  )
}

export default TextProvider
