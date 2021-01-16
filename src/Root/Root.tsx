import { FC, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { PrivateRoute } from '../components'
import { Layout } from './styles'
// import { lazy } from '../utils/lazy'
import { Dashboard, Statements, Payments, NotFound, Auth } from '../pages'
import { UiContext } from '../context'

const Root: FC = () => {
  const { showCustomPopUp, closeCustomPopUpAction } = useContext(UiContext)

  const handleClick = () => {
    if(showCustomPopUp){
      return closeCustomPopUpAction && closeCustomPopUpAction()
    }
   return
  }

  return (
    <Layout onClick={handleClick}>
      {/*<Suspense fallback={ <Spinner showSpinner={ true } size={ 10 } top={ 50 } left={50}/> }>*/}
        {/*<Spinner showSpinner={ true } size={ 30 } left={ 50 }  />*/}
        <Switch>
          <PrivateRoute path='/dashboard' component={ Dashboard }/>
          <PrivateRoute path='/payments'  component={ Payments }/>
          <PrivateRoute path='/statements' component={ Statements }/>
          <Route path='/auth' component={ Auth }/>
          <Route path='/404' component={ NotFound }/>
          <Route exact path='/'>
            <Redirect to='/dashboard'/>
          </Route>
          <Redirect from='*' to='/404'/>
        </Switch>
      {/*</Suspense>*/}
    </Layout>
  )
}

export default Root
