import { FC, ReactNode } from 'react'
import { Button } from './styles'
import { numOrString } from '../../types'
import { Spinner } from '../Spinner'
import { ButtonSpinner } from '../CardComponent/styles'

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
  spinner?: boolean;
  spinnerPosition? : 'absolute' | 'fixed' | 'relative' | 'static' | 'inherit'
}

const CustomButton: FC<CustomButtonProps> = ({ children, spinner, spinnerPosition, ...rest }) => (
  <Button { ...rest }>
    { children }
    <ButtonSpinner>
      <Spinner isHidden={ spinner } size={ 3 } left={ 10 } position={spinnerPosition} />
    </ButtonSpinner>
  </Button>
)

export default CustomButton

