import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import {
  commonStyleTextFourRem,
  commonFontColor,
  commonLinkStyle,
  commonStyleTextTwoRem,
  commonStyleTextThreeRem,
  flexCommon
} from '../../styles/commonStylesAndStyledComponents'
import { mobile, tablet } from '../../utils/media'


export const AuthContainer = styled.section`
  width: 100%;
  height: 100%;
  ${flexCommon};
  flex-direction: column;
  flex: 1;
`

export const LoginContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  ${ tablet } {
    width: 75%;
  }
;

  ${ mobile } {
    width: 90%;
  }
`

export const LoginContainerButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const LoginContainerTitle = styled.div`
  ${ commonStyleTextFourRem };
  ${ commonFontColor };
  align-self: flex-start;
  justify-content: center;
  margin: 2rem 0 5rem 5rem;

  ${ mobile } {
    ${ commonStyleTextThreeRem };
  }
`

const styleLoginLink = css`
  ${ commonLinkStyle };
  color: ${ ({ theme }) => theme.orangeSoft };

  &:hover {
    color: ${ ({ theme }) => theme.blue }
  }
`

export const RestorePasswordLink = styled(Link)`
  ${ styleLoginLink };
  position: absolute;
  right: 0;
  transform: translateY(-110%);
  font-size: 1.8rem;
  font-style: italic;
  white-space: nowrap;

  ${ mobile } {
    bottom: 0;
    transform: translateY(-60%);
  }
`

export const LoginNewCustomerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 5rem;
  margin-top: 1rem;

  ${ tablet },
  ${ mobile } {
    flex-wrap: wrap;
  }
`

export const LoginNewCustomerText = styled.span`
  ${ commonStyleTextTwoRem };
  ${ commonFontColor };
  margin-right: 1rem;
  white-space: nowrap;

  ${ mobile } {
    white-space: inherit;
  }
`

export const LoginNewCustomerLink = styled(Link)`
  ${ styleLoginLink };
  ${ flexCommon };
  ${ commonStyleTextThreeRem };
`
