import styled from 'styled-components'

export const Container = styled.div`
  max-width: 380px;
  overflow: hidden;
  border: #dbe5e6 1px solid;
  border-radius: 12px;
  background: #ffffff;
  cursor: pointer;

  @media (max-width: 800px) {
    margin: 24px;
  }
`

export const Header = styled.div`
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: ease-in 0.125s;

    &:hover {
      transform-origin: center;
      transform: scale(1.05);
    }
  }

  @media (max-width: 500px) {
    height: calc(100%);

    img {
      object-fit: cover;
    }
  }

  @media (max-width: 375px) {
    height: 160px;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h1 {
    margin: 0px;
    color: #1f2e55;
    font-weight: 900;
    font-size: 22px;
  }

  p {
    color: #717fa6;
    margin: 12px 0px;
    font-weight: 500;
    font-size: 15px;
  }
`
