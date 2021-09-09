import styled from 'styled-components'

import bgDesktop from './images/pattern-background-desktop.svg'
import bgMobile from './images/pattern-background-mobile.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e0e8ff;
  background-image: url(${bgDesktop});
  background-repeat: repeat-x;
  background-size: contain;

  @media (max-width: 800px) {
    background-image: url(${bgMobile});
    background-repeat: no-repeat;
    background-size: contain;
  }
`
