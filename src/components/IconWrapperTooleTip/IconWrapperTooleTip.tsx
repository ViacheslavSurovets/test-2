import { FC } from 'react'

import { Container, Tooltip } from './styles'

interface IconWrapperTooleTipProps {
  component: any;
  content?: string;
  marginLeft?: string
}

const IconWrapperTooleTip: FC<IconWrapperTooleTipProps> = ({ component: IconComponent, content }) => (
  <Container>
    <IconComponent/>
    <Tooltip className="js-tooltip">{ content }</Tooltip>
  </Container>
)

export default IconWrapperTooleTip
