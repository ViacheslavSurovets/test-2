import styled, { css } from 'styled-components/macro'

import { commonFontSize, flexCommon } from '../../styles/commonStylesAndStyledComponents'
import { mobile } from '../../utils/media'

import { CustomButtonProps } from './CustomButton'


const stylesButtonDefault = css`
  ${ commonFontSize };
  outline: none;
  height: 5rem;
  font-size: 1.6rem;
`

const styleButton = css`
  color: ${ ({ theme }) => theme.white };
  background: ${ ({ theme }) => theme.black };
  border: 1px solid ${ ({ theme }) => theme.customButton.customButtonBorderColor };

  &:hover {
    color: ${ ({ theme }) => theme.customButton.customButtonColor };
    background-color: ${ ({ theme }) => theme.white };
    border: 1px solid ${ ({ theme }) => theme.black };
  }
`

const styleButtonOrangeSoft = css`
  color: ${ ({ theme }) => theme.white };
  background: ${ ({ theme }) => theme.orangeSoft };
  border: 1px solid transparent;

  &:hover {
    color: ${ ({ theme }) => theme.orangeSoft };
    background: ${ ({ theme }) => theme.white };
    border: 1px solid ${ ({ theme }) => theme.orangeSoft };
  }
`

const styleBlueButton = css`
  background-color: ${ ({ theme }) => theme.googleButtonColor };
  color: ${ ({ theme }) => theme.white };
  border: 1px solid transparent;
`

const styleWhiteButton = css`
  background-color: ${ ({ theme }) => theme.white };
  color: ${ ({ theme }) => theme.googleButtonColor };
  border: 1px solid ${ ({ theme }) => theme.googleButtonColor };
`

const googleSignInStyles = css`
  ${ styleBlueButton };

  &:hover {
    ${ styleWhiteButton };
  }
`

const styleButtonWhiteBlue = css`
  ${ styleWhiteButton };

  &:hover {
    ${ styleBlueButton };
  }
`

const getStyleButton = (props: CustomButtonProps) => {
  if (props.orangeSoft) {
    return styleButtonOrangeSoft
  }
  if (props.googleButton) {
    return googleSignInStyles
  }
  if (props.whiteBlue) {
    return styleButtonWhiteBlue
  }
  return styleButton
}

const styleButtonDisplay = css`
  width: 100%;
`

const styleButtonMediaQueryMobile = css`
  ${ mobile } {
    width: 90%;
  }
`

const getMediaQuery = (props: CustomButtonProps) => {
  if (props.mobile) {
    return styleButtonMediaQueryMobile
  }
  return
}

const getStyleButtonDisplayBlock = (props: CustomButtonProps) => {
  if (props.block) {
    return styleButtonDisplay
  }
  return
}


export const Button = styled.button`
  ${ stylesButtonDefault };
  ${ getStyleButtonDisplayBlock };
  ${ getStyleButton };
  ${ getMediaQuery };
  ${ flexCommon };
  margin-top: ${ props => props.marginTop };
  margin-bottom: ${ props => props.marginBottom };
  margin-right: ${ props => props.marginRight };
  margin-left: ${ props => props.marginLeft };
  font-size: ${ props => props.fontSize };
  width: ${ props => props.width };
  height: ${ props => props.height };
  cursor: pointer;
  user-select: none;
  position: relative;
`
