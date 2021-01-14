import styled from 'styled-components/macro'
import { flexCommon } from '../../styles/commonStylesAndStyledComponents'

export const Container = styled.span`
  position: relative;
  margin-left: 1rem;
  cursor: pointer;
  
  &:hover {
    .js-tooltip{
      display: inherit;
      visibility: visible;
      opacity: 1;
      transition: 1s all ease;
    }
  }
`

export const Tooltip = styled.div`
  ${flexCommon};
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;
  background-color: ${({theme})=> theme.gray};
  border-radius: 5%;
  transform: translate(115%, -20%);
  border: .5px dashed ${({theme}) => theme.blue};
  display: none;
  visibility: hidden;
  opacity: 0;
  transition: 1s all ease;
  max-width: 30rem;
  min-width: 15rem;
  white-space: pre-wrap;
`
