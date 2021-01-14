import { FC } from 'react'
import { IconWrapper, TextExplain, TextInfo } from './styles'



interface IconComponentProp {
    component?: any,
    textExplain?:string,
    info?: string
}

const IconComponent:FC<IconComponentProp> = ({component: IconComponent, textExplain, info}) => {

  return (
    <IconWrapper>
      <IconComponent />
      <TextExplain>{textExplain}</TextExplain>
      <TextInfo>{info}</TextInfo>
    </IconWrapper>
  )
}

export default IconComponent
