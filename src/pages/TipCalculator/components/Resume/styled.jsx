import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
    }

    .subtitle {
      font-size: 13px;
      font-weight: 700;
      color: #7f9d9f;
    }
  }
  
  .value {
    font-size: 48px;
    font-weight: 700;
    color: #26c2ae;
    text-align: right;
  }
`
