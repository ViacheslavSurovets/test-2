import { FC } from 'react'

import { Container } from './styles'

export interface IconWrapperTooleTipProps {
  component?: any;
  content?: string;
  marginLeft?: string;
  marginRight?: string;
  turn?: boolean;
  onClick: () => any;
  isHidden?: boolean;
}

const IconWrapper: FC<IconWrapperTooleTipProps> = ({ component: IconComponent, ...rest }) => (
  <Container {...rest}>
    <IconComponent {...rest} />
  </Container>
)

export default IconWrapper
