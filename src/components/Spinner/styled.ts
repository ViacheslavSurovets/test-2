import styled, { keyframes, css } from 'styled-components/macro'

import { SpinnerProps } from './Spinner'

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const textAnimation = keyframes`
  0% {

  }
  25% {
    font-size: 1.2rem;
  }

  50% {
    font-size: 1.2rem;
  }
  75% {
    font-size: 1.2rem;
  }

  100% {
  }
`

export const Spinner = styled.div<SpinnerProps>`
  display: inline-block;
  position: fixed;
  position: ${ props => props.position };
  width: ${ props => props.size }rem;
  height: ${ props => props.size }rem;
  top: ${ props => props.top }%;
  bottom: ${ props => props.bottom }%;
  right: ${ props => props.right }%;
  left: ${ props => props.left }%;
  z-index: 15;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: calc((${ props => props.size }rem) - 20%);
    height: calc((${ props => props.size }rem) - 20%);
    margin: calc((${ props => props.size }rem) * 0.1);
    border: calc((${ props => props.size }rem) * 0.1) solid;
    border-radius: 50%;
    animation: ${ spinnerAnimation } 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${ ({ theme }) => theme.blue } transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

const styleFullSize = css`
  width: 100%;
  height: 100%;
`

const getFullSize = (props: SpinnerProps) => {
  if (props.fullSize) {
    return styleFullSize
  }
  return
}


const setVisibility = (props: SpinnerProps) => {
  if (!props.isHidden) {
    return css`
      display: none;
    `
  } else {
    return css`
      display: inherit;
    `
  }
}

export const SuspenseComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${ setVisibility };
  ${ getFullSize };

  span:nth-child(1) {
    animation-delay: .1s;
  }

  span:nth-child(2) {
    animation-delay: .2s;
  }

  span:nth-child(3) {
    animation-delay: .3s;
  }

  span:nth-child(4) {
    animation-delay: .4s;
  }

  span:nth-child(5) {
    animation-delay: .5s;
  }

  span:nth-child(6) {
    animation-delay: .6s;
  }

  span:nth-child(7) {
    animation-delay: .7s;
  }

  span:nth-child(8) {
    animation-delay: .8s;
  }

  span:nth-child(9) {
    animation-delay: .9s;
  }

  span:nth-child(10) {
    animation-delay: 1s;
  }

`

const styleText = css`
  display: none;
`

const getText = (props: SpinnerProps) => {
  if (!props.text) {
    return styleText
  }
  return
}

export const Text = styled.span`
  font-size: 1.5rem;
  margin-top: 1rem;
  animation: ${ textAnimation } 1.2s;
  animation-iteration-count: 1;
  transition: all 1.2s;
  color: ${ ({ theme }) => theme.suspenseComponent.textColor };
  ${ getText };
`
