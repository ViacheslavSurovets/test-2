import styled, { css } from 'styled-components/macro'

const styleBoxShadowAndScaleOnHover = css`
  transform: scale(1.03);
  transition: all 1s ease;
  box-shadow: 4px 4px 4px -3px ${ ({ theme }) => theme.black };
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: center;
  width: 20rem;
  height: 25rem;
  padding: 1rem;
  margin: 1rem;
  background: ${ ({ theme }) => theme.projectCard.background };
  transition: all 1s ease;
  cursor: pointer;
  user-select: none;

  &:hover {
    ${ styleBoxShadowAndScaleOnHover };
  }
`

export const ButtonSpinner = styled.div`
  display: flex;
  justify-content: space-around;
`
