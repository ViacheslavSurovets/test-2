import React, { FC } from 'react'

import { Header, Footer, LeftMenu } from '../../layout'
import { Main } from './styles'


const BaseLayout: FC = ({ children }:any) => (
  <>
    <Header/>
    <Main>
      <LeftMenu />
      {children}
    </Main>
    <Footer/>
  </>
)

export default BaseLayout
