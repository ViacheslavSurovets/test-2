import styled, { css } from 'styled-components/macro'

import { HrProps, CustomInputWrapperProps } from '../types'


export const Hr = styled.hr<HrProps>`
  margin: 3rem 0;
  margin-top: ${ props => props.marginTop };
  margin-bottom: ${ props => props.marginBottom };
`

export const commonFontColor = css`
  color: ${ ({ theme }) => theme.darkGray };
`

export const commonFontSize = css`
  font-size: 1.6rem;
`

export const flexCommon = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const commonStyleTextTwoRem = css`
  font-size: 2rem;
`

export const commonStyleTextThreeRem = css`
  font-size: 3rem;
`

export const commonStyleTextFourRem = css`
  font-size: 4rem;
`

export const commonLinkStyle = css`
  text-decoration: none;
  text-underline: none;
  font-size: 1.6rem;
  user-select: none;
`

export const boxShadow = css`
  box-shadow: 0 .5px 5px rgba(0, 0, 0, .5);
`

export const CustomInputWrapper = styled.div<CustomInputWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  position: relative;
  margin: ${ props => props.margin };
  max-width: ${ props => props.width };
  margin-top: ${ props => props.marginTop };
  margin-bottom: ${ props => props.marginBottom };
`

export const DetailsContainer = styled.section`
  ${ flexCommon };
  width: 100%;
  height: 50rem;
`
