import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: 'Space Mono', sans-serif;
  border-radius: 25px;
  background: #ffffff;
  padding: 32px;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 379px;
  margin: 13px 16px 16px;

  .selector-tip {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 40px 0;
    gap: 16px 14px;

    > * {
      flex: 33.33%;
      max-width: 117px;
    }

    > label {
      flex: 100%;
      max-width: none;
      text-align: start;
      font-size: 16px;
      font-weight: 700;
      color: #5e7a7d;
    }
  }
`

export const ResumeContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 413px;
  border-radius: 15px;
  background: #00474b;
  padding: 40px;
`
