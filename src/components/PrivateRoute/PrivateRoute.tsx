import { FC, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'

import { checkUserSession } from '../../redux/user/user.actions'
import { selectCurrentUser } from '../../redux/user/user.selectors'

interface PrivateRouteProps {
  [props: string]: any;
  path: string;
}

const PrivateRoute: FC<PrivateRouteProps> = (props: any) => {
  const { component: Component, ...rest } = props
  useEffect(() => {
    checkUserSession()
    //eslint-disable-next-line
  }, [])

  const isAuthenticated = useSelector(selectCurrentUser, shallowEqual)

  return (
    <Route
      { ...rest }
      render={ props =>
        !isAuthenticated ? (
          <Redirect to='/auth'/>
        ) : (
          <Component { ...props } />
        )
      }
    />
  )
}

export default PrivateRoute
