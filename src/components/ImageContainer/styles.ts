import styled, { keyframes, css } from 'styled-components/macro'
//eslint-disable-next-line
import { ImageContainerProps } from './ImageContainer'

const linkKeyframe = keyframes`

  0% {
    transform: rotate(-5deg) scale(1.1);
    //transform: rotate(-100deg) scale(1.1);
  }
  40% {
    transform: rotate(10deg) scale(1.12)
  }

  100% {
  }
`

const circle = css`
  border-radius: 50%;
`

const setShape = (props: ImageContainerProps) => {
  if (props.shape === 'circle') {
    return circle
  }
  return
}

export const Image = styled.div<ImageContainerProps>`
  width: ${ props => props.width }rem;
  height: ${ props => props.height }rem;
  text-decoration: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${ props => props.background });
  cursor: pointer;
  transition: all .5s;
  background-color: aqua;
  ${ setShape };

  &:hover {
    transform: scale(1.03);
    transition: all .5s;
  }

  &:active {
    animation: ${ linkKeyframe } .5s cubic-bezier(0.5, 0, 0.5, 1);
  }
`
