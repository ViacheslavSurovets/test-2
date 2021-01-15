import styled, { css } from 'styled-components/macro'

interface LinkProps {
  scrollable?: boolean
}

export const Title = styled.h2`
  margin: 7rem 0 4rem 0;
`

const setScrollable = ({ scrollable }: LinkProps) => scrollable &&
  css`
    position: sticky;
    top: 8rem;
    height: 4rem;
    z-index: 9;
    background-color: ${ ({ theme }) => theme.white };
  `

export const Line = styled.div<LinkProps>`
  display: flex;
  margin-top: 3rem;
  ${ setScrollable };
`

export const Aside = styled.aside`
  //max-height: 100vh;
  //overflow-x: hidden;
  //overflow-y: auto;
  //::-webkit-scrollbar {width:0};
  //-ms-overflow-style: none;
`


