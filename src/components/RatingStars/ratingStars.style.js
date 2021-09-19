import styled from 'styled-components'

export const RatingStarsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.3);
  &.active {
    background-color: #ebebeb;
    border-radius: 1rem;
  }
  svg {
    width: 14px;
    margin-right: 4px;
  }
`
