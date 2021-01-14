import styled from 'styled-components'

import { numOrString } from '../../types'

interface LabelProps {
  marginTop?: numOrString;
  marginBottom?: numOrString;
  marginRight?: numOrString;
  marginLeft?: numOrString;
  fontSize?: numOrString;
}

export const Label = styled.label<LabelProps>`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-110%);
  transition: 300ms ease all;
  margin-top: ${ props => props.marginTop }rem;
  margin-bottom: ${ props => props.marginBottom }rem;
  margin-right: ${ props => props.marginRight }rem;
  margin-left: ${ props => props.marginLeft }rem;
  font-size: ${ props => props.fontSize }rem;
  user-select: none;
`
