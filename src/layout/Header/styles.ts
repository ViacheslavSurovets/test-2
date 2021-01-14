import styled, { css } from 'styled-components/macro'
import { flexCommon } from '../../styles/commonStylesAndStyledComponents'
import { mobile, tablet } from '../../utils/media'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  box-shadow: 0 .5px 5px rgba(0, 0, 0, .5);
  background: ${ ({ theme }) => theme.header.background };
  z-index: 10;
`

export const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  min-height: 8rem;
`

export const Wrapper = styled.div`
  position: relative;
`


interface UserContextMenuProps {
  visible?: boolean;
}

const visible = css`
  opacity: 1;
  visibility: visible;
  transition: .4s all .15s;
`

const unvisible = css`
  opacity: 0;
  visibility: hidden;
  transition: .4s all .15s;
`

const setVisible = (props: UserContextMenuProps) => {
  if (props.visible) {
    return unvisible
  } else {
    return visible
  }
}

export const UserContextMenu = styled.menu<UserContextMenuProps>`
  display: flex;
  flex-direction: column;
  margin: .5rem 0 .5rem .3rem;
  background-color: ${ ({ theme }) => theme.gray };
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(100%);
  ${ setVisible };
`


export const UserContextMenuItem = styled.div`
  height: 3rem;
  border-top: .5px dashed ${ ({ theme }) => theme.blue };
  border-bottom: .5px dashed ${ ({ theme }) => theme.blue };
  cursor: pointer;
  ${ flexCommon };
`

export const Text = styled.span`
  margin: 0 .3rem 0 .3rem;
  color: ${ ({ theme }) => theme.blue }
`

export const NameText = styled.span`
  margin-left: 2rem;
  font-size: 2.5rem;
`


export const HeaderTitleContainer = styled.title`
  ${ flexCommon };
  width: 25rem;
  position: absolute;
  left: 50%;
  margin-left: -12.5rem;

  ${ tablet } {
    right: 10%;
  }
;

  ${ mobile } {
    display: none;
  }
`

export const HeaderTitle = styled.span`
  font-size: 3rem;
  font-family: 'Open Sans', sans-serif;
`
