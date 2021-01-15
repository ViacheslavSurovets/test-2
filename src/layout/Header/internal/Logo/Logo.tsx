import {FC} from 'react'

// import { LogoContainer } from './styles'
import { logo } from '../../../../assets'
import { ImageContainer } from '../../../../components'

const Logo:FC = (props) => (

      <ImageContainer
        imageUrl={ logo }
        height={ 5 }
        width={ 10 }
        // onClick={ leftMenuToggle }
      />

)

export default Logo
