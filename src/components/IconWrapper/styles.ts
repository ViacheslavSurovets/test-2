import styled, { css } from 'styled-components/macro'

import { IconWrapperTooleTipProps } from './IconWrapper'
import { flexCommon } from '../../styles/commonStylesAndStyledComponents'


const rotate = (props: IconWrapperTooleTipProps) => {
  if (props.isHidden) {
    return css`
      transform: rotate(180deg)
      
    `} else {
    return css`
      transform: rotate(0)
    `
  }
}

export const Container = styled.div<IconWrapperTooleTipProps>`
  ${ flexCommon };
  margin-left: ${ props => props.marginLeft };
  margin-right: ${ props => props.marginRight };
  cursor: pointer;
  ${rotate};
  transition: .5s all ease;
`
