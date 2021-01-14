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


export const commonStyleTitleText = css`
  ${ commonFontColor };
  font-size: 2.5rem;
`

export const commonStyleText = css`
  ${ commonFontColor };
  ${ commonFontSize };
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  min-height: 8rem;
  width: 100%;
  position: relative;
`

export const commonContentWrapper = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  min-height: 70vh;
`

export const Paragraph = styled.p`
  ${ commonStyleTextTwoRem };
  text-indent: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const styleBoxShadowAndScaleOnHover = css`
  transform: scale(1.03);
  transition: all 1s ease;
  box-shadow: 4px 4px 4px -3px ${ ({ theme }) => theme.black };
`


export const TitleMd = styled.h2`
  ${ commonStyleTextThreeRem };
  user-select: none;
`

export const PageTitle = styled.h2`
  font-size: 3rem;
`

export const CloseIconWrapper = styled.figure`
  position: absolute;
  right: 3%;
  top: 3%;
  cursor: pointer;
`

export const IconWrapper = styled.div`
  ${ flexCommon };
  cursor: pointer;
`
