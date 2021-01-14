import { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { AuthContainer } from './styles'
import { LoginForm, RegistrationForm } from './internal'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors'

interface AuthProps {
  match: {
    path: string
  };
}

const Auth: FC<AuthProps> = ({ match }) => {
  const isAuthenticated = useSelector(selectCurrentUser)

  return (
    <>
      {
        isAuthenticated ? <Redirect to='/'/> :
          (<AuthContainer>
            <Switch>
              <Route exact path={ `${ match.path }` } component={ LoginForm }/>
              <Route path={ `${ match.path }/registration` } component={ RegistrationForm }/>
            </Switch>
          </AuthContainer>)
      }
    </>
  )
}

export default Auth
