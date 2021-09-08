import styled from 'styled-components'

import ArrowBack from '../../images/arrow_back.svg'

export const FloatingBack = styled.button`
  position: absolute;
  top: 32px;
  left: 32px;

  color: #717fa6;
  font-weight: 900;
  font-size: 15px;

  width: 24px;
  height: 24px;

  padding: 8px;
  background: url(${ArrowBack});;
  border: #dbe5e6 1px solid;
  border-radius: 12px;

  &:hover {
    color: #1f2e55;
    cursor: pointer;
  }
`
