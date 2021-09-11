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

    > * {
      flex: 33.33%;
    }

    label {
      flex: 100%;
      text-align: start;
      margin-bottom: 16px;
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
