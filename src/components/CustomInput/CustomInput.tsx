import React, { ReactNode, FC } from 'react'
import { Input } from './styles'
import { CustomInputWrapper } from '../../styles/commonStylesAndStyledComponents'
import { CustomLabel } from '../CustomLabel'
import { numOrString } from '../../types'

export interface InputProps {
  label?:string | null;
  children?: ReactNode;
  type?: string;
  onChange: (event: any) => any;
  inlineBlock?: boolean;
  big?: boolean;
  fontSize?: numOrString;
  name?: string;
  value?:any;
  autocomplete?:string;
  required?: boolean;
  margin?: string;
  width?: string;
  marginTop?: string;
  marginBottom?: string;
}

const CustomInput:FC<InputProps> = ({ label, children, ...rest }) => (
  <CustomInputWrapper { ...rest }>
    { children }
    <Input { ...rest } />
    <CustomLabel>{ label }</CustomLabel>
  </CustomInputWrapper>
)

export default CustomInput
