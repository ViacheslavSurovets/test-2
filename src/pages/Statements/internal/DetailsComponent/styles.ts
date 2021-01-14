import styled, { css } from 'styled-components/macro'

import { DetailsComponentProps } from './DetailsComponent'

const visible = css`
  display: inherit;
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  transition: 2s all ease;
`

const unvisible = css`
  display: none;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-100%);
  transition: 2s all ease;
`

const setVisibility = (props: DetailsComponentProps) => {
  if (props.hide) {
    return unvisible
  } else {
    return visible
  }
}


export const DetailsContent = styled.div<DetailsComponentProps>`
  width: 30rem;
  margin-top: 3rem;
  ${ setVisibility };
`

