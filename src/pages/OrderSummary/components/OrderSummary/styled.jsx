import styled from 'styled-components'

export const Container = styled.div`
  width: 450px;
  overflow: hidden;
  border-radius: 48px;
  background: #ffffff;

  @media (max-width: 800px) {
    margin: 24px;
  }
`

export const Header = styled.div`
  height: 220px;

  img {
    width: 100%;
    height: 100%;
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
  margin: 0px 32px;

  h1 {
    margin: 45px 0px 0px;
    color: #1f2e55;
    font-weight: 900;
    font-size: 28px;
  }

  h2 {
    color: #717fa6;
    margin: 17px 12px 20px;
    font-weight: 500;
    font-size: 16px;
  }

  .payment-plan {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #f7f9ff;
    border-radius: 11px;
    padding: 25px 24px;

    div {
      margin: 0px 20px;

      .title {
        font-size: 16px;
        font-weight: 900;
        margin-bottom: 6px;
        color: #1f2e55;
      }

      .value {
        font-size: 16px;
        font-weight: 500;
        color: #717fa6;
      }

      * {
        margin: 0px;
      }
    }

    div + * {
      margin-left: auto;
    }
  }

  @media (max-width: 800px) {
    margin: 0px 24px;

    h1 {
      margin: 32px 0px 0px;
      font-size: 22px;
    }

    h2 {
      margin: 16px 12px 24px;
      font-size: 15px;
    }

    .payment-plan {
      padding: 17px 16px;

      div {
        .title {
          font-size: 14px;
        }

        .value {
          font-size: 14px;
        }
      }
    }
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px 48px 48px;

  button:first-child {
    align-self: stretch;
    margin-bottom: 32px;
  }

  @media (max-width: 800px) {
    margin: 24px 24px 32px;

    button:first-child {
      margin-bottom: 24px;
    }
  }
`
