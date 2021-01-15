import { useMemo, FC, useContext } from 'react'

import { TextContext, UiContext } from '../../context'
import { CustomLink, Container, LeftMenuItemWrapper } from './styles'


const LeftMenu: FC = () => {
  const { txt } = useContext(TextContext)
  const { leftMenuToggle } = useContext(UiContext)

  const config = useMemo(() => {
    const { dashboard, payments, statements } = txt!.leftMenu.label
    return [
      {
        label: dashboard,
        path: '/dashboard',
        exact: true
      },
      {
        label: payments,
        path: '/payments',
        exact: false
      },
      {
        label: statements,
        path: '/statements',
        exact: false
      }
    ]
    //eslint-disable-next-line
  }, [])

  return (
    <Container visible={true}>
      <LeftMenuItemWrapper >
        { config.map(item =>
          <CustomLink exact to={ item.path } activeClassName='selected' onClick={leftMenuToggle} key={ item.path }>
            <span className='label'>{ item.label }</span>
          </CustomLink>
        ) }
      </LeftMenuItemWrapper>
    </Container>
  )
}

export default LeftMenu
