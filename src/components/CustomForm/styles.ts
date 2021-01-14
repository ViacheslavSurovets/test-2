import styled from 'styled-components'
import { numOrString } from '../../types'

interface FormProps {
  marginTop?: numOrString;
  marginBottom?: numOrString;
  marginRight?: numOrString;
  marginLeft?: numOrString;
}

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: ${ props => props.marginTop }rem;
  margin-bottom: ${ props => props.marginBottom }rem;
  margin-right: ${ props => props.marginRight }rem;
  margin-left: ${ props => props.marginLeft }rem;
`
