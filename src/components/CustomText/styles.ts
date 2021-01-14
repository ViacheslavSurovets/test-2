import styled, { css } from 'styled-components/macro'

import { CustomTextProps } from './CustomText'


const setColor = (props: CustomTextProps) => {
  const { status } = props
  if (status === 'Dew Now') {
    return css`
      color: ${ ({ theme }) => theme.orangeSoft }
    `
  }
  if (status === 'Paid') {
    return css`
      color: ${ ({ theme }) => theme.lightGreen }
    `
  }
  return
}

export const Text = styled.div<CustomTextProps>`
  font-size: ${ props => props.fontSize };
  color: ${ props => props.color };
  font-weight: ${ props => props.fontWeight };
  ${ setColor };
`

export const Div = styled.div<CustomTextProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${ props => props.height };
  width: ${ props => props.width };
  justify-content: ${ props => props.justify };
  margin-top: ${ props => props.marginTop };
`
