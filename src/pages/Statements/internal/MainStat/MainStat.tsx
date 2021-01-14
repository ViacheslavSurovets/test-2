import { FC, useContext, useState } from 'react'

import { HideDetails } from './styles'
import { IconsContainer, DetailsComponent } from '../../internal'
import { TextContext } from '../../../../context'
import { mainStat as MAIN_STAT } from '../../../../data'

const MainStat: FC = (props) => {
 const { txt } = useContext(TextContext)
  const [hideDetails, setHideDetails] = useState(false)

  const handleClick =  () => {
    setHideDetails(!hideDetails)
  }


  return(
    <aside>
      <IconsContainer/>
      <DetailsComponent hide={hideDetails} data={MAIN_STAT}/>
      <HideDetails onClick={handleClick}>{txt && txt.pages.statements.mainState.hideDetails }</HideDetails>
    </aside>
  )
}

export default MainStat
