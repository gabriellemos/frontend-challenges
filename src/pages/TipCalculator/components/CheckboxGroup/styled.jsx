import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 48px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;

  color: #ffffff;
  background: #00474b;

  > label {
    cursor: pointer;
  }

  input[type='checkbox'] {
    display: none;
  }

  &.active {
    color: #00474b;
    background: #26c2ae;
  }
`
