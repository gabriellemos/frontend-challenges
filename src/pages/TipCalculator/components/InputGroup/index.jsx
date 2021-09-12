import React from 'react'

import Input from '../../../../components/Input'
import * as Styled from './styled'

const InputGroup = ({ label, icon, ...props }) => {
  return (
    <Styled.Container>
      {label && <label>{label}</label>}
      <div className="input-container">
        <img src={icon} />
        <Input {...props} />
      </div>
    </Styled.Container>
  )
}

export default InputGroup
