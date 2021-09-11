import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;

  width: 100%;
  max-width: 379px;

  label {
    font-size: 16px;
    font-weight: 700;
    color: #5e7a7d;
    margin-bottom: 6px;
  }

  .input-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 100%;

    height: 48px;
    background: #f3f9fa;
    border-radius: 5px;
    padding: 6px 17px;

    img {
      color: #9ebbbd;
    }

    input {
      border: none;
      background: none;
      text-align: end;
      font-size: 24px;
      font-weight: 700;
      color: #00474b;

      &:focus {
        outline: none;
      }
    }
  }
`
