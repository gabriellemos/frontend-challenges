import React from 'react'

import * as Styled from './styled'

const CheckboxGroup = ({ id, children, checked, ...props }) => {
  return (
    <Styled.Container className={checked ? 'active' : null}>
      <label htmlFor={id}>{children}</label>
      <input {...props} id={id} type="checkbox" />
    </Styled.Container>
  )
}

export default CheckboxGroup
