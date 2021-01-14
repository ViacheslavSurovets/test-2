import { Suspense, FC, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Spinner, PrivateRoute } from '../components'
import { Layout } from './styles'
import { lazy } from '../utils/lazy'
import { NotFound } from '../pages'
import { UiContext } from '../context'

const Root: FC = () => {
  const { closeHeaderMenu } = useContext(UiContext)

  const handleClick = () => {
    return closeHeaderMenu && closeHeaderMenu()
  }

  return (
    <Layout onClick={handleClick}>
      <Suspense fallback={ <Spinner size={ 10 } top={ 50 } fullSize/> }>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/dashboard'/>
          </Route>
          <PrivateRoute path='/dashboard' component={ lazy('Dashboard') }/>
          <PrivateRoute path='/payments'  component={ lazy('Payments') }/>
          <PrivateRoute path='/statements' component={ lazy('Statements') }/>
          <Route path='/auth' component={ lazy('Auth') }/>
          <Route path='/404' component={ NotFound }/>
          <Redirect from='*' to='/404'/>
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default Root
