import React from 'react'

import * as Styled from './styled'

const InputGroup = ({ label, icon, pattern, formatter, onChange, ...props }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value)
  }

  return (
    <Styled.Container>
      <label>{label}</label>
      <div className="input-container">
        <img src={icon} />
        <input {...props} onChange={handleChange} />
      </div>
    </Styled.Container>
  )
}

export default InputGroup
