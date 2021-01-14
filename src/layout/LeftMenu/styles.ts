import styled, { css } from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { flexCommon } from '../../styles/commonStylesAndStyledComponents'


interface LeftMenuProps {
  visible?: boolean
}

const visible = css`
  opacity: 1;
  visibility: visible;
  transition: .4s all .15s;
  transform: translateX(0);
`

const unvisible = css`
  opacity: 0;
  visibility: hidden;
  transition: .4s all .15s;
  transform: translateX(-20rem);
`

const setVisibility = (props:LeftMenuProps) => {
  if(props.visible){
    return visible
  }else {
    return unvisible
  }
}

export const Container = styled.nav<LeftMenuProps>`
  display: flex;
  flex-direction: column;
  box-shadow: 0.5px 0 5px rgba(0, 0, 0, .5);
  width: 20rem;
  position: absolute;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.white};
  ${setVisibility};
`


export const LeftMenuItemWrapper = styled.div`
  position: sticky;
  top: 9rem;
`

export const CustomLink = styled(NavLink)`
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  height: 5rem;
  text-decoration: none;
  position: relative;
  border-left: 4px solid ${ ({ theme }) => theme.menu.background };
  color: ${ ({ theme }) => theme.menu.color };
  padding-left: 5rem;
  transition: color 100ms, background-color 100ms, font-size .5s;
  background-color: ${ ({ theme }) => theme.white };
  user-select: none;

  &.selected, &:hover {
    border-left-color: ${ ({ theme }) => theme.menu.selected.color };
    background-color: ${ ({ theme }) => theme.menu.selected.background };
    color: ${ ({ theme }) => theme.menu.selected.color };
    font-size: 1.65rem;
    transition: font-size .5s;
  }

  &.selected {
    font-weight: 500;
  }

  &:hover {
    cursor: pointer;
  }

  .label {
    padding-left: 1.2rem;
  }
`


const countShow = css`
  display: inherit;
`

const countOfNewProjects = (props: any) => {
  if (props.visible === 'true') {
    return countShow
  }
  return
}

export const LeftMenuInfoNew = styled.span`
  ${ flexCommon };
  position: absolute;
  right: 0;
  background-color: ${ ({ theme }) => theme.menu.infoNew.background };
  color: ${ ({ theme }) => theme.menu.infoNew.color };
  width: 3.2rem;
  height: 3.2rem;
  font-size: 1.5rem;
  border-radius: 50%;
  display: none;
  ${ countOfNewProjects };
  margin-right: 0.5rem;
`
