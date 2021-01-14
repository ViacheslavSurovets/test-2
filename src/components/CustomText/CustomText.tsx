import { FC } from 'react'

import { Text, Div } from './styles'


export interface CustomTextProps {
  fontSize?: string | number;
  color?: string;
  height?: string | number;
  width?: string |number;
  justify?: 'flex-start' | 'flex-center' | 'flex-end';
  paidOn?: string | undefined;
  status?: string;
  marginTop?:string;
  fontWeight?:string
}

const CustomText:FC<CustomTextProps> = ({children, ...rest}) => (
  <Div {...rest}>
    <Text {...rest}>{children}</Text>
  </Div>

)

export default CustomText
