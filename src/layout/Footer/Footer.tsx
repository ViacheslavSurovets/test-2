import { FC } from 'react'
import { FooterContainer, FooterInfo, SendEmailLink, FooterContainerWrapper } from './styles'
import { Email } from '../../components/icons'

const Footer: FC = () => (
  <FooterContainerWrapper>
    <FooterContainer>
      <FooterInfo>
        <span>&#169; Exposit  2021</span>
      </FooterInfo>
      <FooterInfo>
        <SendEmailLink href="mailto:surovetsviacheslav@gmail.com"><Email/></SendEmailLink>
      </FooterInfo>

    </FooterContainer>
  </FooterContainerWrapper>
)

export default Footer
