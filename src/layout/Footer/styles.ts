import styled, { css } from 'styled-components/macro'
import { commonLinkStyle } from '../../styles/commonStylesAndStyledComponents'

export const FooterContainerWrapper = styled.footer`
  background: ${ ({ theme }) => theme.ghostWhite };
`

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 8rem;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`

const onHoverColor = css`
  &:hover {
    color: ${ ({ theme }) => theme.footer.footerColorOnHover };
  }
`

export const FooterInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  user-select: none;
  padding-left: 1rem;
  ${ onHoverColor };

  &:hover {
    svg {
      fill: ${ ({ theme }) => theme.footer.footerColorOnHover };
    }
  ;
  }
`

export const SendEmailLink = styled.a`
  ${ commonLinkStyle };
  color: ${ ({ theme }) => theme.darkGray };
  ${ onHoverColor };
`
