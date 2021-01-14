import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components'

import { TextProvider, UiProvider } from '../src/context'
import GlobalStyles from './styles/globalStyles'
import { PersistGate } from 'redux-persist/integration/react'
import theme from './core/theme'
import { store, persistor } from './redux/store'
import Root from './Root'



render(
  <ReduxProvider store={ store }>
    <TextProvider>
      <UiProvider>
        <Router>
          <PersistGate loading={ true } persistor={ persistor }>
            <StyledComponentsProvider theme={ theme }>
              <GlobalStyles/>
              <Root/>
            </StyledComponentsProvider>
          </PersistGate>
        </Router>
      </UiProvider>
    </TextProvider>
  </ReduxProvider>,
  document.getElementById('root')
)

