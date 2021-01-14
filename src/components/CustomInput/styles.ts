import styled, { css } from 'styled-components'

import {InputProps} from './CustomInput'


const styleInlineBlock = css`
  width: 100%;
`

const getInlineBlock = (props: InputProps) => {
  if (props.inlineBlock) {
    return styleInlineBlock
  }
  return
}

const styleButtonSizeBig = css`
  height: 4rem;
  font-size: 3rem;
`

const getButtonSize = (props: InputProps) => {
  if (props.big) {
    return styleButtonSizeBig
  }
  return
}


export const Input = styled.input<InputProps>`
  ${ getInlineBlock };
  ${ getButtonSize };
  outline: none;
  font-size: 2rem;
  border: .01rem solid ${ ({ theme }) => theme.darkGray };
  font-size: ${ props => props.fontSize }rem;
  color: ${ ({ theme }) => theme.input.inputColor };
  text-indent: .5rem;


  &:focus ~ label {
    transform: translateY(-130%);
    transition: all .5s;
  }

  &::placeholder {
    font-size: 1.8rem;
    color: ${ ({ theme }) => theme.input.inputPlaceholder };
  }
`


