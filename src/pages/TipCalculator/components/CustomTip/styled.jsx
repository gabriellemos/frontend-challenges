import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  background: #f3f9fa;
  border-radius: 5px;

  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: none;
    border: none;
    
    padding: 6px 13px;

    font-size: 24px;
    font-weight: 700;
    text-align: right;
    color: #547878;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`
