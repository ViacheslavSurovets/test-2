import { FC, ReactNode } from 'react'
import { Button } from './styles'
import { numOrString } from '../../types'

export interface CustomButtonProps {
  onClick?: (prop:any) => any | undefined;
  type?: 'submit' | 'button';
  marginTop?: numOrString;
  block?: boolean;
  marginBottom?: numOrString;
  marginRight?: numOrString;
  marginLeft?: numOrString;
  fontSize?: numOrString;
  width?: numOrString;
  height?: numOrString;
  orangeSoft?: boolean;
  googleButton?: boolean;
  whiteBlue?: boolean;
  mobile?: boolean;
  children: ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({ children, ...rest }) => (
  <Button { ...rest }>
    { children }
  </Button>
)

export default CustomButton

