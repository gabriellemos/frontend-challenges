import styled from 'styled-components'

export const Primary = styled.button`
  background: #382ae1;
  color: #ffffff;
  font-weight: 900;
  font-size: 15px;
  padding: 15px;

  border: none;
  border-radius: 11px;
  box-shadow: 0px 20px 20px rgba(56, 42, 225, 0.190291);

  &:hover {
    background: #766cf1;
    cursor: pointer;
  }
`

export const Secondary = styled.button`
  background: none;
  color: #717fa6;
  font-weight: 900;
  font-size: 15px;
  border: none;

  &:hover {
    color: #1f2e55;
    cursor: pointer;
  }
`

export const Terciary = styled.button`
  background: none;
  color: #382ae1;
  font-weight: 700;
  font-size: 14px;
  border: none;

  text-decoration-line: underline;

  &:hover {
    color: #766cf1;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    font-size: 13px;
  }
`
